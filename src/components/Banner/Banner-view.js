import React, { Fragment } from 'react';
import capsule from '../../public/images/svg/capsule.svg'
import rectangle from '../../public/images/svg/rectangle.svg'
import square from '../../public/images/svg/square.svg'
import circle from '../../public/images/svg/circle.svg'
import rectangleSmall from '../../public/images/svg/rectangle-small.svg'
import squareSmall from '../../public/images/svg/square-small.svg'
import circleSmall from '../../public/images/svg/circle-small.svg'
import Signup from '../Signup/Signup-controller'
import './style.css';

function View(props) {
    const {
        cleanForm,
    } = props
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 items">
                        <span className="item rectangle-1"><img src={rectangle} alt="svg"/></span>
                        <span className="item square-1"><img src={square} alt="svg"/></span>
                        <span className="item circle-1"><img src={circle} alt="svg"/></span>
                        <span className="item rectangle-2"><img src={rectangleSmall} alt="svg"/></span>
                        <span className="item square-2"><img src={squareSmall} alt="svg"/></span>
                        <span className="item circle-2"><img src={circleSmall} alt="svg"/></span>
                        <span className="item rectangle-3"><img src={rectangleSmall} alt="svg"/></span>
                        <span className="item square-3"><img src={squareSmall} alt="svg"/></span>
                        <span className="item circle-3"><img src={circleSmall} alt="svg"/></span>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="container-banner row">
                        <div className="info-banner col-md-6 ">
                            <div className="text-info celplus">
                                <h3>sueño</h3>
                                <h2>Tu <span>proyecto</span><br />
                                    en nuestras manos</h2>
                            </div>
                            <div className="text-info cel">
                            <h2>Tu <span>sueño</span><br/>
                                en nuestras manos</h2>
                            </div>
                            <div className="info-small">
                                <span>Demuestra tu experiencia y el potencial que hay en tí</span>
                            </div>
                            <div className="btn-register">
                                <button onClick={cleanForm} type="button" className="btn-signup" data-toggle="modal" data-target="#signup" >
                                    Registrarme
                                </button>
                            </div>
                        </div>
                        <div className="img-banner col-md-6">
                            <img className="capsule" src={capsule} alt="banner principal"/>
                        </div>
                    </div>
                </div>
            </div>
            <Signup clear={true}/>
        </Fragment>
    );
}
export default View;
