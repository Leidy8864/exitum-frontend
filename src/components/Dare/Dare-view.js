
import React,{ Fragment } from 'react';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Diary from '../Diary/Diary-controller'
import Dares from '../Dares/Dares-controller'
import './style.css';

function View(){
    return(
        <Fragment>
            <div className="dashboard">
                <Sidebar />
                <main className="main-panel">
                    <HeaderDashboard />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-9 col-lg-12 mt-4">
                                    <Dares />
                                </div>
                                <div className="col-xl-3 col-lg-12 content-diary">
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
