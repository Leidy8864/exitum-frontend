
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
// import { SlowBuffer } from 'buffer';

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
        handleClickDeleteCertificate,
        fileSelectedHandler,
        fileUploadHandler,
        handleClickDeleteEducation
    } = props
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="user-content">
                                <div className="user-profile row">
                                    <div className="user-img ml-5">
                                        <div className="img-profile mt-3 mb-3">
                                            <input type="file" name="file" onChange={fileSelectedHandler} />
                                            <button type="button" onClick={fileUploadHandler}>Guardar</button>
                                        </div>
                                        <div className="user-name ml-5 mb-4">
                                            <h2>Ana Sanchez</h2>
                                            <span>Programador Frontend</span>
                                            {/* <div className="country-user mt-2">
                                                <span>Peru</span>
                                            </div> */}
                                            <div className="work-user mt-1">
                                                <span>Actualmente trabajando en </span><strong>Techie</strong>
                                            </div>
                                            <div className="work-user mt-1">
                                                <span className="">Full-time(40hr/wk)</span><i className="fas fa-check-circle"></i>
                                            </div>
                                            {/* <div className="available-user mt-2">
                                    <strong>Disponible: </strong><span>Full Time(40hr/wk)</span>
                                </div> */}
                                        </div>

                                    </div>

                                </div>
                                <div className="edit-profile mr-5 mt-4">
                                    <a href="#" data-toggle="modal" data-target="#perfil"><img alt="img" className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                                </div>
                                {/* <div className="edit mt-4">
                                <p>Disponible</p>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="profile">
                                <div className="img-experience experience-header ml-4 mt-4">
                                    <img src={require('../../public/images/svg/avatar.svg')} />
                                    <h3 className="ml-4">Perfil</h3>
                                </div>
                                <div className="profile-content ">
                                    <div className="work-user mt-1">
                                        <strong className="bold">Edad: </strong><span className="line">25 años</span>
                                    </div>
                                    <div className="work-user mt-1">
                                        <strong className="bold">Direccion: </strong><span className="line">Av La Molina 1255 - La Cascada</span>
                                    </div>
                                    {/* <div className="work-user mt-1">
                                    <strong className="bold">Años de experiencia: </strong><span className="line">4 años</span>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/experience.svg')} />
                                    <h3 className="ml-4">Experiencia</h3>
                                </div>
                                <div className="experience-edit">
                                    <a href="#" data-toggle="modal" data-target="#experience"><img alt="img" className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                                </div>
                            </div>
                            {
                                experiences.length > 0 ?
                                    experiences.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info">
                                                    <div className="info-experience">
                                                        <div className="experience-info-content mt-3">
                                                            <span className="bold">{item.position}</span>
                                                            <br />
                                                            <strong>{item.company.name}</strong>
                                                            <div className="time-exp mt-1">
                                                                {item.date_start}
                                                            </div>
                                                            <div className="description mb-4">
                                                                {/* Descripcion */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="edit-profile mr-5 mt-2">
                                                        <a href="#"><img className="img" alt="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    }) : null
                            }

                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/birrete.svg')} />
                                    <h3 className="ml-4">Educación</h3>
                                </div>
                                <div className="experience-edit">
                                    <a href="#" data-toggle="modal" data-target="#education"><img alt="img" className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                                </div>
                            </div>
                            {
                                educations.length > 0 ?
                                    educations.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info">
                                                    <div className="info-experience">
                                                        <div className="experience-info-content mt-3">
                                                            <span className="bold">{item.university.university}</span>
                                                            <br />
                                                            <div className="description">
                                                                <strong>{item.description}</strong>
                                                            </div>
                                                            <div className="time-exp mt-1">
                                                                {item.date_start} - {item.date_end}
                                                            </div>
                                                            <div className="description mb-4">
                                                                {/* Descripcion */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="edit-profile mr-5 mt-2">
                                                        <Link to="" onClick={idEducation} id={item.id} data-toggle="modal" data-target="#updateeducation"><img alt="img" className="img" id={index} src={require('../../public/images/svg/lapiz.svg')} /></Link>

                                                        <div className="delete-skill mt-2">
                                                            <a href="#" >
                                                                <img
                                                                    alt="img"
                                                                    className="img"
                                                                    id={item.id}
                                                                    src={require('../../public/images/svg/delete_.svg')}
                                                                    onClick={handleClickDeleteEducation}
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    }) : null
                            }
                        </div>
                    </div>
                </div>

                <ModalExperience />
                <ModalEducation />
                <ModalPerfil />

                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/rollo-de-diploma.svg')} />
                                    <h3 className="ml-4">Certificado</h3>
                                </div>
                                <div className="experience-edit">
                                    <a href="#" data-toggle="modal" data-target="#certificate"><img alt="img" className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                                </div>
                            </div>
                            {
                                certifications && certifications.length > 0 ?
                                    certifications.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info">
                                                    <div className="info-experience">
                                                        <div className="experience-info-content mt-3">
                                                            <span className="bold">{item.name}</span>
                                                            <br />
                                                            <strong>{item.issuing_company}</strong>
                                                            <div className="time-exp mt-1">
                                                                {item.date_expedition} - {item.date_expiration}
                                                            </div>
                                                            <div className="description mt-1 mb-4">
                                                                <Link to="#">{item.url}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="edit-profile mr-5 mt-2">
                                                        <Link to="" onClick={idCertificate} id={item.id} data-toggle="modal" data-target="#updatecertificate"><img className="img" id={index} src={require('../../public/images/svg/lapiz.svg')} /></Link>
                                                        <div className="delete-skill mt-2">
                                                            <a href="#" >
                                                                <img
                                                                    alt="img"
                                                                    className="img"
                                                                    id={item.id}
                                                                    src={require('../../public/images/svg/delete_.svg')}
                                                                    onClick={handleClickDeleteCertificate}
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    }) : null
                            }
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card mt-5 mb-5">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/hombre-que-corre.svg')} />
                                    <h3 className="ml-4">Aptitudes</h3>
                                </div>
                                <div className="experience-edit">
                                    <a href="#" data-toggle="modal" data-target="#skill"><img alt="img" className="mr-5" src={require('../../public/images/svg/agregar-boton.svg')} /></a>
                                </div>
                            </div>
                            {
                                skills && skills.length > 0 ?
                                    skills.map(function (item, index) {
                                        return (
                                            <div className="experience-info-skill mb-2" key={index}>
                                                <div className="info-experience ml-5">
                                                    <ul className="">
                                                        <li className="skill-list"><strong>{item.skill}</strong></li>
                                                    </ul>
                                                </div>
                                                <div className="edit-profile delete-skill mr-5 mt-2">
                                                    <a href="#" >
                                                        <img
                                                            alt="img"
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
                    </div>
                </div>

                <ModalSkill />
                <ModalCertificate />
                <ModalUpdateCertificate />
                <ModalUpdateEducation />
            </div>
        </Fragment >
    );
}
export default View;
