import React, { Fragment } from 'react';
import './style.css';
import Sidebar from '../Sidebar/Sidebar-controller'
import { Link } from 'react-router-dom'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Driving from '../Driving/Driving-controller'
import Diary from '../Diary/Diary-controller';

function View(props) {

    const { pickDiary } = props

    return (
        <Fragment>
            <div className="dashboard">
                <Sidebar />
                <main className="main-panel">
                    <HeaderDashboard />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-9 col-lg-12">
                                    <Driving />
                                </div>
                                <div className="col-xl-3 col-lg-12 content-three">
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
