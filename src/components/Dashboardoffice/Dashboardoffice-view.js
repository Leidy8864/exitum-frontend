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
            <main className="main-panel">
                <HeaderDashboard />
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 col-lg-12">
                                <Tree />
                                <Cherry />
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <Diary />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-panel">
                </div>
            </main>
        </div>
    );
}
export default View;
