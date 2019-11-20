
import React, { Fragment } from 'react';
import ModalExperience from '../ModalExperience/ModalExperience-controller'
import ModalEducation from '../ModalEducation/ModalEducation-controller'
import ModalSkill from '../ModalSkill/ModalSkill-controller'
import ModalCertificate from '../ModalCertificate/ModalCertificate-controller'
import ModalUpdateCertificate from '../ModalUpdateCertificate/ModalUpdateCertificate-controller'
import ModalUpdateEducation from '../ModalUpdateEducation/ModalUpdateEducation-controller'
import ModalUpdateExperience from '../ModalUpdateExperience/ModalUpdateExperience-controller'
import ModalPerfil from '../ModalPerfil/ModalPerfil-controller'
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
        country
    } = props

    let name = users.name
    let lastname = users.lastname
    let phone = users.phone
    let experienceActual = experience
    let birthday = users.birthday

    console.log("experiences = ", experiences)
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="img-profile mb-3">
                                <div className="photo-perfil mt-3">
                                    <img src={photo} alt="img"/>
                                    <input type="file" className="inputfile" name="file" onChange={fileSelectedHandler} />
                                </div>
                                <div className="description-perfil mt-2">
                                    <p>{description}</p>
                                </div>
                                <button className="btn-save-img mt-2 mb-4" type="button" onClick={fileUploadHandler}>Guardar</button>
                            </div>

                            <div className="profile">
                                <div className="content-data-user">
                                    <div className="img-experience experience-header ml-4 mt-4">
                                        <img src={require('../../public/images/svg/avatar.svg')} />
                                        <h3 className="ml-4">Perfil</h3>
                                    </div>
                                    <div className="data_user mt-3 experience-info-content mb-3">
                                        <div>
                                            <h4>{name} {lastname}</h4> 
                                            <p className="bold">{experienceActual}</p>
                                        </div>
                                        <strong>{country}</strong>
                                        <hr/>
                                        <div>
                                            <span className="bold">{birthday}</span>
                                        </div>
                                        <div>
                                            <span className="bold">{phone}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit-profile mt-4 mr-5">
                                    <a href="#" data-toggle="modal" data-target="#perfil"><img alt="img" className="img" src={require('../../public/images/svg/lapiz.svg')} /></a>
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
                                experiences && experiences.length > 0 ?
                                    experiences.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info">
                                                    <div className="info-experience col-md-12">
                                                        <div className="experience-info-content col-md-11">
                                                            <strong>EMPRESA: {item.company_name}</strong>
                                                            <span className="bold"> - {item.time_total}</span>
                                                            <br />
                                                            {
                                                                item.detail.map(function (item_, index_) {
                                                                    return (
                                                                        <Fragment key={index_}>
                                                                            <div className="experience-info col-md-11">
                                                                                <div className="info-experience col-md-12">
                                                                                    <div className="experience-info-content col-md-10">
                                                                                        <div>POSICIÓN: {item_.position}</div>
                                                                                        <div>DESDE: {item_.date_start}</div>
                                                                                        <div>HASTA: {item_.date_end ? item_.date_end: "actualidad"}</div>
                                                                                        <div>DESCRIPCIÓN: {item_.description ? item_.description:""}</div>
                                                                                        <br />
                                                                                        
                                                                                    </div>
                                                                                </div>
                                                                                <div className="edit-profile mr-5 mt-2">
                                                                                    <Link to="" onClick={idExperience} id={item_.id} data-toggle="modal" data-target="#updateexperience"><img alt="img" className="img" id={item_.id} src={require('../../public/images/svg/lapiz.svg')} /></Link>
        
                                                                                    <div className="delete-skill mt-2">
                                                                                        <a href="#" >
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="img"
                                                                                                id={item_.id}
                                                                                                src={require('../../public/images/svg/delete_.svg')}
                                                                                                onClick={handleClickDeleteExperience}
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
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
                                educations && educations.length > 0 ?
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
                <ModalUpdateExperience />
            </div>
        </Fragment >
    );
}
export default View;
