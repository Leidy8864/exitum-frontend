
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

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="img-profile mb-3">
                                <div className="photo-perfil mt-3">
                                    <img src={photo || "https://yt3.ggpht.com/a/AGF-l7-m7BOEOMCrDfMvUvHorhg9tT92ALhfDr_u5A=s900-c-k-c0xffffffff-no-rj-mo"} alt="img" />
                                    <input type="file" className="inputfile" name="file" onChange={fileSelectedHandler} />
                                </div>
                                <div className="description-perfil mt-3">
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
                                            {/* <p className="bold">{experienceActual}</p> */}
                                        </div>
                                        <strong>{country}</strong>
                                        <hr />
                                        <div>
                                            <span className="bold">{birthday}</span>
                                        </div>
                                        <div>
                                            <span className="bold">{phone}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit-profile mt-4 mr-5">
                                    <a href="#" className="reminder-edit" data-toggle="modal" data-target="#perfil"><img alt="img" className="img-edit" src={require('../../public/images/svg/editar.svg')} /></a>
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
                                    <a href="#" data-toggle="modal" data-target="#experience"><img alt="img" className="mr-5" src={require('../../public/images/svg/anadir.svg')} /></a>
                                </div>
                            </div>
                            {
                                experiences && experiences.length > 0 ?
                                    experiences.map(function (item, index) {
                                        return (
                                            <Fragment key={index}>
                                                <div className="experience-info w-100 mb-4">
                                                    <div className="info-experience w-100">
                                                        <div className="experience-info-content w-100 mt-3">
                                                            <span className="bold title">Empresa:</span><span className=""><strong>{item.company_name}</strong></span>
                                                            <span className="bold"> - {item.time_total}</span>
                                                            <br />
                                                            {
                                                                item.detail.map(function (item_, index_) {
                                                                    return (
                                                                        <Fragment key={index_}>
                                                                            <div className="experience-info">
                                                                                <div className="info-experience">
                                                                                    <div className="data_user_detail">
                                                                                        <div><span className="bold title">Posisión:</span><span className="bold">{item_.position}</span></div>
                                                                                        <div><span className="bold title">Desde:</span><span className="bold">{item_.date_start}</span></div>
                                                                                        <div><span className="bold title">Hasta:</span><span className="bold">{item_.date_end ? item_.date_end : "actualidad"}</span></div>
                                                                                        <div><span className="bold title">Descripción:</span><span className="bold">{item_.description ? item_.description : ""}</span></div>
                                                                                        <br />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="edit-profile mr-5">
                                                                                    <Link to="" className="reminder-edit" onClick={idExperience} id={item_.id} data-toggle="modal" data-target="#updateexperience"><img alt="img" className="img-edit" id={item_.id} src={require('../../public/images/svg/editar.svg')} /></Link>
                                                                                    <div className="delete-skill mt-3">
                                                                                        <a href="#" >
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="img"
                                                                                                id={item_.id}
                                                                                                src={require('../../public/images/svg/basura.svg')}
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
                                    }) : <span className="no-data bold">Aún no ha guardado ningun dato, agregue un experiencia</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/birrete.svg')} />
                                    <h3 className="ml-4">Educación</h3>
                                </div>
                                <div className="experience-edit">
                                    <a href="#" data-toggle="modal" data-target="#education"><img alt="img" className="mr-5" src={require('../../public/images/svg/anadir.svg')} /></a>
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
                                                        <Link to="" className="reminder-edit" onClick={idEducation} id={index} data-toggle="modal" data-target="#updateeducation"><img alt="img" className="img-edit" id={index} src={require('../../public/images/svg/editar.svg')} /></Link>

                                                        <div className="delete-skill mt-3">
                                                            <a href="#" >
                                                                <img
                                                                    alt="img"
                                                                    className="img"
                                                                    id={item.id}
                                                                    src={require('../../public/images/svg/basura.svg')}
                                                                    onClick={handleClickDeleteEducation}
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    }) : <span className="no-data bold">Aún no ha guardado ningun dato, agregue una educación</span>
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
                                    <a href="#" data-toggle="modal" data-target="#certificate"><img alt="img" className="mr-5" src={require('../../public/images/svg/anadir.svg')} /></a>
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
                                                        <Link to="" className="reminder-edit" onClick={idCertificate} id={index} data-toggle="modal" data-target="#updatecertificate"><img className="img-edit" id={index} src={require('../../public/images/svg/editar.svg')} /></Link>
                                                        <div className="delete-skill mt-3">
                                                            <a href="#" >
                                                                <img
                                                                    alt="img"
                                                                    className="img"
                                                                    id={item.id}
                                                                    src={require('../../public/images/svg/basura.svg')}
                                                                    onClick={handleClickDeleteCertificate}
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    }) : <span className="no-data bold">Aún no ha guardado ningun dato, agregue un certificación</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5 mb-5">
                            <div className="experience mt-3">
                                <div className="img-experience experience-header ml-4 mt-2">
                                    <img src={require('../../public/images/svg/hombre-que-corre.svg')} />
                                    <h3 className="ml-4">Aptitudes</h3>
                                </div>
                                <div className="experience-edit">
                                    <a href="#" data-toggle="modal" data-target="#skill"><img alt="img" className="mr-5" src={require('../../public/images/svg/anadir.svg')} /></a>
                                </div>
                            </div>
                            {
                                skills && skills.length > 0 ?
                                    skills.map(function (item, index) {
                                        return (
                                            <div className="experience-info-skill mb-2 mt-3" key={index}>
                                                <div className="info-experience ml-2">
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
                                                            src={require('../../public/images/svg/basura.svg')}
                                                            onClick={handleClickDeleteSkill}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    }) : <span className="no-data bold">Aún no ha guardado ningun dato, agregue un skill</span>
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
