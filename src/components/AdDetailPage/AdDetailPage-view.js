
import React from 'react';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Diary from '../Diary/Diary-controller'
import './style.css';
import TabAnuncio from '../TabAnuncio/TabAnuncio-controller';
import EmployeesList from '../EmployeesList/EmployeesList-controller';

function View(props) {
    const {
        advertisement
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
                                    <div className="card px-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <h4 className="card-title title_add text-primary col-sm-10">{advertisement.title}</h4>
                                                <button className="btn btn-primary col-sm-2">EDITAR ANUNCIO</button>
                                            </div>
                                            <div className="form-group">
                                                <strong>Descripción:</strong>
                                                <p className="text-justify">{advertisement.description}</p>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-sm-4">
                                                    <strong>Proyecto : </strong>
                                                    {advertisement.startup.name}
                                                </div>
                                                <div className="form-group col-sm-4">
                                                    <strong>Area : </strong>
                                                    {advertisement.area.name}
                                                </div>
                                                <div className="form-group col-sm-4">
                                                    <strong>Estado : </strong>
                                                    {
                                                        advertisement.state === 'active' ?
                                                            "En curso"
                                                            : "En pausa"
                                                    }
                                                </div>
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
                                    <TabAnuncio
                                        isDetail={true}
                                        userRole="entrepreneur"
                                    />

                                    <EmployeesList />

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
