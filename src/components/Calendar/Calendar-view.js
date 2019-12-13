
import React,{Fragment} from 'react';
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
import Sidebar from '../Sidebar/Sidebar-controller'
import Diary from '../Diary/Diary-controller'
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
                            <div className="col-lg-12 mt-4 calendar-none">
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
