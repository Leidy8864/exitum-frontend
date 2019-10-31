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
        var formData = new FormData();
        formData.append('user_id',localStorage.getItem('id'));
        formData.append('certification_id',$('#CertificateId').val());
        formData.append('name',$('#CertificateName').val());
        formData.append('issuing_company',$('#CertificateIssuingCompany').val());
        formData.append('date_expedition', moment(localStorage.getItem('expedition')).format('YYYY-MM-DD'));
        formData.append('date_expiration', moment(localStorage.getItem('expiration')).format('YYYY-MM-DD'));
        formData.append('document',document.querySelector('#choose_file').files[0]);
        
        await this.props.createCertificationUpdate(formData);
        this.props.listCertifications(1);
        this.props.cleanForm("1");
        this.setState({ changed_date_expedition: false })
        this.setState({ changed_date_expiration: false })
        $('#updatecertificate').modal('hide');
    }

    onChange = date_expedition => {
        localStorage.setItem('expedition', date_expedition);
        this.setState({ date_expedition: date_expedition, changed_date_expedition: true })
    }
    onChange_ = date_expiration => {
        localStorage.setItem('expiration', date_expiration);
        this.setState({ date_expiration: date_expiration, changed_date_expiration: true})
    }


    render() {
        const {
            getCertificateReducer
        } = this.props;
        let {CertificateId,CertificateName,CertificateIssuingCompany,
            date_expedition,date_expiration,changed_date_expedition,changed_date_expiration} = this.state;
        
        CertificateId = getCertificateReducer.id;
        CertificateName = getCertificateReducer.name;
        CertificateIssuingCompany = getCertificateReducer.issuing_company;
        if(!changed_date_expedition) date_expedition = new Date(moment(getCertificateReducer.expedition).add(1, 'days').format('YYYY-MM-DD'));
        if(!changed_date_expiration) date_expiration = new Date(moment(getCertificateReducer.expiration).add(1, 'days').format('YYYY-MM-DD'));

        $('#CertificateId').val(CertificateId);
        $('#CertificateName').val(CertificateName);
        $('#CertificateIssuingCompany').val(CertificateIssuingCompany);

        return (
            <View
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
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    getCertificateReducer: state.getCertificateReducer,
});

const mapDispatchToProps = {
    createCertificationUpdate,
    listCertifications,
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalUpdateCertificate)
)