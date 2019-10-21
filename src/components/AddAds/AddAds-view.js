
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TabAnuncio from '../TabAnuncio/TabAnuncio-controller'
import Postulants from '../Postulants/Postulants-controller'

function View() {
    return (
        <div>
            <Link className="signin" to="" data-toggle="modal" data-target="#AdsModal">
                <div className="Ads-plus">
                    <span> + </span>
                    Agregar aununcio
                    </div>
            </Link>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <TabAnuncio />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Postulants />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
