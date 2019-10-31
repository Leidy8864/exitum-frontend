
import React from 'react';
import View from './ModalEducation-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createEducation } from '../../redux/actions';
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

    university_name = e => {
        this.setState({ university_name: e.target.value })
    }

    education = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id');
        const { description, date_expedition, date_expiration, university_name  } = this.state
        let date_start = moment(date_expedition).format('YYYY-MM-DD');
        let date_end = moment(date_expiration).format('YYYY-MM-DD');
        const formData = {
            user_id, date_start, date_end,description,university_name
        }

        console.log('FORMDATA',formData);
        const response = await this.props.createEducation(formData);
        $('#education').modal('hide')
        console.log("RESPUESTA", response);
    }

    onChange = date_expedition => this.setState({ date_expedition })
    onChange_ = date_expiration => this.setState({ date_expiration})

    render() {
        return (
            <View
                education = {this.education}
                onChange={this.onChange}
                description = {this.description}
                university_name = {this.university_name}
                onChange_= {this.onChange_}
                date={this.state.date_expedition}
                dateFinal = {this.state.date_expiration}
            />
        );
    }
}

const mapDispatchToProps = {
    createEducation
}

export default withRouter(
    connect(null,mapDispatchToProps)(ModalEducation)
)