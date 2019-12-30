
import React from 'react';
import View from './Modal-ads-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import cleanForm from '../../redux/actions/clean-form'
import { listStartupsByUser, listSkillsAxio, createAdvertisement, listAreas, updateAdvertisement } from '../../redux/actions';
import getAdvert from '../../redux/actions/getAdvert';
import reloadPage from '../../redux/actions/reloadPage';
import $ from 'jquery';

class ModalAds extends React.Component {
    state = {
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true,
        error_title: '',
        error_area: '',
        error_skills: '',
        error_startup: '',
        error_description: '',
        success_message: '',
        error_message: '',
        advertisement_id: 0,
        title: '',
        description: '',
        area_id: '',
        startup_id: '',
        skills: [],
        list_skills: [],
        startups: [],
        areas: []
    };

    async componentDidMount() {
        if (localStorage.getItem('role') === "entrepreneur") {
            try {
                const token = localStorage.getItem('token');
                const result = jwt.decode(token);

                const startupsData = await listStartupsByUser({
                    id: result.id
                });
                const skillsData = await listSkillsAxio();
                const areasData = await listAreas();

                var startups = [];
                var skills = [];
                var areas = [];

                if (startupsData.length >= 1) {
                    startups = startupsData.map(x => ({ label: x.name, value: x.id }));
                }

                if (skillsData.length >= 1) {
                    skills = skillsData.map(x => ({ label: x.skill, value: x.skill }));
                }
                if (areasData.length >= 1) {
                    areas = areasData.map(x => ({ label: x.name, value: x.id }));
                }

                this.setState({
                    startups: startups,
                    list_skills: skills,
                    areas: areas
                });
            } catch (error) {
                console.log("ERROR", error);
            }
        }
    }

    componentDidUpdate(nextProps) {
        const { advertisement } = this.props;

        if (nextProps.advertisement !== advertisement) {
            if (advertisement) {
                $('#AdsModal').on('hidden.bs.modal', () => {
                    this.props.getAdvert(null);
                });
                const startupSelected = { label: advertisement.startup.name, value: advertisement.startup.id }
                const areaSelected = { label: advertisement.area.name, value: advertisement.area.id }
                const skillsSelected = advertisement.skills.map(x => ({ label: x.skill, value: x.skill }));
                const arraySkills = advertisement.skills.map(x => (x.skill));
                this.setState({
                    startup_idSelected: startupSelected,
                    area_idSelected: areaSelected,
                    skillsSelected: skillsSelected,
                    advertisement_id: advertisement.id,
                    area_id: advertisement.area.id,
                    startup_id: advertisement.startup.id,
                    skills: arraySkills,
                    title: advertisement.title,
                    description: advertisement.description
                })
            }
        }
    }

    toggleClearable = () =>
        this.setState(state => ({ isClearable: !state.isClearable }));
    toggleDisabled = () =>
        this.setState(state => ({ isDisabled: !state.isDisabled }));
    toggleLoading = () =>
        this.setState(state => ({ isLoading: !state.isLoading }));
    toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
    toggleSearchable = () =>
        this.setState(state => ({ isSearchable: !state.isSearchable }));


    cleanErrors = () => {
        this.setState({
            error_title: '',
            error_area: '',
            error_skills: '',
            error_startup: '',
            error_description: '',
            success_message: '',
            error_message: '',
        });
    }
    cleanState = () => {
        this.setState({
            startup_idSelected: '',
            area_idSelected: '',
            skillsSelected: '',
            advertisement_id: '',
            area_id: '',
            startup_id: '',
            skills: '',
            title: '',
            description: ''
        })
    }
    handleChange = (e) => {

        // const value = e.target.value.trim();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSelectChange = (option, action) => {
        var values = [];
        if (option) {
            var nameSelected = [action.name] + 'Selected';

            if (Array.isArray(option)) {
                for (let index = 0; index < option.length; index++) {
                    values.push(option[index].value)
                }
                const skillsSelected = option.map(option => ({ label: option.label, value: option.value }));
                this.setState({
                    [action.name]: values,
                    [nameSelected]: skillsSelected
                });
            } else {
                const optionSelected = { label: option.label, value: option.value }
                this.setState({
                    [action.name]: option.value,
                    [nameSelected]: optionSelected
                });
            }
        }
    }

    handleSubmit = async (e) => {

        this.props.cleanForm("0");

        this.cleanErrors();

        e.preventDefault();

        const { title, description, area_id, startup_id, skills, advertisement_id } = this.state;

        const formData = { title, description, area_id, startup_id, skills, advertisement_id }

        if (title && description && area_id && startup_id && skills.length >= 1) {
            var response = null;
            if (advertisement_id) {
                response = await updateAdvertisement(formData)
            } else {
                response = await createAdvertisement(formData);
            }
            if (response.status) {
                this.setState({ success_message: response.message });
                this.props.reloadPage(1);
            }
            else {
                this.setState({ error_message: response.message });
            }
            setTimeout(
                () => {
                    $('#AdsModal').modal('hide');
                    if (!advertisement_id) {
                        this.cleanState();
                        this.cleanErrors();
                    }
                },
                1200
            );

        } else {
            if (!title) {
                this.setState({ error_title: 'Debes ingresar un título' })
            }
            if (!area_id) {
                this.setState({ error_area: 'Debes elegir un area' })
            }
            if (!startup_id) {
                this.setState({ error_startup: 'Debes elegir un proyecto' })
            }
            if (!description) {
                this.setState({ error_description: 'Debes ingresar una descripción' })
            }
            if (skills.length < 1) {
                this.setState({ error_skills: 'Debes elegir al menos un skill ' });
            }
        }


    }

    render() {
        var {
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
            areas,
            startups,
            list_skills,
            error_title,
            error_area,
            error_startup,
            error_description,
            error_skills,
            success_message,
            error_message,
            area_idSelected,
            startup_idSelected,
            skillsSelected,
            title,
            description,
            advertisement_id
        } = this.state;

        const { cleanFormReducer } = this.props;

        let content_error_title = '';
        let content_error_startup = '';
        let content_error_area = '';
        let content_error_description = '';
        let content_error_skills = '';

        let content_message = '';
        var defaultSkillOptions = [];
        if (cleanFormReducer) {
            error_title = '';
            error_area = '';
            error_startup = '';
            error_description = '';
            error_skills = '';
            success_message = '';
            error_message = '';
        }

        if (error_title) {
            content_error_title = <p>{error_title}</p>;
        }
        if (error_area) {
            content_error_area = <p>{error_area}</p>;
        }
        if (error_startup) {
            content_error_startup = <p>{error_startup}</p>;
        }
        if (error_description) {
            content_error_description = <p>{error_description}</p>;
        }
        if (error_skills) {
            content_error_skills = <p>{error_skills}</p>;
        }
        if (success_message) {
            content_message = <div className="success-message"><p className="text-center">{success_message}</p></div>;
        }
        if (error_message) {
            content_message = <div className="error-message"><p className="text-center">{error_message}</p></div>;
        }
        return (
            <View
                className="basic-single"
                proyectClassNamePrefix="proyecto"
                AreaClassNamePrefix="area"
                skillClassNamePrefix="skill"
                proyectPlaceholder="Proyecto ..."
                areaPlaceholder="Area ..."
                skillPlaceholder="Aptitud ..."
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                startupOptions={startups}
                content_error_title={content_error_title}
                content_error_startup={content_error_startup}
                content_error_area={content_error_area}
                content_error_description={content_error_description}
                content_error_skills={content_error_skills}
                content_message={content_message}
                areaOptions={areas}
                skillsOptions={list_skills}
                handleChange={this.handleChange}
                handleSelectChange={this.handleSelectChange}
                handleSubmit={this.handleSubmit}
                defaultSkillOptions={defaultSkillOptions}
                areaSelected={area_idSelected}
                startupSelected={startup_idSelected}
                skillsSelected={skillsSelected}
                description={description}
                title={title}
                advertisement_id={advertisement_id}
            />
        );
    }
}
const mapStateToProps = state => ({
    cleanFormReducer: state.cleanFormReducer,
    advertisement: state.getAdvertReducer
});

const mapDispatchToProps = {
    listStartupsByUser,
    listSkillsAxio,
    createAdvertisement,
    listAreas,
    cleanForm,
    getAdvert,
    reloadPage
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalAds)
)
