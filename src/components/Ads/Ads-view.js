
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ModalAds from '../Modal-ads/Modal-ads-controller';
import ChooseProfile from '../ChooseProfile/ChooseProfile-controller';

function View(props){
    const {conditionShowChooseProfile,cleanForm} = props
    return(
        <div className="Ads"> 
            {conditionShowChooseProfile ? <ChooseProfile/> : 
                <Link className="signin" to="" data-toggle="modal" data-target="#AdsModal" onClick={cleanForm}>
                    <div className="Ads-plus">
                        <span> + </span>
                        Agregar aununcio
                    </div>
                </Link>
            }
            <ModalAds/>
        </div>
    );
}
export default View;
