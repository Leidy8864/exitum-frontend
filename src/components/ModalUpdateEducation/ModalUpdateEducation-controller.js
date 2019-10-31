
import React from 'react';
import View from './ModalUpdateEducation-view';
import { createEducationUpdate } from '../../redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import listEducations from '../../redux/actions/list-educations';
// import moment from 'moment'
import $ from 'jquery'

class ModalUpdateEducation extends React.Component {

    state = {
        EducationId: '',
        EducationDescription: '',
        EducationUniversity: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        changed_date_expedition: false,
        changed_date_expiration: false,
    }

    educationUpdate = async e => {
        e.preventDefault();
        const { EducationUniversity, date_start, date_end, EducationDescription } = this.state;
        // formData.append('user_id',localStorage.getItem('id'));
        // formData.append('certification_id',$('#CertificateId').val());
        // formData.append('name',$('#CertificateName').val());
        // formData.append('issuing_company',$('#CertificateIssuingCompany').val());
        // formData.append('date_expedition', moment(localStorage.getItem('expedition')).format('YYYY-MM-DD'));
        // formData.append('date_expiration', moment(localStorage.getItem('expiration')).format('YYYY-MM-DD'));
        // formData.append('document',document.querySelector('#choose_file').files[0]);
        let user_id = localStorage.getItem('id');
        let EducationId = $('#EducationId').val();
        const formData = {
            EducationDescription, EducationUniversity, date_start, date_end, user_id, EducationId
        }


        await this.props.createEducationUpdate(formData);
        this.props.listCertifications(1);
        this.props.cleanForm("1");
        this.setState({ changed_date_expedition: false })
        this.setState({ changed_date_expiration: false })
        $('#updateeducation').modal('hide');
    }

    onChange = date_expedition => {
        localStorage.setItem('expedition', date_expedition);
        this.setState({ date_expedition: date_expedition, changed_date_expedition: true })
    }
    onChange_ = date_expiration => {
        localStorage.setItem('expiration', date_expiration);
        this.setState({ date_expiration: date_expiration, changed_date_expiration: true })
    }

    render() {

        const {
            // getEducationReducer
        } = this.props;
        let { EducationId, 
                EducationDescription, 
                EducationUniversity,
                date_expedition, 
                date_expiration, 
                // changed_date_expedition, 
                // changed_date_expiration 
            } = this.state;

        // EducationId = getEducationReducer.id;
        // EducationDescription = getEducationReducer.description;
        // EducationUniversity = getEducationReducer.university_name;
        // if (!changed_date_expedition) date_expedition = new Date(moment(getEducationReducer.expedition).add(1, 'days').format('YYYY-MM-DD'));
        // if (!changed_date_expiration) date_expiration = new Date(moment(getEducationReducer.expiration).add(1, 'days').format('YYYY-MM-DD'));

        $('#EducationId').val(EducationId);
        $('#EducationDescription').val(EducationDescription);
        $('#EducationUniversity').val(EducationUniversity);

        return (
            <View
                onChange={this.onChange}
                onChange_={this.onChange_}
                educationUpdate={this.educationUpdate}
                EducationId={EducationId}
                EducationDescription={EducationDescription}
                EducationUniversity={EducationUniversity}
                date_expidition={date_expedition}
                date_expiration={date_expiration}
                date={date_expedition}
                dateFinal={date_expiration}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    getEducationReducer: state.getEducationReducer,
});

const mapDispatchToProps = {
    createEducationUpdate,
    listEducations
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalUpdateEducation)
)