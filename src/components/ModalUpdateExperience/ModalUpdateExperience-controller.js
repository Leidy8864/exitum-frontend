import React from 'react';
import View from './ModalUpdateExperience-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createExperience } from '../../redux/actions';
import listExperiences from '../../redux/actions/list-experiences';
import $ from 'jquery'

class ModalUpdateExperience extends React.Component {

    state = {
        certification_id:'',
        position: '',
        description: '',
        company_name: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        isCurrentJob : true
        
    }

    async componentDidMount(){
        let radiobtn = document.getElementById("true");
        radiobtn.checked = true;
    }

    position = e => {
        this.setState({ position: e.target.value })
    }
    description = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            return false;
        }
        this.setState({ description: e.target.value })
    }

    company_name = e => {
        this.setState({ company_name: e.target.value })
    }

    experience = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id')
        const {position,company_name,date_expedition, date_expiration, isCurrentJob, description} = this.state
        // let description_ = description.split("\n").join('<br>')
        let description_ = description

        let date_start = moment(date_expedition).format('YYYY-MM-DD');
        let date_end = null;
        if(!isCurrentJob){
            date_end = moment(date_expiration).format('YYYY-MM-DD');
        }
        const formData = {
            user_id,position,company_name: company_name.value,date_start,date_end, description: description_
        }

        await this.props.createExperience(formData);
        $('#experience').modal('hide');
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
        if(e.target.value === 'true'){
            this.setState({isCurrentJob: true})
            $('#endDateModal').css("display", "none");
        }else{
            this.setState({isCurrentJob: false})
            $('#endDateModal').css("display", "block");
        }
    }
    
    onChange = date_expedition => this.setState({ date_expedition })
    onChange_ = date_expiration => this.setState({ date_expiration})

    handleChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ company_name: {label: newValue.value, value: newValue.value}  })
        }
    };
    
    handleInputChange = (inputValue, actionMeta) => {
        
    };
    
    render() {
        const {
            listCompaniesReducer,
            getExperienceReducer,
        } = this.props;
        // console.log("getExperienceReducer = ", getExperienceReducer)

        // if(getEducationReducer.id && $('#EducationId').val() !== EducationId){
        //     university = this.state.university === '' ? 
        //                     {label: getEducationReducer.university.university, value: getEducationReducer.university.university}
        //                 : this.state.university
        //     if(!changed_date_expedition) date_expedition = new Date(moment(getEducationReducer.date_start).add(1, 'days').format('YYYY-MM-DD'));
        //     if(!changed_date_expiration) date_expiration = new Date(moment(getEducationReducer.date_end).add(1, 'days').format('YYYY-MM-DD'));
        //     if(!changed_date_expedition && !changed_date_expiration){
        //         $('#EducationId').val(EducationId);
        //         $('#EducationDescription').val(getEducationReducer.description);
        //         $('#EducationUniversity').val(getEducationReducer.university.university);
        //     }
        //     localStorage.setItem('date_start', new Date(moment(getEducationReducer.date_start).add(1, 'days').format('YYYY-MM-DD')));
        //     localStorage.setItem('date_end', new Date(moment(getEducationReducer.date_end).add(1, 'days').format('YYYY-MM-DD')));
        // }

        return (
            <View
                // position = {this.position}
                // description = {this.description}
                // description_ = {this.state.description}
                // // company_name = {this.company_name}
                // experience = {this.experience}
                // onChange={this.onChange}
                // onChange_={this.onChange_}
                // selectCurrentJob={this.selectCurrentJob}
                // date={this.state.date_expedition}
                // dateFinal={this.state.date_expiration}
                // options = {listCompaniesReducer}
                // handleChange={this.handleChange}
                // handleInputChange={this.handleInputChange}
                // company_name={this.state.company_name}
            />
        );
    }
}

const mapDispatchToProps = {
    createExperience,
    listExperiences
}

const mapStateToProps = (state) => ({    
    listCompaniesReducer: state.listCompaniesReducer,
    getExperienceReducer: state.getExperienceReducer,
});

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(ModalUpdateExperience)
)
