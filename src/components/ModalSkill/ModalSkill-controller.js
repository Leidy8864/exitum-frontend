
import React from 'react';
import View from './ModalSkill-view';
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom'
import { createSkills, listSkillsAxio} from '../../redux/actions';
import $ from 'jquery';
import listSkills  from '../../redux/actions/list-skills';

class ModalSkill extends React.Component {

    state = {
        skillsSelected: [],
        options:[]
    }

    async componentDidMount() {
        let skills = [];
        const skillsData = await listSkillsAxio();
        if (skillsData.length >= 1) {
            skills = skillsData.map(x => ({ label: x.skill, value: x.id }));
        }
        this.setState({
            options: skills,
        });
    }

    handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log('listSelectedSkills',newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({
            skillsSelected: newValue,
        });
    };

    saveSkills = async(e)=>{
        e.preventDefault();
        let sendSkills = this.state.skillsSelected.map(x => (x.label));
        let user_id = localStorage.getItem('id');
        const formData = {
            user_id: user_id, 
            skills : sendSkills
        }

        console.log("FORMDATA",formData)

        const res = await this.props.createSkills(formData);
        $('#skill').modal('hide');
        console.log("RESPUESTA SKILL", res);
        this.props.listSkills(1);
    }

    render() {
        return (
            <View
                saveSkills={this.saveSkills}
                options = {this.state.options}
                handleChange = {this.handleChange}
            />
        );
    }
}

const mapDispatchToProps = {
    createSkills,
    listSkills,
    listSkillsAxio,
}

export default withRouter(
    connect(null,mapDispatchToProps)(ModalSkill)
)