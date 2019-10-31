import React from 'react';
import View from './ModalUpdateCertificate-view';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

class ModalUpdateCertificate extends React.Component {
    state = {
        CertificateId: '',
        CertificateName: '',
        CertificateIssuingCompany: '',
        date_expidition: new Date(),
        date_expiration: new Date(),
    }


    render() {
        const {
            getCertificateReducer
        } = this.props;
        let {CertificateId,CertificateName,CertificateIssuingCompany,
            date_expidition,date_expiration} = this.state;
        
        CertificateId = getCertificateReducer.id;
        CertificateName = getCertificateReducer.name;
        CertificateIssuingCompany = getCertificateReducer.issuing_company;
        // date_expidition = moment(new Date(getCertificateReducer.expedition)).format('DD-MM-YYYY');
        // date_expiration = moment(new Date(getCertificateReducer.expiration)).format('DD-MM-YYYY');
        date_expidition = getCertificateReducer.expedition;
        date_expiration = getCertificateReducer.expiration;
        return (
            <View
                CertificateId={CertificateId}
                CertificateName={CertificateName}
                CertificateIssuingCompany={CertificateIssuingCompany}
                date_expidition={date_expidition}
                date_expiration={date_expiration}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    getCertificateReducer: state.getCertificateReducer,
});

const mapDispatchToProps = {
    
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalUpdateCertificate)
)