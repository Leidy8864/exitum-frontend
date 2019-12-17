
import React from 'react';
import Sidebar from '../Sidebar/Sidebar-controller';
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller';
import Diary from '../Diary/Diary-controller';
import { Link } from 'react-router-dom';
import ModalEvents from '../ModalEvents/ModalEvents-controller';
import ParticipantsList from '../ParticipantsList/ParticipantsList-controller';
import AssistButton from '../AssistButton/AssistButton-controller';
import BackButton from '../BackButton/BackButton-controller'

import moment from 'moment';
import './style.css';

function View(props) {
    const {
        user_id,
        event,
        isPart,
        handleOpenEditModal
    } = props;

    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-panel">
                <HeaderDashboard />
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12">
                                <div className="container-fluid mt-4 events-scroll">
                                    <div className="card profiles mb-4">
                                        <div className="card-body d-flex justify-content-start ml-3">
                                        <BackButton />
                                            <div className="container-detail mt-2">
                                                <div className="">
                                                    <div className="form-group d-flex justify-content-between">
                                                        <h4 className="bold-title">{event.title}</h4>
                                                    </div>
                                                    <div className="form-group container-events">
                                                        <span className="bold detail">Descripción:</span><br/>
                                                        <span className="gray">{event.description}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between container-events">
                                                        <div className="form-group">
                                                            <span className="bold detail">Lugar:</span><br/>
                                                            <span className="gray">{event.place}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="bold detail">Fecha:</span><br/>
                                                            <span className="gray">{moment(event.day).format('DD/MM/YYYY')}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="bold detail">Hora:</span><br/>
                                                            <span className="gray">{moment(event.hour_start, "h:mm").format("LT")}</span>
                                                        </div>
                                                        <hr/>
                                                    </div>
                                                    
                                                    {
                                                        event.toWorkshopCategories.length > 0 ?
                                                            <ul className="tags">
                                                                {
                                                                    event.toWorkshopCategories.map((item, index) =>
                                                                        <li key={index}><a href="#" className="tag">{item.name}</a></li>
                                                                    )
                                                                }
                                                            </ul>
                                                            : ''
                                                    }
                                                </div>
                                                {
                                                    user_id === event.user_id ?
                                                        <Link className="atras-arrow" to="" data-toggle="modal" data-target="#EventsModal" onClick={handleOpenEditModal}><i className="fas fa-marker"></i></Link>
                                                        :
                                                        <AssistButton
                                                            isPart={isPart}
                                                            event_id={event.id}
                                                        />
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    <ParticipantsList />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12">
                                <Diary />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ModalEvents />

        </div>
    );
}
export default View;
