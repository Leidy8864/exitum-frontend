
import React from 'react';
import View from './ModalCertificate-view';
import { connect } from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { createCertification, getListSpecialities } from '../../redux/actions';
import $ from 'jquery';
import listCertifications from '../../redux/actions/list-certifications';

class ModalCertificate extends React.Component {

    state = {
        name: '',
        company_name: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        document: '',
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
    name = e => {
        this.setState({ name: e.target.value })
    }

    certificate = async e => {
        e.preventDefault();
        var formData = new FormData();
        const { name, company_name, date_expedition, date_expiration, certification_name,specialities } = this.state;
        formData.append('user_id', localStorage.getItem('id'));
        formData.append('name', certification_name.value);
        formData.append('issuing_company', company_name.value);
        formData.append('date_expedition', moment(date_expedition).format('YYYY-MM-DD'));
        formData.append('date_expiration', moment(date_expiration).format('YYYY-MM-DD'));
        formData.append('document', document.querySelector('#choose_file').files[0]);
        for (let index = 0; index < specialities.length; index++) {
            formData.append('specialities',specialities[index].value)
        }
        const response = await this.props.createCertification(formData);
        console.log("CREATE CERTIFICATIONS", response);

        $('#certificate').modal('hide')
        $('#nombreCertificado').val('')
        this.setState({
            company_name: '',
            name: '',
            date_expedition: new Date(),
            date_expiration: new Date(),
            certification_name: '',
        });
        this.props.listCertifications(1);
    }

    onChange = date_expedition => this.setState({ date_expedition })
    onChange_ = date_expiration => this.setState({ date_expiration })

    handleChange = (newValue, actionMeta) => {
        if (newValue) {
            this.setState({ company_name: { label: newValue.value, value: newValue.value } })
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
            listCompaniesReducer,
            listCertificationsNameReducer
        } = this.props;

        return (
            <View
                name={this.name}
                certificate={this.certificate}
                onChange={this.onChange}
                onChange_={this.onChange_}
                date={this.state.date_expedition}
                dateFinal={this.state.date_expiration}
                options={listCompaniesReducer}
                handleChange={this.handleChange}
                handleInputChange={this.handleInputChange}
                company_name={this.state.company_name}
                certificationChange={this.certificationChange}
                certificationInputChange={this.certificationInputChange}
                specialityChange={this.specialityChange}
                specialities={this.state.specialities}
                specialitiesOptions={this.state.specialitiesOptions}
                certifications={listCertificationsNameReducer}
                certification_name={this.state.certification_name}
            />
        );
    }
}

const mapDispatchToProps = {
    createCertification,
    listCertifications
}

const mapStateToProps = (state) => ({
    getCertificateReducer: state.getCertificateReducer,
    listCompaniesReducer: state.listCompaniesReducer,
    listCertificationsNameReducer: state.listCertificationsNameReducer,
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalCertificate)
)

