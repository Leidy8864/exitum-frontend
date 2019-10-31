import React from 'react';
import './style.css';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Driving from '../Driving/Driving-controller'
import Diary from '../Diary/Diary-controller'
function View() {
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-panel">
                <HeaderDashboard />
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12 content-panel">
                                <Driving />
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
