import { Link } from 'react-router-dom'
import React from 'react';
import './style.css';

function View(props){

    const { sendEmail } = props

    return(
        <div className="modal fade" id="forgetpass" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-4 info-signup">
                                <div className="welcome-ex">
                                <h2>Exitum</h2>
                                    <span className="text-forget">Ingresa tu email y te enviaremos un mensaje para que puedas recuperar tu contraseña</span> 
                                </div>
                                <form className="form-signin">
                                    <div className="form-group">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="send-submit">
                                        <button data-dismiss="modal" aria-label="Close" onClick={sendEmail} type="submit" className="submit-signin">Iniciar Sesión</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
