
import React, { Fragment } from 'react';
import './style.css';

function View() {
    return (
        <Fragment>
            <div className="not-found">
                <div className="capsula-not-found">
                    <img className="img-capsule" src={require('../../public/img/Capsurocket.png')} alt="imagen" />
                </div>
                <div className="satelite-not-found">
                    <img className="img-satelite" src={require('../../public/img/Satellite.png')} alt="imagen" />
                </div>
            </div>
        </Fragment >
    );
}
export default View;
