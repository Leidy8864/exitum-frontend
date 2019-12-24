
import React, { Fragment } from 'react';
import ModalReminder from '../ModalReminder/ModalReminder-controller'
import ModalMeet from '../ModalMeet/ModalMeet-controller'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './style.css';

function View(props) {

    const {
        appointments,
        idReminder,
        confirmMeetNotification,
        meetings,
        handleClickDeleteReminder,
        handleClickDeleteMeet,
        handleClickDeleteMeetNotification,
        id
    } = props
    return (
        <Fragment>
            <div className="space-reminder">

            </div>
            <div className="events-diary">
                <nav className="choose-calendar">
                    <a href="#reuniones"><i className="far fa-bell" data-toggle="tooltip" data-placement="top" title="Reuniones"></i></a>
                    <a href="#recordatorios"><i className="far fa-handshake" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i></a>
                </nav>
                <div className="appointments ocultar" id="reuniones">
                    <div className="row">
                        {
                            appointments.data && appointments.data.length > 0 ?
                                appointments.data.map(function (item, index) {
                                    return (
                                        <Fragment key={index}>
                                            <div className="col-md-6 col-xl-12">
                                                <div className="card profiles reminders">
                                                    <div className="header-reminder">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex">
                                                                <i className="far fa-calendar-alt mr-2 mt-1"></i><p className="ml-2">{moment(item.date).format('MMMM Do YYYY')}</p>
                                                            </div>
                                                            <div className="edit-profile">
                                                                <a href="#"
                                                                    className="icon-edit"
                                                                    onClick={idReminder.bind(this, item.id)}
                                                                    id={item.id}
                                                                    data-toggle="modal" data-target="#updateReminder"
                                                                ><i className="fas fa-marker" id={index}></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="description-reminder d-flex">
                                                                <i className="far fa-clock mr-2 mt-1"></i><p className="ml-2">{item.time}</p>
                                                            </div>
                                                            <div className="delete-reminder icon">
                                                                <a href="#" className="icon-edit">
                                                                    <i id={item.id} onClick={handleClickDeleteReminder} className="fas fa-trash"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="body-reminder">
                                                        <div className="title-reminder d-flex">
                                                            <i className="far fa-bell mr-2 mt-1"></i><p className="ml-2">{item.title}</p>
                                                        </div>
                                                        <div id="bigs" className="description-meet d-flex mb-4">
                                                            <i className="far fa-newspaper mr-1 mt-1"></i><p className="ml-2 description-text">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <ModalReminder />
                                        </Fragment>
                                    )
                                }) : <div className="card reminder-information">
                                    <div className="card-header">
                                        <h3>Tu agenda</h3>
                                    </div>
                                    <div className="card-body info-help-reminder">
                                        <div className="choose-calendar d-reminder-info">
                                            <i className="far fa-calendar-plus" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>En tu agenta puedes elegir entre agendar un recordatorio o una reunión</p>
                                        </div>
                                    </div>
                                    <div className="card-body info-help-reminder">
                                        <div className="choose-calendar d-reminder-info">
                                            <i className="far fa-bell" data-toggle="tooltip" data-placement="top" title="Reuniones"></i><p> Indica los recordatorios que deseas archivar en tu agenda</p>
                                        </div>
                                    </div>
                                    <div className="card-body info-help-reminder">
                                        <div className="choose-calendar d-reminder-info">
                                            <i className="far fa-handshake" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p> Indica las reuniones que deseas archivar en tu agenda</p>
                                        </div>
                                    </div>
                                    <div className="container-not-appointment">
                                        <h3>Actualmente,no tienes ningun recordatorio, agrega uno si deseas</h3>
                                        <div className="img-reminder">
                                            <img className="" src={require('../../public/images/svg/recordatorio.svg')} alt="recordatorio" />
                                        </div>
                                    </div>
                                </div>


                        }
                    </div>
                </div>

                <div className="appointments ocultar" id="recordatorios">
                    <div className="row">
                        {
                            meetings && meetings.length > 0 ?
                                meetings.map(function (item, index) {
                                    return (
                                        <Fragment key={index}>
                                            <div className="col-md-6 col-xl-12">
                                                <div className="card profiles reminders">
                                                    <div className="header-meeting">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="date-reminder d-flex">
                                                                <i className="far fa-calendar-alt mr-2 mt-1"></i><p className="ml-2">{moment(item.date).format('MMMM Do YYYY')}</p>
                                                            </div>
                                                            {
                                                                id == item.fromAppointmentUser.id ?

                                                                    <div className="delete-reminder icon">
                                                                        <a href="#" className="icon-edit">
                                                                            <i id={item.id} onClick={handleClickDeleteMeet} className="fas fa-trash mt-1"></i>
                                                                        </a>

                                                                    </div> :
                                                                    !item.status ?
                                                                        <div className="footer-meeting d-flex pb-2">
                                                                            <i className="far fa-calendar-check mt-1" id={item.id} onClick={confirmMeetNotification} style={{ cursor: "pointer" }}></i>
                                                                        </div>
                                                                        :
                                                                        <div className="delete-reminder icon">
                                                                            <a href="#" className="icon-edit">
                                                                                <i id={item.id} onClick={handleClickDeleteMeet} className="fas fa-trash mt-1"></i>
                                                                            </a>

                                                                        </div>

                                                            }
                                                        </div>
                                                        {

                                                            id == item.fromAppointmentUser.id ?

                                                                <div className="description-reminder d-flex">
                                                                    <i className="far fa-clock mr-2 mt-1"></i><p className="ml-2">{item.time}</p>
                                                                </div> :
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="description-reminder d-flex">
                                                                        <i className="far fa-clock mr-2 mt-1"></i><p className="ml-2">{item.time}</p>
                                                                    </div>
                                                                    {
                                                                        !item.status ?
                                                                            <div className="footer-meeting d-flex pb-2">
                                                                                <i className="far fa-calendar-times" id={item.id} onClick={handleClickDeleteMeetNotification} style={{ cursor: "pointer" }}></i>
                                                                            </div>
                                                                            : ''
                                                                    }

                                                                </div>


                                                        }

                                                    </div>

                                                    <div className="body-meeting">
                                                        <div className="title-reminder d-flex">
                                                            <i className="far fa-bell mr-2 mt-1"></i><p className="ml-2">{item.title}</p>
                                                        </div>
                                                        {
                                                            id == item.fromAppointmentUser.id ?
                                                                <div className="description-reminder d-flex">
                                                                    <i className="far fa-address-book mr-2 mt-1"></i><p className="ml-2">{item.toAppointmentUser.fullname}</p>
                                                                </div> :
                                                                <div className="description-reminder d-flex">
                                                                    <i className="far fa-address-book mr-2 mt-1"></i><p className="ml-2">{item.fromAppointmentUser.fullname}</p>
                                                                </div>
                                                        }
                                                        <div id="big" className="description-meet d-flex">
                                                            <i className="far fa-newspaper mr-1 mt-1"></i>
                                                            <p className="ml-2 description-text">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        {/* <div className="see-more mt-1">
                                                <a onClick={changeSeeMeet} id="mas" href="#big" className="">... Ver mas</a>
                                                <a onClick={changeSeeMeet} id="menos" href="#big" className="">... Ver menos</a>
                                            </div> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <ModalMeet />

                                        </Fragment>

                                    )
                                }) : <div className="card reminder-information">
                                    <div className="card-header">
                                        <h3>Tu agenda</h3>
                                    </div>
                                    <div className="card-body info-help-reminder">
                                        <div className="choose-calendar d-reminder-info">
                                            <i className="far fa-calendar-plus" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>En tu agenta puedes elegir entre agendar un recordatorio o una reunión</p>
                                        </div>
                                    </div>
                                    <div className="card-body info-help-reminder">
                                        <div className="choose-calendar d-reminder-info">
                                            <i className="far fa-bell" data-toggle="tooltip" data-placement="top" title="Reuniones"></i><p> Indica los recordatorios que deseas archivar en tu agenda</p>
                                        </div>
                                    </div>
                                    <div className="card-body info-help-reminder">
                                        <div className="choose-calendar d-reminder-info">
                                            <i className="far fa-handshake" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p> Indica las reuniones que deseas archivar en tu agenda</p>
                                        </div>
                                    </div>
                                    <div className="container-not-appointment">
                                        <h3>Actualmente,no tienes ningun reunión, agrega uno si deseas</h3>
                                        <div className="img-reminder">
                                            <img className="" src={require('../../public/images/svg/reunion.svg')} alt="recordatorio" />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default View;
