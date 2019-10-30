
import React from 'react';
import View from './ModalEducation-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createEducation } from '../../redux/actions';


class ModalEducation extends React.Component {

    state = {
        description: '',
        date: new Date(),
        dateFinal: new Date(),
        university_id: 1,
        other_university: ''
    }

    description = e => {
        this.setState({ description: e.target.value })
    }

    university_id = e => {
        this.setState({ university_id: e.target.value })
    }

    other_university = e => {
        this.setState({ other_university: e.target.value })
    }

    education = async e => {
        e.preventDefault();
        const { description, date, dateFinal, university_id, other_university } = this.state
        let date_start = moment(date).format('L')
        let date_end = moment(dateFinal).format('L')

        const formData = {
            description, date_start,date_end,university_id,other_university
        }

        console.log('FORMDATA',formData);
        const response = await this.props.createEducation(formData);
        console.log("response", response);
    }

    onChange = date => this.setState({ date })
    onChange_ = dateFinal => this.setState({ dateFinal})

    render() {
        return (
            <View
                education = {this.education}
                description = {this.description}
                university_id = {this.university_id}
                other_university = {this.other_university}
                onChange={this.onChange}
                onChange_= {this.onChange_}
                date={this.state.date}
                dateFinal={this.state.dateFinal}
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