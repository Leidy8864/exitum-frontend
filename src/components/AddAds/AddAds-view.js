
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TabAnuncio from '../TabAnuncio/TabAnuncio-controller'
import AddsList from '../AddsList/AddsList-controller'
import EmployeeAds from '../EmployeeAds/EmployeeAds-controller';
import ModalAds from '../Modal-ads/Modal-ads-controller';
function View(props) {
    const {
        cleanForm,
        userRole
    } = props
    return (
        <div>
            <div className="container-fluid adds-scroll">
                <div className="row mt-4 container-options">
                    <div className="col-md-8 container-tabs-pauses">
                        <TabAnuncio
                            userRole={userRole}
                        />
                    </div>
                    {
                        userRole === "entrepreneur" ?
                            <div className="col-md-4 plus-padding">
                                <div className="absolute-help">
                                    <li className="nav-item">
                                        <a className="active px-4" href="#"><i data-toggle="tooltip" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" data-placement="top" title="Ayuda" className="fas fa-question-circle"></i></a>
                                    </li>
                                </div>
                                <Link className="signin edit-icon" to="" data-toggle="modal" data-target="#AdsModal" onClick={cleanForm}>
                                    <div className="Ads-plus">
                                        <i data-toggle="tooltip" data-placement="top" title="Agregar un anuncio" className="fas fa-plus mr-2"></i>

                                    </div>
                                </Link>
                                <ModalAds />
                            </div>
                            : ""
                    }

                </div>

               <div className="row">
               <div className="collapse mt-4 w-100" id="collapseExample">
                    <div className="card anuncios-pro reminder-information">
                        <div className="card-body info-help-reminder">
                            <div className="choose-calendar d-reminder-info">
                                <i className="fas fa-plus" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>Agregar un Anuncio</p>
                            </div>
                        </div>
                        <div className="card-body info-help-reminder">
                            <div className="choose-calendar d-reminder-info">
                                <i className="far fa-play-circle" data-toggle="tooltip" data-placement="top" title="Recordatorios"></i><p>Son tus propios anuncios creados, los cuales estan en marcha para que otras personas puedan verlos y así puedan postular a dicho anuncio, cuando tu desees puedes pausar tu anuncio.</p>
                            </div>
                        </div>
                        <div className="card-body info-help-reminder">
                            <div className="choose-calendar d-reminder-info">
                                <i className="far fa-pause-circle" data-toggle="tooltip" data-placement="top" title="Reuniones"></i><p>Son tus propios anuncios creados, los cuales estan en pausa para que otras personas ya no puedan verlos, en este caso no habrán postulantes, cuando tu desees puedes reanudar tu anuncio.</p>
                            </div>
                        </div>
                    </div>
                </div>
               </div>

                <div className="row scroll-anuncios">
                    {

                        userRole === "entrepreneur" ?

                            <AddsList
                                userRole={userRole}
                            /> :
                            <EmployeeAds userRole={userRole} />

                    }
                </div>
            </div>
        </div>
    );
}
export default View;
