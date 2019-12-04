
import React from 'react';
import Sidebar from '../Sidebar/Sidebar-controller';
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller';
import Diary from '../Diary/Diary-controller';
import { Link } from 'react-router-dom';
import ModalEvents from '../ModalEvents/ModalEvents-controller';
import ParticipantsList from '../ParticipantsList/ParticipantsList-controller';
import AssistButton from '../AssistButton/AssistButton-controller';
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
                                <div className="container-fluid mt-4">
                                    <div className="card mb-4">
                                        <div className="card-body d-flex justify-content-start ml-3">
                                            <Link to='/events' className="mt-2 atras-arrow">
                                                <i className="fas fa-arrow-left"></i>
                                            </Link>
                                            <div className="container-detail mt-3">
                                                <div className="">
                                                    <div className="form-group d-flex justify-content-between">
                                                        <h4 className="bold-title">{event.title}</h4>
                                                    </div>
                                                    <div className="form-group d-flex">
                                                        <span className="bold detail">Descripción:</span>
                                                        <span className="gray">{event.description}</span>
                                                    </div>
                                                    <div className="form-group d-flex">
                                                        <span className="bold detail">Lugar:</span>
                                                        <span className="gray">{event.place}</span>
                                                    </div>
                                                    <div className="form-group d-flex">
                                                        <span className="bold detail">Fecha:</span>
                                                        <span className="gray">{moment(event.day).format('DD/MM/YYYY')}</span>
                                                    </div>
                                                    <div className="form-group d-flex">
                                                        <span className="bold detail">Hora:</span>
                                                        <span className="gray">{moment(event.hour_start, "h:mm").format("LT")}</span>
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
                                                        <Link className="" to="" data-toggle="modal" data-target="#EventsModal" onClick={handleOpenEditModal}><img alt="img" className="img-edit" src={require('../../public/images/svg/editar.svg')} /></Link>
                                                        :
                                                        <AssistButton
                                                            isPart={isPart}
                                                            event_id={event.id}
                                                        />
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <ParticipantsList />
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
