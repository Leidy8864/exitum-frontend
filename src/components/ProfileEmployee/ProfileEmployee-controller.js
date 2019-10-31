
import React from 'react';
import View from './ProfileEmployee-view';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { showCertificationByUser, showExperienceByUser, showEducationByUser, showSkillByUser } from '../../redux/actions';
import getCertificate from '../../redux/actions/get-certificate';
import listCertifications from '../../redux/actions/list-certifications';
import listSkills  from '../../redux/actions/list-skills';
import { deleteSkill } from '../../redux/actions';
import Swal from 'sweetalert2';

class ProfileEmployee extends React.Component {

    state = {
        certifications : [],
        experiences: [],
        educations: [],
        skills: []
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            const certificationsAll = await showCertificationByUser(id);
            const experiencesAll = await showExperienceByUser(id);
            const educationsAll = await showEducationByUser(id);
            const skillsAll = await showSkillByUser(id)
            console.log("skillsAll", skillsAll);
            this.setState({
                certifications: certificationsAll,
                experiences: experiencesAll,
                educations: educationsAll,
                skills: skillsAll
            })
        } catch (error) {
            console.log(error)
        }
    }

    idCertificate = async (e) => {
        e.preventDefault();
        const certificate = this.state.certifications[e.target.id];
        localStorage.setItem('expedition', certificate.expedition);
        localStorage.setItem('expiration', certificate.expiration);
        this.props.getCertificate(certificate);
    }

    refreshCertifications = async() =>{
        const certificationsAll = await showCertificationByUser(localStorage.getItem('id'));
        this.setState({
            certifications: certificationsAll
        });
        this.props.listCertifications(0);
    }

    refreshSkills = async() =>{
        const skillsAll = await showSkillByUser(localStorage.getItem('id'));
        this.setState({
            skills: skillsAll
        });
        this.props.listSkills(0);
    }

    handleClickDeleteSkill = async (e) => {
        e.preventDefault();
        const idSkill = e.target.id;

        var id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas esta aptitud, ya no podrás deshacer esta acción.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data = {
                        user_id: localStorage.getItem('id'),
                        skill_id: idSkill
                    }
                    const response = await deleteSkill(data);

                    if (response.status) {

                    } else {
                        console.log("RESPONSE MESSAGE", response.message);
                        this.setState({
                            res_message: response.message
                        });
                    }
                    console.log("RESPONSE", response);
                    this.props.listSkills(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    render() {

        const {listCertificationsReducer, listSkillsReducer} = this.props;

        if(listCertificationsReducer === 1){
            this.refreshCertifications();
        }
        if(listSkillsReducer === 1){
            this.refreshSkills();
        }

        let user = localStorage.getItem('name');
        let lastname = localStorage.getItem('lastname')
        return (
            <View
                user={user}
                lastname={lastname}
                experiences = {this.state.experiences}
                educations = {this.state.educations}
                skills = {this.state.skills}
                certifications = {this.state.certifications}
                idCertificate = {this.idCertificate}
                handleClickDeleteSkill = {this.handleClickDeleteSkill}
            />
        );
    }
}


const mapStateToProps = (state) => ({    
    listCertificationsReducer: state.listCertificationsReducer,
    listSkillsReducer: state.listSkillsReducer,
});

const mapDispatchToProps = {
    showCertificationByUser,
    getCertificate,
    listCertifications,
    listSkills
};





export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProfileEmployee)
)
