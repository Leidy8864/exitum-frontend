
import React from 'react';
import EventCard from '../EventCard/EventCard-controller'

import './style.css';

function View(props) {
    const {
        eventsList,
        eventType,
        handleDeleteEvent
    } = props

    console.log(eventsList)

    return (
        <div className="w-100 events-list" id="events-list">
                {
                    eventsList.length > 0 ?
                        eventsList.map(function (item) {
                            return (
                                <div className="col-xl-4 col-md-6 events-padding" key={item.id}>
                                    <EventCard
                                        id={item.id}
                                        title={item.title}
                                        key={item.id}
                                        description={item.description}
                                        day={item.day}
                                        participants_count = {item.participants_count}
                                        place= {item.place}
                                        hour_start={item.hour_start}
                                        eventType={eventType}
                                        handleDeleteEvent={handleDeleteEvent}
                                        photo = {item.photo}
                                    />
                                </div>
                            )
                        })
                        :
                        <div className="card reminder-information events">
                        <div className="card-header events">
                            <h3>Los eventos</h3>
                        </div>
                        <div className="card-body info-help-reminder">
                            <div className="choose-calendar d-reminder-info">
                            <i className="fas fa-plus" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>Agregar un evento</p>
                            </div>
                        </div>
                        <div className="card-body info-help-reminder">
                            <div className="choose-calendar d-reminder-info">
                            <i className="fas fa-calendar-day" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>Son todos los eventos los cuales podras ver los detalles de cada uno, interesate en el que más tus habilidades se adecuen a tu perfil para que puedas sobresalir en el evento que tu haz escogido.</p>
                            </div>
                        </div>
                        <div className="card-body info-help-reminder">
                            <div className="choose-calendar d-reminder-info">
                            <i className="fas fa-calendar-check" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>Son tus eventos los cuales estas tú interesado y el cual vas a participar, no te preocupes si al final no podras asistir, tienes la alternativa de no participar si lo deseas.</p>
                            </div>
                        </div>
                        <div className="card-body info-help-reminder">
                            <div className="choose-calendar d-reminder-info">
                            <i className="fas fa-clipboard-list" data-toggle="tooltip" data-placement="top" title="Reuniones"></i><p>Son tus propios eventos los cuales haz creado, podras ver cuantos participantes o interesados en tu evento, puedes cancelar o eliminar tu evento si tu deseas.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="img-reminder ml-2 flex-footer-event pt-1">
                                <img className="event-img" src={require('../../public/images/svg/evento.svg')} alt="recordatorio" />
                                <p className="ml-4">No tienes eventos en esta sección</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
    );
}
export default View;
