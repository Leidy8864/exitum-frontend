
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
        changeSeeMeet,
        changeSeeReminder,
        id
    } = props
    return (
        <Fragment>

            <div className="appointments">
                {
                    appointments.data && appointments.data.length > 0 ?
                        appointments.data.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="reminders mb-4">
                                        <div className="header-reminder">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <i className="far fa-calendar-alt mr-2 mt-1"></i><p className="ml-2">{moment(item.date).format('MMMM Do YYYY')}</p>
                                                </div>
                                                <div className="edit-profile">
                                                    <a href="#"
                                                        className=""
                                                        onClick={idReminder.bind(this, item.id)}
                                                        id={item.id}
                                                        data-toggle="modal" data-target="#updateReminder"
                                                    ><img alt="img" className="img-edit" id={index} src={require('../../public/images/svg/editar.svg')} /></a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="description-reminder d-flex">
                                                    <i className="far fa-clock mr-2 mt-1"></i><p className="ml-2">{item.time}</p>
                                                </div>
                                                <div className="delete-reminder icon">
                                                    <a href="#" >
                                                        <img
                                                            alt="img"
                                                            className="img mr-1"
                                                            id={item.id}
                                                            src={require('../../public/images/svg/basura.svg')}
                                                            onClick={handleClickDeleteReminder}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-reminder">
                                            <div className="title-reminder d-flex">
                                                <i className="far fa-bell mr-2 mt-1"></i><p className="ml-2">{item.title}</p>
                                            </div>
                                            <div id="bigs" className="description-meet d-flex">
                                                <i className="far fa-newspaper mr-1 mt-1"></i><p className="ml-2 description-size">{item.description}</p>
                                            </div>
                                            {/* <div className="see-more mt-1">
                                                <a onClick={changeSeeReminder} id={index + 'mas'} href="#big" className="">... Ver mas</a>
                                                <a onClick={changeSeeReminder} id={index + 'menos'} href="#big" className="">... Ver menos</a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <ModalReminder />
                                </Fragment>
                            )
                        }) : <p className="recordatorio-reu">Agrega un recordatorio</p>
                }
            </div>

            <div className="appointments">
                {
                    meetings && meetings.length > 0 ?
                        meetings.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="reminders mb-3">
                                        <div className="header-meeting">
                                            <div className="d-flex justify-content-between">
                                            <div className="date-reminder d-flex">
                                                <i className="far fa-calendar-alt mr-2 mt-1"></i><p className="ml-2">{moment(item.date).format('MMMM Do YYYY')}</p>
                                            </div>
                                            {
                                                id == item.fromAppointmentUser.id ?

                                                    <div className="delete-reminder icon">
                                                        <a href="#" >
                                                            <img
                                                                alt="img"
                                                                className="img"
                                                                id={item.id}
                                                                src={require('../../public/images/svg/basura.svg')}
                                                                onClick={handleClickDeleteMeet}
                                                            />
                                                        </a>

                                                    </div> :
                                                    <div className="footer-meeting d-flex pb-2">
                                                        <button id={item.id} onClick={confirmMeetNotification} className="btn btn-success ml-4">Aceptar</button>
                                                        <button id={item.id} onClick={handleClickDeleteMeetNotification} className="btn btn-danger ml-2">Cancelar</button>
                                                    </div>
                                            }
                                            </div>
                                            <div className="description-reminder d-flex">
                                                <i className="far fa-clock mr-2 mt-1"></i><p className="ml-2">{item.time}</p>
                                            </div>
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
                                                <i className="far fa-newspaper mr-1 mt-1"></i><p className="description-size ml-2">{item.description}</p>
                                            </div>
                                            {/* <div className="see-more mt-1">
                                                <a onClick={changeSeeMeet} id="mas" href="#big" className="">... Ver mas</a>
                                                <a onClick={changeSeeMeet} id="menos" href="#big" className="">... Ver menos</a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <ModalMeet />

                                </Fragment>
                            )
                        }) : <p className="recordatorio-reu">Agrega una reunión</p>
                }
            </div>
        </Fragment>
    );
}
export default View;
