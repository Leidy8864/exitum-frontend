
import React from 'react';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Diary from '../Diary/Diary-controller'
import './style.css';
import TabAnuncio from '../TabAnuncio/TabAnuncio-controller';
import EmployeesList from '../EmployeesList/EmployeesList-controller';

function View(props) {
    const {
        adType
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
                                <div className="container justify-content-center">
                                    <TabAnuncio
                                        isDetail={true}
                                        userRole="entrepreneur"
                                    />
                                    {
                                        adType === "detail" ?
                                            <div class="card mt-5 px-4">
                                                <div class="card-body">
                                                    <div className="row">
                                                        <h4 class="card-title title_add text-primary col-sm-10">App con bubble.io ó con appery.io ó con Pwa de Google</h4>
                                                        <button className="btn btn-primary col-sm-2">EDITAR ANUNCIO</button>
                                                    </div>
                                                    <div class="form-group mt-3">
                                                        <strong>Descripción:</strong>
                                                        <p className="text-justify">With supporting text below as a natural lead-in to additional content.</p>
                                                    </div>

                                                    <div className="form-group ">
                                                        <strong>Proyecto : </strong>
                                                        Proyecto Techie
                                        </div>
                                                    <div class="form-group">
                                                        <strong>Area : </strong>
                                                        Desarrollo
                                    </div>
                                                    <div class="form-group">
                                                        <strong>Estado : </strong>
                                                        Activo
                                    </div>
                                                    <div class="form-group">
                                                        <strong>Publicado : </strong>
                                                        Hace 5 días
                                    </div>
                                                    <div className="form-group">
                                                        <strong>Habilidades : </strong>
                                                        <ul className="tags">
                                                            <li><a href="#" class="tag">Responsable</a></li>
                                                            <li><a href="#" class="tag">Proactivo</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <EmployeesList />

                                    }
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12">
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
