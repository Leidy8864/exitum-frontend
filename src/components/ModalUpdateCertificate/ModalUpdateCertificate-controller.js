import React from 'react';
import View from './ModalUpdateCertificate-view';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { createCertificationUpdate } from '../../redux/actions';
import moment from 'moment';
import $ from 'jquery';
import listCertifications from '../../redux/actions/list-certifications';
import cleanForm from '../../redux/actions/clean-form'

class ModalUpdateCertificate extends React.Component {
    state = {
        name: '',
        company_name: '',
        CertificateId: '',
        CertificateName: '',
        CertificateIssuingCompany: '',
        date_expedition: localStorage.getItem('expedition'),
        date_expiration: localStorage.getItem('expiration'),
        changed_date_expedition: false,
        changed_date_expiration: false,
    }

    certificateUpdate = async e => {
        e.preventDefault();
        let {date_expedition,date_expiration,name, company_name} = this.state;
        var formData = new FormData();
        formData.append('user_id',localStorage.getItem('id'));
        formData.append('certification_id',$('#CertificateId').val());
        formData.append('name',$('#CertificateName').val());
        // formData.append('issuing_company',company_name.value);
        formData.append('date_expedition', moment(date_expedition).format('YYYY-MM-DD'));
        formData.append('date_expiration', moment(date_expiration).format('YYYY-MM-DD'));
        formData.append('document',document.querySelector('#choose_file').files[0]);

        console.log("company_name.value = ", company_name.value)

        if(company_name.value){
            formData.append('issuing_company',company_name.value);
        }
        
        await this.props.createCertificationUpdate(formData);
        this.props.listCertifications(1);
        this.props.cleanForm("1");
        this.setState({ changed_date_expedition: false })
        this.setState({ changed_date_expiration: false })
        $('#updatecertificate').modal('hide');
    }

    name = e => {
        this.setState({ name: e.target.value })
    }

    onChange = async(date_expedition) => {
        localStorage.setItem('expedition', date_expedition);
        this.setState({ date_expedition: date_expedition, changed_date_expedition: true })
    }

    onChange_ = async(date_expiration) => {
        localStorage.setItem('expiration', date_expiration);
        this.setState({ date_expiration: date_expiration, changed_date_expiration: true})
    }

    handleChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ company_name: {label: newValue.value, value: newValue.value}  })
        }
    };
    
    handleInputChange = (inputValue, actionMeta) => {};


    render() {
        const {
            getCertificateReducer,
            listCompaniesReducer
        } = this.props;
        let {CertificateId,CertificateName,CertificateIssuingCompany,company_name,name,
            date_expedition,date_expiration,changed_date_expedition,changed_date_expiration} = this.state;
        
        CertificateId = getCertificateReducer.id;
        
        if(getCertificateReducer.id && $('#CertificateId').val() !== CertificateId){
            if(!changed_date_expedition) date_expedition = new Date(moment(getCertificateReducer.date_expedition).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expiration) date_expiration = new Date(moment(getCertificateReducer.date_expiration).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expedition && !changed_date_expiration){
                $('#CertificateId').val(CertificateId);
            }
            localStorage.setItem('expedition', new Date(moment(getCertificateReducer.date_expedition).add(1, 'days').format('YYYY-MM-DD')));
            localStorage.setItem('expiration', new Date(moment(getCertificateReducer.date_expiration).add(1, 'days').format('YYYY-MM-DD')));
        }
        
        $('#CertificateName').val(this.state.name === '' ? getCertificateReducer.name : this.state.name);
        
        if(company_name === ''){
            company_name = {label: getCertificateReducer.issuing_company, value: getCertificateReducer.issuing_company};
        }


        return (
            <View
                name= {this.name}
                onChange={this.onChange}
                onChange_={this.onChange_}
                certificateUpdate={this.certificateUpdate}
                CertificateId={CertificateId}
                CertificateName={CertificateName}
                CertificateIssuingCompany={CertificateIssuingCompany}
                date_expidition={date_expedition}
                date_expiration={date_expiration}
                date={date_expedition}
                dateFinal={date_expiration}
                options = {listCompaniesReducer}
                handleChange={this.handleChange}
                handleInputChange={this.handleInputChange}
                company_name={company_name}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    getCertificateReducer: state.getCertificateReducer,
    listCompaniesReducer: state.listCompaniesReducer,
});

const mapDispatchToProps = {
    createCertificationUpdate,
    listCertifications,
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalUpdateCertificate)
)