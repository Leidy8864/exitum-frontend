
import React from 'react';
import './style.css';
import ModalAds from '../Modal-ads/Modal-ads-controller';
import ChooseProfile from '../ChooseProfile/ChooseProfile-controller';
import AddAds from '../AddAds/AddAds-controller'

function View(props){
    const {conditionShowChooseProfile} = props
    return(
        <div className=""> 
            {conditionShowChooseProfile ? <ChooseProfile/> : 
                <AddAds/>
            }
        </div>
    );
}
export default View;
