
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import ModalEvents from '../ModalEvents/ModalEvents-controller';
import EventsList from '../EventsList/EventsList-controller'
import Diary from '../Diary/Diary-controller'
function View(props) {
    const {
        handleClick,
        eventType
    } = props
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-panel">
                <HeaderDashboard />
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12 events-fluid">
                                <div className="container-fluid">
                                    <div className="row mt-4 container-options">
                                        <div className="col-md-8 ">
                                            <ul className="nav nav-pills add-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className={eventType === "events" ? "nav-link-person px-4 active" : "nav-link-yellow px-4"} href="#" onClick={handleClick.bind(this, 'events')}><i className="fas fa-calendar-day" data-toggle="tooltip" data-placement="top" title="Eventos"></i></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={eventType === "events_assist" ? "nav-link-person px-4 active" : "nav-link-morado px-4"} href="#" onClick={handleClick.bind(this, 'events_assist')}><i className="fas fa-calendar-check" data-toggle="tooltip" data-placement="top" title="Eventos para asistir"></i></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={eventType === "my_events" ? "nav-link-person px-4 active" : "nav-link-morado px-4"} href="#" onClick={handleClick.bind(this, 'my_events')}><i className="fas fa-clipboard-list" data-toggle="tooltip" data-placement="top" title="Eventos organizados por mi"></i></a>
                                                </li>
                                            </ul>


                                        </div>
                                        <div className="col-md-4">
                                            <div className="absolute-help">
                                                <li className="nav-item">
                                                    <a className="active px-4" href="#"><i data-toggle="tooltip" data-toggle="collapse" href="#eventCollapse" role="button" aria-expanded="false" aria-controls="collapseExample" data-placement="top" title="Ayuda" className="fas fa-question-circle"></i></a>
                                                </li>
                                            </div>
                                            <Link className="signin edit-icon" to="" data-toggle="modal" data-target="#EventsModal">

                                                <div className="Ads-plus events">
                                                    <i data-toggle="tooltip" data-placement="top" title="Agregar un evento" className="fas fa-plus mr-2"></i>
                                                </div>
                                            </Link>
                                            <ModalEvents />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="collapse mt-4" id="eventCollapse">
                                            <div className="card reminder-information events">
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
                                            </div>
                                        </div>
                                        <EventsList />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12 content-diary events-none">
                                <Diary />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default View;
