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
                                <div className="col">
                                    <Driving />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="diary-plugin">
                <div className="dropdown show-dropdown open">
                    <Link to="" onClick={pickDiary} className="diary-link" data-toggle="modal" data-target="#diary"><i className="fas fa-book"></i></Link>
                </div>
            </div>
            <Diary />
        </Fragment>
    );
}
export default View;
