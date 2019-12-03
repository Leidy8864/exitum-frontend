
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
                            <div className="col-xl-9 col-lg-12">
                                <div className="container">
                                    <div className="row mt-4">
                                        <div className="col-md-8 mt-1">
                                            <ul className="nav nav-pills add-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">   
                                                    <a className={eventType === "events" ? "nav-link px-4 active" : "nav-link px-4"} href="#" onClick={handleClick.bind(this, 'events')}>EVENTOS</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={eventType === "events_assist" ? "nav-link px-4 active" : "nav-link px-4"} href="#" onClick={handleClick.bind(this, 'events_assist')}>ASISTIRÉ</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={eventType === "my_events" ? "nav-link px-4 active" : "nav-link px-4"} href="#" onClick={handleClick.bind(this, 'my_events')}>ORGANIZADOS POR MÍ</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 mt-1">
                                            <Link className="signin" to="" data-toggle="modal" data-target="#EventsModal">
                                                <div className="Ads-plus">
                                                    <span> + </span>
                                                    Agregar evento
                                                    </div>
                                            </Link>
                                            <ModalEvents />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <EventsList />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-12 content-diary">
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
