
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
                            <div className="col-xl-8 col-lg-12">
                                <div className="container mt-2">
                                    <div className="card mb-4">
                                        <div className="card-body ml-3">
                                            <BackButton
                                            />
                                            {/* 
                                            <Link to='/advertisement' className="mt-2">
                                                <img src={require("../../public/images/svg/left-arrow.svg")} alt="" className="button-back" />
                                            </Link> */}
                                            <div className="container-detail">
                                                <div className="form-group d-flex justify-content-between">
                                                    <h4 className="bold-title">{advertisement.title}</h4>
                                                    <Link className="edit-profile" to="" data-toggle="modal" data-target="#AdsModal" onClick={handleOpenEditModal}>
                                                        <i className="fas fa-marker"></i>
                                                    </Link>
                                                </div>
                                                <div className="form-group">
                                                    <span className="bold ">Descripción:</span>
                                                    <span className="bold">{advertisement.description}</span>
                                                </div>
                                                <div className="form-group">
                                                    <span className="bold">Proyecto:</span>
                                                    <span className="bold">{advertisement.startup.name}</span>
                                                </div>
                                                <div className="form-group">
                                                    <span className="bold">Area:</span>
                                                    <span className="bold">{advertisement.area.name}</span>
                                                </div>
                                                <div className="form-group">
                                                    <span className="bold">Estado:</span>
                                                    <span className="bold">
                                                        {
                                                            advertisement.state === 'active' ?
                                                                "En curso"
                                                                : "En pausa"
                                                        }
                                                    </span>
                                                </div>
                                                {
                                                    advertisement.skills.length > 0 ?
                                                        <ul className="tags">
                                                            {
                                                                advertisement.skills.map((item, index) =>
                                                                    <li key={index}><a href="#" className="tag">{item.skill}</a></li>
                                                                )
                                                            }
                                                        </ul>
                                                        : ''
                                                }
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
                            <div className="col-xl-4 col-lg-12">
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
