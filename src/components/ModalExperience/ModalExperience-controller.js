
import React from 'react';
import View from './ModalExperience-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createExperience } from '../../redux/actions';
import $ from 'jquery'

class ModalExperience extends React.Component {

    state = {
        position: '',
        company_name: '',
        date: new Date(),
    }

    position = e => {
        this.setState({ position: e.target.value })
    }

    company_name = e => {
        this.setState({ company_name: e.target.value })
    }

    experience = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id')
        const {position,company_name,date} = this.state
        let date_start = moment(date).format('YYYY-MM-DD');
        const formData = {
            user_id,position,company_name,date_start
        }

        await this.props.createExperience(formData);
        $('#experience').modal('hide');
    }
    
    onChange = date => this.setState({ date })
    
    render() {
        return (
            <View
                position = {this.position}
                company_name = {this.company_name}
                experience = {this.experience}
                onChange={this.onChange}
                date={this.state.date}
            />
        );
    }
}

const mapDispatchToProps = {
    createExperience
}

export default withRouter(
    connect(null,mapDispatchToProps)(ModalExperience)
)
