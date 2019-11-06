
import React from 'react';
import View from './ModalUpdateEducation-view';
import { createEducationUpdate } from '../../redux/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import listEducations from '../../redux/actions/list-educations';
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
    }

    educationUpdate = async e => {
        e.preventDefault();
        const { EducationUniversity, date_start, date_end, EducationDescription } = this.state;
        // formData.append('user_id',localStorage.getItem('id'));
        // formData.append('certification_id',$('#educationId').val());
        // formData.append('description',$('#EducationDescription').val());
        // formData.append('university_name',$('#university_name').val());
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
        localStorage.setItem('date_start', date_expedition);
        this.setState({ date_expedition: date_expedition, changed_date_expedition: true })
    }
    onChange_ = date_expiration => {
        localStorage.setItem('date_end', date_expiration);
        this.setState({ date_expiration: date_expiration, changed_date_expiration: true })
    }

    render() {

        const {
            getEducationReducer
        } = this.props;
        console.log("getEducationReducer = ", getEducationReducer);
        
        let { EducationId, 
                EducationDescription, 
                EducationUniversity,
                date_expedition, 
                date_expiration, 
                changed_date_expedition, 
                changed_date_expiration 
            } = this.state;

        
        EducationId = getEducationReducer.id;

        if(!changed_date_expedition) date_expedition = new Date(moment(getEducationReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
        if(!changed_date_expiration) date_expiration = new Date(moment(getEducationReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));
        
        if($('#educationId').val() !== EducationId){
            EducationDescription = getEducationReducer.description;
            EducationUniversity = getEducationReducer.university.university;
            $('#educationId').val(EducationId);
            localStorage.setItem('date_start', new Date(moment(getEducationReducer.date_start).add(1, 'days').format('YYYY-MM-DD')));
            localStorage.setItem('date_end', new Date(moment(getEducationReducer.date_end).add(1, 'days').format('YYYY-MM-DD')));
        }

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