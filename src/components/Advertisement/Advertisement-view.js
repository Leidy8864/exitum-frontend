
import React from 'react';
import './style.css';
import Sidebar from '../Sidebar/Sidebar-controller'
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard-controller'
// import Menu from '../Menu/Menu-controller'
import Ads from '../Ads/Ads-controller'
import Diary from '../Diary/Diary-controller'
function View() {
    return (
        // <div className="Dashboard">
        //     <HeaderDashboard/>
        //     <div className="content-dashboard">
        //         <Menu 
        //             selected = 'empleo'
        //         />
        //         <Ads/>
        //         <Diary/>
        //     </div>
        // </div>
        <div className="dashboard">
            <Sidebar />
            <main className="main-panel">
                <HeaderDashboard />
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-9">
                                <Ads />
                            </div>
                            <div className="col-xl-12 col-lg-12">
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
