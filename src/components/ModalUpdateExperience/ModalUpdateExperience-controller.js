import React from 'react';
import View from './ModalUpdateExperience-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { updateExperience } from '../../redux/actions';
import listExperiences from '../../redux/actions/list-experiences';
import $ from 'jquery'

class ModalUpdateExperience extends React.Component {

    state = {

        experience_id:'',
        position: '',
        description: '',
        company_name: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        isCurrentJob : true,
        isCompanynameChanged: false,
        isSelected: false,
        isDescriptionChanged:false,
        changed_date_expedition:false,
        changed_date_expiration:false,
        
    }

    position = e => {
        this.setState({ position: e.target.value })
    }
    description = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            return false;
        }
        this.setState({ description: e.target.value , isDescriptionChanged: true})
    }

    updateExperience = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id')
        let {
            description, company_name, date_expedition, date_expiration, 
            isDescriptionChanged, changed_date_expedition, changed_date_expiration
        } = this.state;

        if(!isDescriptionChanged){
            description = $('#nombreDescripcion').val()
        }
        if(!changed_date_expedition){
            date_expedition = moment(localStorage.getItem('date_start_')).add(1, 'days').format('YYYY-MM-DD')
        }
        if(!changed_date_expiration){
            date_expiration = moment(localStorage.getItem('date_end_')).add(1, 'days').format('YYYY-MM-DD')
        }
        let date_end = null;

        let isCurrentJob = document.getElementById('true_').checked?true:false;

        if(!isCurrentJob){
            date_end = new Date(moment(date_expiration).format('YYYY-MM-DD'));
        }
 
        const formData = {
            user_id: user_id,
            experience_id:$('#experience_id').val(),
            position: $('#positionName').val(),
            date_start: new Date(moment(date_expedition).format('YYYY-MM-DD')),
            date_end: date_end, 
            description: description
        }
        if(company_name){
            formData.company_name = company_name.value;
        }

        await this.props.updateExperience(formData);

        $('#updateexperience').modal('hide');
        $('#nombreDescripcion').val('')
        $('#nombrePosition').val('')
        this.setState({ 
            position: '',
            description:'',
            company_name:'', 
            date_expedition: new Date(),  
            date_expiration: new Date(),
            isCurrentJob : true
        });
        this.props.listExperiences(1);
    }

    selectCurrentJob = async (e) =>{
        if(e.target.value === 'true_'){
            this.setState({isCurrentJob: true, isSelected:true})
            $('#endDateModal_').css("display", "none");
        }else{
            this.setState({isCurrentJob: false, isSelected:true})
            $('#endDateModal_').css("display", "block");
        }
    }
    
    onChange = date_expedition => {this.setState({ date_expedition: date_expedition, changed_date_expedition:true})}
    onChange_ = date_expiration => this.setState({ date_expiration: date_expiration,changed_date_expiration: true})

    handleChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ company_name: newValue, isCompanynameChanged:true  })
        }
    };
    
    handleInputChange = (inputValue, actionMeta) => {
        
    };
    
    render() {
        const {
            listCompaniesReducer,
            getExperienceReducer,
        } = this.props;

        let {
            experience_id,
            description,
            company_name,
            date_expedition,
            date_expiration,
            changed_date_expedition,
            changed_date_expiration,
            isCompanynameChanged,
            isDescriptionChanged,
            isSelected
        } = this.state;

        experience_id = getExperienceReducer.id;
        if(getExperienceReducer.id && $('#experience_id').val() !== experience_id){
            if(!isCompanynameChanged)   company_name= {label: getExperienceReducer.company_name, value: getExperienceReducer.company_name}
            if(!changed_date_expedition) date_expedition = new Date(moment(getExperienceReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expiration) date_expiration = new Date(moment(getExperienceReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));
            if(!changed_date_expedition && !changed_date_expiration && !isCompanynameChanged && !isSelected && !isDescriptionChanged){
                $('#experience_id').val(experience_id);
                $('#positionName').val(getExperienceReducer.position);
            }

            if(!isDescriptionChanged){
                description = getExperienceReducer.description
                $('#nombreDescripcion').val(getExperienceReducer.description)
            }

            localStorage.setItem('date_start_', moment(getExperienceReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
            localStorage.setItem('date_end_', moment(getExperienceReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));

            if(!isSelected){
                if(getExperienceReducer.current_job === 0){
                    $('#endDateModal_').css("display", "block");
                    let radiobtn = document.getElementById("false_");
                    radiobtn.checked = true;
                }else{
                    let radiobtn = document.getElementById("true_");
                    radiobtn.checked = true;
                    $('#endDateModal_').css("display", "none");
                }
            }
        }

        return (
            <View
                experience_id = {experience_id}
                description = {this.description}
                description_ = {description}
                date = {date_expedition}
                onChange = {this.onChange}
                onChange_ = {this.onChange_}
                dateFinal = {date_expiration}
                options = {listCompaniesReducer}
                handleChange={this.handleChange}
                handleInputChange={this.handleInputChange}
                company_name={company_name}
                selectCurrentJob={this.selectCurrentJob}
                updateExperience={this.updateExperience}
            />
        );
    }
}

const mapDispatchToProps = {
    updateExperience,
    listExperiences
}

const mapStateToProps = (state) => ({    
    listCompaniesReducer: state.listCompaniesReducer,
    getExperienceReducer: state.getExperienceReducer,
});

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(ModalUpdateExperience)
)
