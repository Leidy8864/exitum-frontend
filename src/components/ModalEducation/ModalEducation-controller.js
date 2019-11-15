
import React from 'react';
import View from './ModalEducation-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createEducation } from '../../redux/actions';
import listEducations from '../../redux/actions/list-educations';
import $ from 'jquery'


class ModalEducation extends React.Component {

    state = {
        description: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        university_name: ''
    }

    description = e => {
        this.setState({ description: e.target.value })
    }

    education = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id');
        const { description, date_expedition, date_expiration, university_name  } = this.state
        let date_start = moment(date_expedition).format('YYYY-MM-DD');
        let date_end = moment(date_expiration).format('YYYY-MM-DD');
        const formData = {
            user_id, date_start, date_end,description,university_name:university_name.value
        }

        const response = await this.props.createEducation(formData);
        $('#education').modal('hide');
        $('#certificate').modal('hide')
        $('#nombreDescripcion').val('')
        this.setState({ 
            description: '',
            university_name:'', 
            date_expedition: new Date(),  
            date_expiration: new Date()
        });
        this.props.listEducations(1);
    }

    onChange = date_expedition => this.setState({ date_expedition })
    onChange_ = date_expiration => this.setState({ date_expiration})

    handleChange = (newValue, actionMeta) => {
        if(newValue){
            this.setState({ university_name: {label: newValue.value, value: newValue.value}  })
        }
    };

    handleInputChange = (inputValue, actionMeta) => {

    };

    render() {
        const {
            listUniversitiesReducer
        } = this.props;
        // console.log("listUniversitiesReducer = ", listUniversitiesReducer);
        return (
            <View
                education = {this.education}
                onChange={this.onChange}
                description = {this.description}
                onChange_= {this.onChange_}
                date={this.state.date_expedition}
                dateFinal = {this.state.date_expiration}
                options = {listUniversitiesReducer}
                handleChange={this.handleChange}
                handleInputChange={this.handleInputChange}
                university_name={this.state.university_name}
            />
        );
    }
}

const mapStateToProps = (state) => ({    
    listUniversitiesReducer: state.listUniversitiesReducer
});

const mapDispatchToProps = {
    createEducation,
    listEducations
}

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(ModalEducation)
)