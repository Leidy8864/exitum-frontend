
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import ModalDare from '../ModalDare/ModalDare-controller'
import './style.css';

function View() {
    return (
        <Fragment>
            <div className="row ml-1">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <Link to="#" data-toggle="modal" data-target="#modaldare" className="title-body d-flex"><i className="far fa-snowflake mt-1"></i><h6 className="card-title ml-2">Reto de Techie</h6></Link>
                            <div className="contact-body d-flex">
                                <i className="far fa-address-book mt-1"></i><p className="ml-2">Leydi baby</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalDare />
            </div>
        </Fragment>
    );
}
export default View;
