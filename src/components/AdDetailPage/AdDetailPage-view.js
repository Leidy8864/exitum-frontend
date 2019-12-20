
import React from 'react';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton-controller'

import Diary from '../Diary/Diary-controller'
import './style.css';
import TabAnuncio from '../TabAnuncio/TabAnuncio-controller';
import EmployeesList from '../EmployeesList/EmployeesList-controller';
import ModalAds from '../Modal-ads/Modal-ads-controller';

function View(props) {
    const {
        advertisement,
        handleOpenEditModal
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
                                <div className="container-fluid mt-4 scroll-anuncio">
                                    <div className="card profiles mb-4">
                                        <div className="card-body detalle-anuncio">
                                            <BackButton
                                            />
                                            <div className="container-detail mt-2">
                                                <div className="w-100">
                                                    <div className="form-group d-flex justify-content-between border-anuncio">
                                                        <h4 className="bold-title">{advertisement.title}</h4>
                                                        <Link className="edit-profile" to="" data-toggle="modal" data-target="#AdsModal" onClick={handleOpenEditModal}>
                                                            <i className="fas fa-marker"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="form-group">
                                                        <span className="bold detail ">Descripción:</span><br />
                                                        <span className="gray">{advertisement.description}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between container-events">

                                                        <div className="form-group">
                                                            <span className="bold detail">Proyecto:</span><br />
                                                            <span className="gray">{advertisement.startup.name}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="bold detail">Area:</span><br />
                                                            <span className="gray">{advertisement.area.name}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="bold detail">Estado:</span><br />
                                                            <span className="gray">
                                                                {
                                                                    advertisement.state === 'active' ?
                                                                        "En curso"
                                                                        : "En pausa"
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {
                                                        advertisement.skills.length > 0 ?
                                                            <ul className="tags">
                                                                <span className="bold detail">Habilidades:</span><br />
                                                                {
                                                                    advertisement.skills.map((item, index) =>
                                                                        <li key={index}><a href="#" className="tag">-{item.skill}</a></li>
                                                                    )
                                                                }
                                                            </ul>
                                                            : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <TabAnuncio
                                    isDetail={true}
                                    userRole="entrepreneur"
                                />

                                <EmployeesList />
                            </div>
                            <div className="col-xl-3 col-lg-12">
                                <Diary />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ModalAds />

        </div>
    );
}
export default View;
