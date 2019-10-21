
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TabAnuncio from '../TabAnuncio/TabAnuncio-controller'
import Postulants from '../Postulants/Postulants-controller'

function View(props) {
    const {
        cleanForm
    } = props
    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-md-10">
                        <Link className="signin" to="" data-toggle="modal" data-target="#AdsModal" onClick={cleanForm}>
                            <div className="Ads-plus">
                                <span> + </span>
                                Agregar aununcio
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <TabAnuncio />
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-12">
                        <Postulants />
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default View;
