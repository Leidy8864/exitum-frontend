
import React, { Fragment } from 'react';
import ModalReminder from '../ModalReminder/ModalReminder-controller'
import ModalMeet from '../ModalMeet/ModalMeet-controller'
import './style.css';

function View(props) {

    const {
        appointments,
        idReminder,
        idMeet,
        meetings,
        handleClickDeleteReminder,
        handleClickDeleteMeet
    } = props


    console.log("TODOS LOS METTINGS",meetings)

    return (
        <Fragment>

            <div className="appointments">
                {
                    appointments && appointments.length > 0 ?
                        appointments.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="reminders mb-3">
                                        <div className="d-flex justify-content-between header-reminder">
                                            <div className="date-reminder d-flex">
                                                <i className="far fa-calendar-alt mr-2 mt-1"></i><p className="ml-2">{item.date}</p>
                                            </div>
                                            <div className="description-reminder d-flex">
                                                <i className="far fa-clock mr-2 mt-1"></i><p className="ml-2">{item.time}</p>
                                            </div>
                                        </div>
                                        <div className="body-reminder">
                                            <div className="title-reminder d-flex">
                                                <i className="far fa-bell mr-2 mt-1"></i><p className="ml-2">{item.title}</p>
                                            </div>
                                            <div className="description-reminder d-flex">
                                                <i className="far fa-newspaper mr-2 mt-1"></i><p className="ml-2">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="footer-reminder d-flex justify-content-end pb-2">
                                            <div className="edit-profile d-flex mr-3">
                                                <a href="#"
                                                    className="mr-2 reminder-edit"
                                                    onClick={idReminder.bind(this,item.id)}
                                                    id={item.id}
                                                    data-toggle="modal" data-target="#updateReminder"
                                                ><img alt="img" className="img-edit" id={index} src={require('../../public/images/svg/editar.svg')} /></a>
                                                <div className="delete-skill icon">
                                                    <a href="#" >
                                                        <img
                                                            alt="img"
                                                            className="img"
                                                            id={item.id}
                                                            src={require('../../public/images/svg/basura.svg')}
                                                            onClick={handleClickDeleteReminder}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ModalReminder />
                                </Fragment>
                            )
                        }) : null
                }
            </div>

            <div className="appointments">
                {
                    meetings && meetings.length > 0 ?
                        meetings.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="reminders mb-3">
                                        <div className="d-flex justify-content-between header-meeting">
                                            <div className="date-reminder d-flex">
                                                <i className="far fa-calendar-alt mr-2 mt-1"></i><p className="ml-2">{item.date}</p>
                                            </div>
                                            <div className="description-reminder d-flex">
                                                <i className="far fa-clock mr-2 mt-1"></i><p className="ml-2">{item.time}</p>
                                            </div>
                                        </div>
                                        <div className="body-meeting">
                                            <div className="title-reminder d-flex">
                                                <i className="far fa-bell mr-2 mt-1"></i><p className="ml-2">{item.title}</p>
                                            </div>
                                            <div className="description-reminder d-flex">
                                                <i className="far fa-newspaper mr-2 mt-1"></i><p className="ml-2">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="footer-meeting d-flex justify-content-end pb-2">
                                            <div className="edit-profile d-flex mr-3 mt-2">
                                                <div className="delete-skill">
                                                    <a href="#" >
                                                        <img
                                                            alt="img"
                                                            className=""
                                                            id={item.id}
                                                            src={require('../../public/images/svg/basura.svg')}
                                                            onClick={handleClickDeleteMeet}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ModalMeet />

                                </Fragment>
                            )
                        }) : null
                }
            </div>
        </Fragment>
    );
}
export default View;
