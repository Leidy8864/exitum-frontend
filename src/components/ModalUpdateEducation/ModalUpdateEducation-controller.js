
import React from 'react';
import View from './ModalUpdateEducation-view';
import { createEducationUpdate } from '../../redux/actions';
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
        description : '',
        university : '',
    }

    educationUpdate = async e => {
        e.preventDefault();
        let { date_expedition, date_expiration, changed_date_expedition, changed_date_expiration } = this.state;
        if(!changed_date_expedition){
            date_expedition = new Date(moment(localStorage.getItem('date_start')).format('YYYY-MM-DD'))
        }
        if(!changed_date_expiration){
            date_expiration = new Date(moment(localStorage.getItem('date_end')).format('YYYY-MM-DD'))
        }
        const user_id = localStorage.getItem('id');
        const formData = {
            user_id:user_id,
            education_id:$('#EducationId').val(),
            date_start: date_expedition,
            date_end: date_expiration,
            description: $('#EducationDescription').val(),
            university_name: $('#EducationUniversity').val(),
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

    render() {

        const {
            getEducationReducer
        } = this.props;

        let { EducationId,
                date_expedition, 
                date_expiration, 
                changed_date_expedition, 
                changed_date_expiration 
            } = this.state;

        EducationId = getEducationReducer.id;
        
        if(getEducationReducer.id && $('#EducationId').val() !== EducationId){
            if(!changed_date_expedition) date_expedition = new Date(moment(getEducationReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expiration) date_expiration = new Date(moment(getEducationReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expedition && !changed_date_expiration){
                $('#EducationId').val(EducationId);
                $('#EducationDescription').val(getEducationReducer.description);
                $('#EducationUniversity').val(getEducationReducer.university.university);
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
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    getEducationReducer: state.getEducationReducer,
});

const mapDispatchToProps = {
    createEducationUpdate,
    listEducations,
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalUpdateEducation)
)