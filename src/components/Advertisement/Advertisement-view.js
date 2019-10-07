
import React from 'react';
import './style.css';
import HeaderDashboard from '../Header-dashboard/Header-dashboard-controller'
import Menu from '../Menu/Menu-controller'
import Ads from '../Ads/Ads-controller'
import Diary from '../Diary/Diary-controller'
function View(){
    return(
        <div className="Dashboard">
            <HeaderDashboard/>
            <div className="content-dashboard">
                <Menu 
                    selected = 'empleo'
                />
                <Ads/>
                <Diary/>
            </div>
        </div>
    );
}
export default View;
