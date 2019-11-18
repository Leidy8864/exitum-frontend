
import React, { Fragment } from 'react';
import ModalReminder from '../ModalReminder/ModalReminder-controller'
import './style.css';

function View(props) {

    const {
        appointments,
        idReminder,
        handleClickDeleteReminder
    } = props

    return (
        <Fragment>
            
            <div className="appointments">
                <h4>Recordatorios</h4>
                {
                    appointments && appointments.length > 0 ?
                        appointments.map(function (item, index) {
                            return (
                                <Fragment key={index}>
                                    <div className="reminders mb-3">
                                        <div className="date-reminder">
                                            <strong><i className="far fa-calendar-alt mr-2"></i>Fecha:</strong><p>{item.date}</p>
                                        </div>
                                        <div className="title-reminder">
                                            <strong><i className="far fa-bell mr-2"></i>Titulo:</strong><p>{item.title}</p>
                                        </div>
                                        <div className="description-reminder">
                                            <strong><i className="far fa-clock mr-2"></i>Hora:</strong><p>{item.time}</p>
                                        </div>
                                        <div className="description-reminder">
                                            <strong><i className="far fa-newspaper mr-2"></i>Descripcion:</strong><p>{item.description}</p>
                                        </div>
                                        <div className="edit-profile d-flex mr-5 mt-2">
                                            <a href="#"
                                                className="mr-2"
                                                onClick={idReminder}
                                                id={item.id}
                                            data-toggle="modal" data-target="#updateReminder"
                                            ><img alt="img" className="img" id={index} src={require('../../public/images/svg/lapiz.svg')} /></a>
                                            <div className="delete-skill">
                                                <a href="#" >
                                                    <img
                                                        alt="img"
                                                        className="img"
                                                        id={item.id}
                                                        src={require('../../public/images/svg/delete_.svg')}
                                                        onClick={handleClickDeleteReminder}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <ModalReminder />

                                </Fragment>
                            )
                        }) : null
                }
            </div>
        </Fragment>
    );
}
export default View;
