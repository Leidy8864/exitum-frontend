
import React from 'react';
import './style.css';

function View() {
    return (
        <div className="perfil">
            <div className="container">
                <div className="count_title">
                    <h2>Perfil</h2>
                    <a href="#"><img src={require('../../public/images/svg/lapiz.svg')} /></a>
                </div>
                <div className="perfil-change-form">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Diego"/>
                            </div>
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Ortega"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="rhaegarcode@gmail.com"/>
                            </div>
                            <div className="col">
                                <input className="form-control" type="text" placeholder="930465230"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default View;
