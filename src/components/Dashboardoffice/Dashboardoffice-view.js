import React from 'react';
import './style.css';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Tree from '../Tree/Tree-controller'
import Diary from '../Diary/Diary-controller'

function View() {
    return (
        <div className="dashboard">
            <Sidebar />
            <HeaderDashboard />
            <main className="main-panel">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            <Tree />
                        </div>
                        <div className="col-md-3">
                            <Diary />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default View;
