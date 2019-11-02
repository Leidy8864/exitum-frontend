
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import TabAnuncio from '../TabAnuncio/TabAnuncio-controller'
import AddsList from '../AddsList/AddsList-controller'

function View(props) {
    const {
        cleanForm,
        userRole
    } = props
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-9 mt-1">
                        <TabAnuncio 
                        userRole={userRole}
                        />
                    </div>
                    {
                        userRole === "entrepreneur" ?
                        <div className="col-md-3 mt-5">
                            <Link className="signin" to="" data-toggle="modal" data-target="#AdsModal" onClick={cleanForm}>
                                <div className="Ads-plus">
                                    <span> + </span>
                                    Agregar anuncio
                                </div>
                            </Link>
                        </div>
                        : ""
                    }

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <AddsList
                        userRole={userRole}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
