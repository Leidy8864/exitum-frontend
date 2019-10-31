
import React from 'react';
import View from './ModalSkill-view';
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom'
import { createSkills } from '../../redux/actions';

class ModalSkill extends React.Component {

    state = {
        skill: ''
    }

    skill = e => {
        this.setState({ skill: e.target.value })
    }

    skills = async e => {
        e.preventDefault();
        let user_id = localStorage.getItem('id');
        const { skill } = this.state
        const formData = {
            user_id,skill
        }

        const res = await this.props.createSkills(formData);
        console.log("RESPUESTA SKILL", res);
    }

    render() {
        return (
            <View
                skills = {this.skills}
                skill = {this.skill}
            />
        );
    }
}

const mapDispatchToProps = {
    createSkills
}

export default withRouter(
    connect(null,mapDispatchToProps)(ModalSkill)
)