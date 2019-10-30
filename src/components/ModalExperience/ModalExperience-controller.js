
import React from 'react';
import View from './ModalExperience-view';
import {connect} from 'react-redux'
import moment from 'moment'
import {withRouter } from 'react-router-dom'
import { createExperience } from '../../redux/actions';

class ModalExperience extends React.Component {

    state = {
        position: '',
        company: '',
        date: new Date(),
        dateFinal: new Date(),
        current_job: false
    }

    position = e => {
        this.setState({ position: e.target.value })
    }

    company = e => {
        this.setState({ company: e.target.value })
    }

    experience = async e => {
        e.preventDefault();
        const {position,company,date,dateFinal,current_job} = this.state
        let date_start = moment(date).format('L')
        let date_end = moment(dateFinal).format('L')
        const formData = {
            position,company,date_start,date_end,current_job
        }
        console.log('FORMDATA',formData);

        const response = await this.props.createExperience(formData);
        console.log("response", response);
    }
    
    onChange = date => this.setState({ date })
    onChange_ = dateFinal => this.setState({ dateFinal})
    
    render() {
        return (
            <View
                position = {this.position}
                company = {this.company}
                experience = {this.experience}
                onChange={this.onChange}
                onChange_= {this.onChange_}
                date={this.state.date}
                dateFinal={this.state.dateFinal}
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
