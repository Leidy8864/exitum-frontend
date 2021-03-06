import React, { Fragment } from 'react';
import './style.css';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Diary from '../Diary/Diary-controller';

function View(props) {

    const {role, perfilEntrepeneur, perfilImpulsor} = props

    return (
        <Fragment>
            <div className="dashboard">
                <Sidebar />
                <main className="main-panel">
                    <HeaderDashboard />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row block-rows">
                                <div className="col-md-12 col-xl-9 mt-4 content-challenge">
                                    {role === 'entrepreneur' ? perfilEntrepeneur : null }
                                    {role === 'employee' ? perfilImpulsor : null}
                                </div>
                                <div className="col-md-12 col-xl-3 col-lg-12 content-diary">
                                    <Diary />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Fragment>
    );
}
export default View;
