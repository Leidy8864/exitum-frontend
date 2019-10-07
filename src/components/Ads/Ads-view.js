
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ModalAds from '../Modal-ads/Modal-ads-controller'

function View(){
    
    return(
        <div className="Ads"> 
            <Link className="signin" to="" data-toggle="modal" data-target="#AdsModal">
                <div className="Ads-plus">
                    <span> + </span>
                    Agregar aununcio
                </div>
            </Link>
            <ModalAds/>
        </div>
    );
}
export default View;
