
import React from 'react';
import View from './Modal-ads-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import cleanForm from '../../redux/actions/clean-form'
import { listStartupsByUser, listSkillsAxio, createAdvertisement, listAreas } from '../../redux/actions';
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

        try {
            const token = localStorage.getItem('token');
            const result = jwt.decode(token);
            
            const startupsData = await listStartupsByUser({
                id: result.id
            });
            const skillsData = await listSkillsAxio();
            const areasData = await listAreas();
    
            console.log("startupsData data", startupsData);
    
    
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
            
            console.log("STARTUPS", startups);
            // console.log("SKILLS", skills);
            console.log("AREAS", areas);
    
            this.setState({
                startups: startups,
                list_skills: skills,
                areas: areas
            });
        } catch (error) {
            console.log("ERROR");
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

    setValue = value => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value
            }
        }));
    };

    handleChange = (e) => {

        const value = e.target.value.trim();
        this.setState({
            [e.target.name]: value
        });
    }
    handleSelectChange = (option, action) => {
        var values = [];
        if (Array.isArray(option)) {
            for (let index = 0; index < option.length; index++) {
                values.push(option[index].value)
            }
            
            this.setState({
                [action.name]: values
            });
        } else {
            this.setState({
                [action.name]: option.value
            });
        }
    }

    handleSubmit = async (e) => {

        this.props.cleanForm("0");

        this.cleanErrors();

        e.preventDefault();

        const { title, description, area_id, startup_id, skills } = this.state;

        const formData = { title, description, area_id, startup_id, skills }
        if (title && description && area_id && startup_id && skills.length >= 1) {

            console.log("title" + title);
            const response = await createAdvertisement(formData);

            console.log("DATA RECIBIDA", formData);

            // console.log("DATA RECIBIDA ANUNCIO", response);

            if (response.status) {
                this.setState({ success_message: response.message });
                setTimeout(
                    () => {
                        $('#AdsModal').modal('hide');
                        window.location.reload();
                    },
                    900
                );
            }
            else {
                console.log("error = ", response)
                this.setState({ error_message: response.message });
                // setTimeout(
                //     () => {
                //         $('#AdsModal').modal('hide');
                //         window.location.reload();
                //     },
                //     900
                // );
            }

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
            error_message
        } = this.state;

        const { cleanFormReducer } = this.props;

        let content_error_title = '';
        let content_error_startup = '';
        let content_error_area = '';
        let content_error_description = '';
        let content_error_skills = '';

        let content_message = '';

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
            />
        );
    }
}
const mapStateToProps = state => ({
    cleanFormReducer: state.cleanFormReducer
});

const mapDispatchToProps = {
    listStartupsByUser,
    listSkillsAxio,
    createAdvertisement,
    listAreas,
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalAds)
)
