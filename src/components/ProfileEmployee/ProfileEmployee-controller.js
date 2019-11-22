
import React from 'react';
import View from './ProfileEmployee-view';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { showDataByUser,showCertificationByUser, showExperienceByUser, showEducationByUser, showSkillByUser,updateImageUser, listUniversities, listCompanies,getOneExperience } from '../../redux/actions';
import getCertificate from '../../redux/actions/get-certificate';
import getEducation from '../../redux/actions/get-education';
import getExperience from '../../redux/actions/get-experience';
import getUniversities from '../../redux/actions/get-list-universities';
import getCompanies from '../../redux/actions/get-list-companies';
import listCertifications from '../../redux/actions/list-certifications';
import listEducations from '../../redux/actions/list-educations';
import listExperiences from '../../redux/actions/list-experiences';
import listSkills  from '../../redux/actions/list-skills';
import { deleteSkill, deleteCertificate, deleteEducation, deleteExperience } from '../../redux/actions';
import Swal from 'sweetalert2';
import $ from 'jquery'

class ProfileEmployee extends React.Component {

    state = {
        certifications : [],
        experiences: [],
        educations: [],
        skills: [],
        photo: '',
        country: '',
        description: '',
        experience: '',
        users: {
            experience: [],
        },
        file: null,
    }

    async componentDidMount() {
        try {
            let id = localStorage.getItem('id')
            const certificationsAll = await showCertificationByUser(id);
            const experiencesAll = await showExperienceByUser(id);
            const educationsAll = await showEducationByUser(id);
            const skillsAll = await showSkillByUser(id);
            const userShow = await showDataByUser(id);
            const experienceActualy = userShow.data.experience[0] ? userShow.data.experience[0].position : ""
            const country = userShow.data.country.country
            const photo = userShow.data.photo
            const description = userShow.data.description
            //localStorage.setItem('photo', photo)

            this.setState({
                certifications: certificationsAll,
                experiences: experiencesAll,
                educations: educationsAll,
                skills: skillsAll,
                users: userShow.data,
                experience: experienceActualy,
                country: country,
                photo: photo,
                description: description

            })

            let listUniversities__ = [];
            let listUniversities_ = await listUniversities(id);
            if (listUniversities_ && listUniversities_.length >= 1) {
                listUniversities__ = listUniversities_.map(x => ({ label: x.university, value: x.university }));
            }
            this.props.getUniversities(listUniversities__);

            let listCompanies__ = [];
            let listCompanies_ = await listCompanies(id);
            if (listCompanies_ && listCompanies_.length >= 1) {
                listCompanies__ = listCompanies_.map(x => ({ label: x.name, value: x.name }));
            }
            this.props.getCompanies(listCompanies__);
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
        $('#updatecertificate').modal('show')
    }

    idEducation = async (e) => {
        e.preventDefault();
        const education = this.state.educations[e.target.id];
        localStorage.setItem('date_start', education.date_start);
        localStorage.setItem('date_end', education.date_end);
        this.props.getEducation(education);
        $('#updateeducation').modal('show')
    }

    idExperience = async (e) => {
        e.preventDefault();
        let experience = await getOneExperience(e.target.id);
        console.log("experience before = ", experience);
        if(experience.date_end === null){
            experience.date_end  = new Date();
        }
        console.log("experience after = ", experience);
        this.props.getExperience(experience);
        $('#updateexperience').modal('show')
    }

    refreshCertifications = async() =>{
        const certificationsAll = await showCertificationByUser(localStorage.getItem('id'));
        this.setState({
            certifications: certificationsAll
        });
        this.props.listCertifications(0);
        let listCompanies__ = [];
        let listCompanies_ = await listCompanies(localStorage.getItem('id'));
        if (listCompanies_ && listCompanies_.length >= 1) {
            listCompanies__ = listCompanies_.map(x => ({ label: x.name, value: x.name }));
        }
        this.props.getCompanies(listCompanies__);
    }

    refreshExperience = async() =>{
        const certificationsAll = await showExperienceByUser(localStorage.getItem('id'));
        this.setState({
            experiences: certificationsAll
        });
        this.props.listExperiences(0);
    }

    refreshSkills = async() =>{
        const skillsAll = await showSkillByUser(localStorage.getItem('id'));
        this.setState({
            skills: skillsAll
        });
        this.props.listSkills(0);
    }

    refreshEducation = async() =>{
        const educationsAll = await showEducationByUser(localStorage.getItem('id'));
        this.setState({
            educations: educationsAll
        });
        this.props.listEducations(0);
        let listUniversities__ = [];
        let listUniversities_ = await listUniversities(localStorage.getItem('id'));
        if (listUniversities_ && listUniversities_.length >= 1) {
            listUniversities__ = listUniversities_.map(x => ({ label: x.university, value: x.university }));
        }
        this.props.getUniversities(listUniversities__);
    }

    handleClickDeleteSkill = async (e) => {
        e.preventDefault();
        const idSkill = e.target.id;
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
                        this.setState({
                            res_message: response.message
                        });
                    }
                    this.props.listSkills(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    handleClickDeleteCertificate = async (e) => {
        e.preventDefault();
        const certification_id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas este certificado, ya no podrás deshacer esta acción.",
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
                        user_id: parseInt(localStorage.getItem('id')),
                        certification_id: parseInt(certification_id)
                    }
                    const response = await this.props.deleteCertificate(data);
                    if (response.status) {
                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                    this.props.listCertifications(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    handleClickDeleteEducation = async (e) => {
        e.preventDefault();
        const education_id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas esta esducación, ya no podrás deshacer esta acción.",
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
                        education_id: education_id
                    }
                    const response = await this.props.deleteEducation(data);
                    if (response.status) {

                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                    this.props.listEducations(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    handleClickDeleteExperience = async (e) => {
        e.preventDefault();
        const experience_id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas esta experiencia, ya no podrás deshacer esta acción.",
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
                        experience_id: experience_id
                    }
                    const response = await this.props.deleteExperience(data);
                    if (response.status) {

                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                    this.props.listExperiences(1);
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    fileSelectedHandler = event => {
        let file = event.target.files[0]
                
        this.setState({
            file: file
        })
    }

    fileUploadHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const {file} = this.state
        formData.append("user_id",localStorage.getItem('id'));
        formData.append("photo",file);
        const res = await this.props.updateImageUser(formData) 
        localStorage.setItem('photo',res.photo)
        window.location.reload();
    }

    render() {

        const {listCertificationsReducer, listSkillsReducer, listEducationsReducer, listExperiencesReducer} = this.props;
        if(listExperiencesReducer === 1){
            this.refreshExperience();
        }
        if(listCertificationsReducer === 1){
            this.refreshCertifications();
        }
        if(listSkillsReducer === 1){
            this.refreshSkills();
        }
        if(listEducationsReducer === 1){
            this.refreshEducation();
        }
        let user = localStorage.getItem('name');
        let lastname = localStorage.getItem('lastname');
        const {file} = this.state;
        return (
            <View
                user={user}
                lastname={lastname}
                experiences = {this.state.experiences}
                experience = {this.state.experience}
                country = {this.state.country}
                educations = {this.state.educations}
                skills = {this.state.skills}
                users = {this.state.users}
                photo = {this.state.photo}
                description = {this.state.description}
                certifications = {this.state.certifications}
                idCertificate = {this.idCertificate}
                idEducation = {this.idEducation}
                idExperience = {this.idExperience}
                handleClickDeleteSkill = {this.handleClickDeleteSkill}
                handleClickDeleteCertificate = {this.handleClickDeleteCertificate}
                handleClickDeleteEducation = {this.handleClickDeleteEducation}
                handleClickDeleteExperience = {this.handleClickDeleteExperience}
                fileSelectedHandler={this.fileSelectedHandler}
                fileUploadHandler = {this.fileUploadHandler}
            />
        );
    }
}


const mapStateToProps = (state) => ({    
    listCertificationsReducer: state.listCertificationsReducer,
    listSkillsReducer: state.listSkillsReducer,
    listEducationsReducer: state.listEducationsReducer,
    listExperiencesReducer: state.listExperiencesReducer,
});

const mapDispatchToProps = {
    deleteCertificate,
    deleteEducation,
    deleteExperience,
    showCertificationByUser,
    getCertificate,
    getEducation,
    getExperience,
    listCertifications,
    listSkills,
    listEducations,
    listExperiences,
    updateImageUser,
    showDataByUser,
    getUniversities,
    getCompanies,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProfileEmployee)
)
