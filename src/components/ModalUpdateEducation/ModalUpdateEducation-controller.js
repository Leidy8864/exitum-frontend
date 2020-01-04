
import React from 'react';
import View from './ModalUpdateEducation-view';
import { createEducationUpdate, getListSpecialities } from '../../redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import listEducations from '../../redux/actions/list-educations';
import cleanForm from '../../redux/actions/clean-form'
import moment from 'moment';
import $ from 'jquery';


class ModalUpdateEducation extends React.Component {

    state = {
        EducationId: '',
        EducationDescription: '',
        EducationUniversity: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        changed_date_expedition: false,
        changed_date_expiration: false,
        description: '',
        university: '',
        certification_name: '',
        specialities: [],
        specialitiesOptions: []
    }
    async componentDidMount() {
        const response = await getListSpecialities();
        if (response.status) {
            const listSpecialities = response.data.map(x => ({ label: x.name, value: x.name }));
            this.setState({
                specialitiesOptions: listSpecialities
            });
        }
    }
    educationUpdate = async e => {
        e.preventDefault();
        let { date_expedition, date_expiration, changed_date_expedition, changed_date_expiration, university_name, certification_name,specialities } = this.state;
        const user_id = localStorage.getItem('id');
        let specialitiesFormated = []
        specialities.forEach(element => {
            specialitiesFormated.push(element.value)
        });
        const formData = {
            user_id: user_id,
            education_id: $('#EducationId').val(),
            specialities : specialitiesFormated
        }

        if (university_name) {
            formData.university_name = university_name;
        }

        if (certification_name) {
            formData.description = certification_name.value;
        }

        if (date_expedition) {
            formData.date_start = moment(date_expedition).format('YYYY-MM-DD');
        }

        if (date_expiration) {
            formData.date_end = moment(date_expiration).format('YYYY-MM-DD');
        }

        await this.props.createEducationUpdate(formData);        
        this.setState({
            changed_date_expedition: false,
            changed_date_expiration: false,
            EducationId: '',
            EducationDescription: '',
            EducationUniversity: '',
            description: '',
            university: '',
            certification_name: '',
        })
        this.props.listEducations(1);
        this.props.cleanForm("1");
        $('#updateeducation').modal('hide');
    }

    onChange = date_expedition => {
        this.setState({ date_expedition: date_expedition, changed_date_expedition: true })
    }
    onChange_ = date_expiration => {
        this.setState({ date_expiration: date_expiration, changed_date_expiration: true })
    }

    handleChange = (newValue, actionMeta) => {
        if (newValue) {
            this.setState({
                university_name: newValue.value,
                university: { label: newValue.label, value: newValue.value }
            })
        }
    };

    handleInputChange = (inputValue, actionMeta) => {

    };

    certificationChange = (newValue, actionMeta) => {
        if (newValue) {
            this.setState({ certification_name: { label: newValue.label, value: newValue.label } })
        }
    };
    certificationInputChange = (inputValue, actionMeta) => {

    };
    specialityChange = (option, action) => {
        this.setState({
            specialities: option
        })
    }
    render() {

        const {
            getEducationReducer, listUniversitiesReducer, getListCareersReducer
        } = this.props;

        let { EducationId,
            date_expedition,
            date_expiration,
            changed_date_expedition,
            changed_date_expiration,
            university,
            certification_name,
            specialities
        } = this.state;

        EducationId = getEducationReducer.id;

        if (getEducationReducer.id && $('#EducationId').val() !== EducationId) {
            university = this.state.university === '' ?
                { label: getEducationReducer.university.university, value: getEducationReducer.university.university }
                : this.state.university
            specialities = specialities.length < 1 ?  getEducationReducer.toEducationSpecialities.map((element) => ({label: element.name, value : element.name})) : specialities
            if (!changed_date_expedition) date_expedition = new Date(moment(getEducationReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
            if (!changed_date_expiration) date_expiration = new Date(moment(getEducationReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));
            if (!changed_date_expedition && !changed_date_expiration) {
                $('#EducationId').val(EducationId);
                $('#EducationDescription').val(getEducationReducer.description);
                $('#EducationUniversity').val(getEducationReducer.university.university);
            }
            if (certification_name === '') {
                certification_name = { label: getEducationReducer.description, value: getEducationReducer.description };
            }
            localStorage.setItem('date_start', new Date(moment(getEducationReducer.date_start).add(1, 'days').format('YYYY-MM-DD')));
            localStorage.setItem('date_end', new Date(moment(getEducationReducer.date_end).add(1, 'days').format('YYYY-MM-DD')));
        }

        return (
            <View
                onChange={this.onChange}
                onChange_={this.onChange_}
                educationUpdate={this.educationUpdate}
                EducationId={EducationId}
                date={date_expedition}
                dateFinal={date_expiration}
                options={listUniversitiesReducer}
                handleChange={this.handleChange}
                university={university}
                handleInputChange={this.handleInputChange}
                certificationChange={this.certificationChange}
                certificationInputChange={this.certificationInputChange}
                specialityChange={this.specialityChange}
                specialities={specialities}
                specialitiesOptions={this.state.specialitiesOptions}
                certifications={getListCareersReducer}
                certification_name={certification_name}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    getEducationReducer: state.getEducationReducer,
    listUniversitiesReducer: state.listUniversitiesReducer,
    getListCareersReducer: state.getListCareersReducer,

});

const mapDispatchToProps = {
    createEducationUpdate,
    listEducations,
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalUpdateEducation)
)