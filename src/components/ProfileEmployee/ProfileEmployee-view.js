
import React, { Fragment } from 'react';
import ModalExperience from '../ModalExperience/ModalExperience-controller'
import ModalEducation from '../ModalEducation/ModalEducation-controller'
import ModalSkill from '../ModalSkill/ModalSkill-controller'
import ModalCertificate from '../ModalCertificate/ModalCertificate-controller'
import ModalUpdateCertificate from '../ModalUpdateCertificate/ModalUpdateCertificate-controller'
import ModalUpdateEducation from '../ModalUpdateEducation/ModalUpdateEducation-controller'
import ModalPerfil from '../ModalPerfil/ModalPerfil-controller'
import { Link } from 'react-router-dom'
import './style.css';
import { SlowBuffer } from 'buffer';

function View(props) {

    const { 
        user, 
        lastname, 
        certifications, 
        idCertificate, 
        experiences, 
        educations, 
        skills, 
        idEducation,
        handleClickDeleteSkill,
    } = props
    return (
        <Fragment>
            <div className="card mt-5 ml-4">
                <div className="user-bg"></div>
                <div className="user-profile">
                    <div className="user-img ml-5">
                        <div className="img-profile">
                            <img className="img" src="https://scontent.flim1-1.fna.fbcdn.net/v/t1.0-1/p720x720/10428028_835695433158765_3788812662788954865_n.jpg?_nc_cat=106&_nc_oc=AQmJVvoI1HFbx8zVRMe97wFm7ZW-JdW0pzu4HOKyzxed0RlRbL5OZ-pmHeXkFEiduCRldkEWxZ61HEOQNGN0ljH2&_nc_ht=scontent.flim1-1.fna&oh=ffd2fe1bafe1323e783160abee692407&oe=5E240E72" />
                        </div>
                        <div className="edit-profile mr-5 mt-2">
                            <a href="#" data-toggle="modal" data-target="#perfil"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                        </div>
                    </div>
                    <div className="profile-info">
                        <div className="user-name ml-5 mb-4">
                            <h2>{user} {lastname}</h2>
                            <span>Programador Frontend en Techie</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-5 ml-4">
                <div className="experience mt-3">
                    <div className="experience-header">
                        <h3 className="ml-5">Experiencia</h3>
                        <a href="#" data-toggle="modal" data-target="#experience"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                {
                    experiences.length > 0 ?
                        experiences.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="experience-info">
                                        <div className="info-experience">
                                            <div className="img-experience ml-4 mt-3">
                                                {/*  */}
                                            </div>
                                            <div className="experience-info-content ml-4 mt-3">
                                                <h4>{item.position}</h4>
                                                <span>{item.company.name}</span>
                                                <div className="time-exp">
                                                    {item.date_start}
                                                </div>
                                                <div className="description mb-4">
                                                    {/* Descripcion */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="edit-profile mr-5 mt-2">
                                            <a href="#"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        }) : null
                }

                <div className="education mt-3">
                    <div className="education-header">
                        <h3 className="ml-5">Educación</h3>
                        <a href="#" data-toggle="modal" data-target="#education"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                {
                    educations.length > 0 ?
                        educations.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="education-info">
                                        <div className="info-education">
                                            <div className="img-education ml-4 mt-3">
                                                {/*  */}
                                            </div>
                                            <div className="experience-info-content ml-4 mt-3">
                                                <h4>{item.university.university}</h4>
                                                <div className="description">
                                                    {item.description}
                                                </div>
                                                <div className="time-exp mb-5">
                                                    {item.date_start} - {item.date_end}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="edit-profile mr-5 mt-2">
                                            <Link to="" onClick={idEducation} id={item.id} data-toggle="modal" data-target="#updateeducation"><img className="img" src={require('../../public/images/svg/lapiz.svg')} /></Link>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        }) : null
                }
            </div>

            <ModalExperience />
            <ModalEducation />
            <ModalPerfil />

            <div className="card mt-5 ml-4 mb-5">
                <div className="experience mt-3">
                    <div className="experience-header">
                        <h3 className="ml-5">Certificados</h3>
                        <a href="#" data-toggle="modal" data-target="#certificate"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                {
                    certifications.length > 0 ?
                        certifications.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="experience-info">
                                        <div className="info-experience">
                                            <div className="img-experience ml-4 mt-3">
                                                {/*  */}
                                            </div>
                                            <div className="experience-info-content ml-4 mt-3">
                                                <h4>{item.name}</h4>
                                                <span>{item.issuing_company}</span>
                                                <div className="time-exp">
                                                    {item.expedition} - {item.expiration}
                                                </div>
                                                <div className="description mb-4">
                                                    <Link to="#">{item.url}</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="edit-profile mr-5 mt-2">
                                            <Link to="" onClick={idCertificate} id={item.id} data-toggle="modal" data-target="#updatecertificate"><img className="img" id={index} src={require('../../public/images/svg/lapiz.svg')} /></Link>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            )
                        }) : null
                }
                <div className="aptitud mt-3">
                    <div className="aptitud-header">
                        <h3 className="ml-5">Aptitudes</h3>
                        <a href="#" data-toggle="modal" data-target="#skill"><img className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                    </div>
                </div>
                {
                    skills.length > 0 ?
                        skills.map(function (item, index) {
                            return (
                                <div className="experience-info" key={index}>
                                    <div className="info-aptitud ml-5">
                                        <ul >
                                            <li>{item.skill}</li>
                                        </ul>
                                    </div>
                                    <div className="edit-profile delete-skill mr-5 mt-2">
                                        <a href="#" >
                                            <img 
                                                className="img" 
                                                id={item.id} 
                                                src={require('../../public/images/svg/delete_.svg')} 
                                                onClick={handleClickDeleteSkill}
                                            />
                                        </a>
                                    </div>
                                </div>
                            )
                        }) : null
                }
            </div>

            <ModalSkill />
            <ModalCertificate />
            <ModalUpdateCertificate />
            <ModalUpdateEducation />

        </Fragment>
    );
}
export default View;
