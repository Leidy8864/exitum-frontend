
import React from 'react';
import './style.css';
import ModalAds from '../Modal-ads/Modal-ads-controller';
import ChooseProfile from '../ChooseProfile/ChooseProfile-controller';
import AddAds from '../AddAds/AddAds-controller'

function View(props){
    const {conditionShowChooseProfile,cleanForm} = props
    return(
        <div className="Ads"> 
            {conditionShowChooseProfile ? <ChooseProfile/> : 
<<<<<<< HEAD
                <AddAds/>
=======
                <Link className="signin" to="" data-toggle="modal" data-target="#AdsModal" onClick={cleanForm}>
                    <div className="Ads-plus">
                        <span> + </span>
                        Agregar aununcio
                    </div>
                </Link>
>>>>>>> 92b236d138409820bd66c1502664de87766ad1b3
            }
            <ModalAds/>
        </div>
    );
}
export default View;
