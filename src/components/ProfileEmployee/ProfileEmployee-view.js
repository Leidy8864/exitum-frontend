
import React, { Fragment } from 'react';
import ModalExperience from '../ModalExperience/ModalExperience-controller'
import ModalEducation from '../ModalEducation/ModalEducation-controller'
import ModalSkill from '../ModalSkill/ModalSkill-controller'
import ModalCertificate from '../ModalCertificate/ModalCertificate-controller'
import ModalUpdateCertificate from '../ModalUpdateCertificate/ModalUpdateCertificate-controller'
import ModalUpdateEducation from '../ModalUpdateEducation/ModalUpdateEducation-controller'
import ModalUpdateExperience from '../ModalUpdateExperience/ModalUpdateExperience-controller'
import ModalPerfil from '../ModalPerfil/ModalPerfil-controller'
import BackButton from '../BackButton/BackButton-controller'

import moment from 'moment'
import { Link } from 'react-router-dom'
import './style.css';
// import { SlowBuffer } from 'buffer';

function View(props) {

    const {
        users,
        certifications,
        idCertificate,
        experiences,
        experience,
        description,
        educations,
        skills,
        photo,
        idEducation,
        idExperience,
        handleClickDeleteSkill,
        handleClickDeleteCertificate,
        handleClickDeleteExperience,
        fileSelectedHandler,
        fileUploadHandler,
        handleClickDeleteEducation,
        country,
        isMyProfile,
        activeBackButton
    } = props

    let name = users.name
    let lastname = users.lastname
    let phone = users.phone
    let experienceActual = experience
    let birthday = users.birthday
    let email =users.email

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="back-button">
                            <div className="back-profile">
                                {
                                    activeBackButton ?
                                        <BackButton /> : ''
                                }
                            </div>
                        </div>
                        <div className="card profiles">
                            <div className="img-profile mb-3">
                                <div className="photo-perfil mt-5">
                                    <img id="imgSalida" src={photo || require('../../public/img/fresita_.png')} alt="img" />
                                    <div className="">
                                        <h4 className="text-white mt-4">{name} {lastname}</h4>
                                    </div>
                                    <p className="text-white">{experience}</p>
                                    {isMyProfile ? <input type="file" className="inputfile" id="file-input" name="file" accept="image/*" onChange={fileSelectedHandler} /> : ''}
                                </div>
                                {isMyProfile ? <button className="btn-save-img mt-2 mb-4" type="button" onClick={fileUploadHandler}>Guardar</button> : ''}
                            </div>

                            <div className="profile">
                                <div className="content-data-user mb-4">
                                    <div className="img-experience experience-header ml-4 mt-4">
                                        <img src={require('../../public/images/svg/avatar.svg')} />
                                        <h3 className="ml-4">Perfil</h3>
                                    </div>
                                    <div className="data_user mt-3 experience-info-content mb-3">
                                        <div className="description-perfil mt-3">
                                            <strong className="w-100">Sobre mi ...</strong><br />
                                            <span className="gray">{description}</span>
                                        </div>
                                        <hr />
                                        <strong>{country}</strong>
                                        <div>
                                            <span className="gray title">Email:</span><span className="gray">{email}</span>
                                        </div>
                                        <div>
                                            <span className="gray title">Cumpleaños:</span><span className="gray">{birthday}</span><br/>
                                        </div>
                                        <div>
                                            <span className="gray title">Celular:</span><span className="gray">{phone}</span>
                                        </div>
                                    </div>
                                </div>
                                {
                                    isMyProfile ?
                                        <div className="edit-perfil mt-4 mr-5">
                                            <a href="#" className="reminder-edit" data-toggle="modal" data-target="#perfilusuario"><i className="fas fa-marker"></i></a>
                                        </div>
                                        : ''
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card profiles mt-3">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/experience.svg')} />
                                    <h3 className="ml-4">Experiencia</h3>
                                </div>
                                {
                                    isMyProfile ?
                                        <div className="plus-perfil mr-5">
                                            <a href="#" data-toggle="modal" data-target="#experience"><i className="fas fa-plus"></i></a>
                                        </div> : ''
                                }
                            </div>
                            {
                                experiences && experiences.length > 0 ?
                                    experiences.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info w-100 mb-4">
                                                    <div className="info-experience w-100">
                                                        <div className="experience-info-content w-100 mt-3">
                                                            <span className="gray title">Empresa:</span><span className=""><strong>{item.company_name}</strong></span>
                                                            <span className="gray"> - {item.time_total}</span>
                                                            <br />
                                                            {
                                                                item.detail.map(function (item_, index_) {
                                                                    return (
                                                                        <Fragment key={index_}>
                                                                            <div className="experience-info">
                                                                                <div className="info-experience">
                                                                                    <div className="data_user_detail">
                                                                                        <div><span className="gray title">Posisión:</span><span className="gray">{item_.position}</span></div>
                                                                                        <div><span className="gray title">Desde:</span><span className="gray">{moment(item_.date_start).format('DD/MM/YYYY')}</span></div>
                                                                                        <div><span className="gray title">Hasta:</span><span className="gray">{item_.date_end ? moment(item_.date_end).format('DD/MM/YYYY') : "actualidad"}</span></div>
                                                                                        <div><span className="gray title">Descripción:</span><span className="gray">{item_.description? item_.description: ""}</span></div>
                                                                                        <br />
                                                                                    </div>
                                                                                </div>
                                                                                {
                                                                                    isMyProfile ?
                                                                                        <div className="edit-perfil mr-5">
                                                                                            <Link to="" className="reminder-edit" onClick={idExperience} id={item_.id} data-toggle="modal" data-target="#updateexperience"><i className="fas fa-marker" id={item_.id}></i></Link>
                                                                                            <div className="mt-3">
                                                                                                <a href="#" className="delete-perfil" >
                                                                                                    <i className="fas fa-trash-alt"
                                                                                                        id={item_.id}
                                                                                                        onClick={handleClickDeleteExperience}
                                                                                                    ></i>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        : ''
                                                                                }
                                                                            </div>

                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    }) : <span className="no-data gray">Aún no ha guardado ningun dato, agregue un experiencia</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card profiles mt-3">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/birrete.svg')} />
                                    <h3 className="ml-4">Educación</h3>
                                </div>
                                {
                                    isMyProfile ?

                                        <div className="plus-perfil mr-5">
                                            <a href="#" data-toggle="modal" data-target="#education"><i className="fas fa-plus"></i></a>
                                        </div>
                                        : ''
                                }
                            </div>
                            {
                                educations && educations.length > 0 ?
                                    educations.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info">
                                                    <div className="info-experience">
                                                        <div className="experience-info-content mt-3">
                                                            <span className="gray">{item.university.university}</span>
                                                            <br />
                                                            <div className="description">
                                                                <strong>{item.description}</strong>
                                                            </div>
                                                            <div className="time-exp mt-1">
                                                                <span className="gray">{moment(item.date_start).format('DD/MM/YYYY')} - {moment(item.date_end).format('DD/MM/YYYY')}</span>
                                                            </div>
                                                            <div className="description mb-4">
                                                                {/* Descripcion */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        isMyProfile ?
                                                            <div className="edit-perfil mr-5 mt-2">
                                                                <Link to="" className="reminder-edit" onClick={idEducation} id={index} data-toggle="modal" data-target="#updateeducation"><i className="fas fa-marker" id={index}></i></Link>
                                                                <div className="delete-skill mt-3">
                                                                    <a href="#" className="delete-perfil" >
                                                                        <i className="fas fa-trash-alt"
                                                                            id={item.id}
                                                                            onClick={handleClickDeleteEducation}
                                                                        ></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            : ''
                                                    }
                                                </div>
                                            </Fragment>
                                        )
                                    }) : <span className="no-data gray">Aún no ha guardado ningun dato, agregue una educación</span>
                            }
                        </div>
                    </div>
                </div>

                <ModalExperience />
                <ModalEducation />
                <ModalPerfil />

                <div className="row">
                    <div className="col-md-12">
                        <div className="card profiles mt-3">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/rollo-de-diploma.svg')} />
                                    <h3 className="ml-4">Certificado</h3>
                                </div>
                                {
                                    isMyProfile ?
                                        <div className="plus-perfil mr-5">
                                            <a href="#" data-toggle="modal" data-target="#certificate"><i className="fas fa-plus"></i></a>
                                        </div>
                                        : ''
                                }
                            </div>
                            {
                                certifications && certifications.length > 0 ?
                                    certifications.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info">
                                                    <div className="info-experience">
                                                        <div className="experience-info-content mt-3">
                                                            <span className="gray">{item.name}</span>
                                                            <br />
                                                            <strong>{item.issuing_company}</strong>
                                                            <div className="time-exp mt-1">
                                                                <span className="gray">{moment(item.date_expedition).format('DD/MM/YYYY')} - {moment(item.date_expiration).format('DD/MM/YYYY')}</span>
                                                            </div>
                                                            <div className="description mt-1 mb-4">
                                                                <Link to="#">{item.url}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        isMyProfile ?

                                                            <div className="edit-perfil mr-5 mt-2">
                                                                <Link to="" className="reminder-edit" onClick={idCertificate} id={index} data-toggle="modal" data-target="#updatecertificate"><i className="fas fa-marker" id={index}></i></Link>
                                                                <div className="delete-skill mt-3">
                                                                    <a href="#" className="delete-perfil" >
                                                                        <i className="fas fa-trash-alt"
                                                                            id={item.id}
                                                                            onClick={handleClickDeleteCertificate}
                                                                        ></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            : ''
                                                    }
                                                </div>
                                            </Fragment>
                                        )
                                    }) : <span className="no-data gray">Aún no ha guardado ningun dato, agregue un certificación</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card profiles mt-3 mb-5">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/hombre-que-corre.svg')} />
                                    <h3 className="ml-4">Aptitudes</h3>
                                </div>
                                {
                                    isMyProfile ?

                                        <div className="plus-perfil mr-5">
                                            <a href="#" data-toggle="modal" data-target="#skill"><i className="fas fa-plus"></i></a>
                                        </div>
                                        : ''
                                }
                            </div>
                            {
                                skills && skills.length > 0 ?
                                    skills.map(function (item, index) {
                                        return (
                                            <div className="experience-info-skill mb-1 mt-2" key={index}>
                                                <div className="info-experience ml-2">
                                                    <ul className="">
                                                        <li className="skill-list"><span className="gray">{item.skill}</span></li>
                                                    </ul>
                                                </div>
                                                {
                                                    isMyProfile ?
                                                        <div className="edit-profile mr-5">

                                                            <a href="#" className="delete-perfil" >
                                                                <i className="fas fa-trash-alt"
                                                                    id={item.id}
                                                                    onClick={handleClickDeleteSkill}
                                                                ></i>
                                                            </a>

                                                        </div> : ''
                                                }
                                            </div>
                                        )
                                    }) : <span className="no-data gray">Aún no ha guardado ningun dato, agregue un skill</span>
                            }
                        </div>
                    </div>
                </div>

                <ModalSkill />
                <ModalCertificate />
                <ModalUpdateCertificate />
                <ModalUpdateEducation />
                <ModalUpdateExperience />
            </div>
        </Fragment >
    );
}
export default View;
