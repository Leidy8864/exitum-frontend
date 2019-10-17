import React from 'react';
import './style.css';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Tree from '../Tree/Tree-controller'
import Diary from '../Diary/Diary-controller'
import Cherry from '../Cherry/Cherry-controller'

function View() {
    return (
        <div className="dashboard">
            <Sidebar />
            <HeaderDashboard />
            <main className="main-panel">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-md-12 content-tree">
                            <Tree />
                            <Cherry />
                        </div>
                        <div className="col-xl-3 content-diary">
                            <Diary />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default View;
