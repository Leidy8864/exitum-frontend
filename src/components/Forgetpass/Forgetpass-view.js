import React from 'react';
import './style.css';

function View(props){

    const { handleSubmit,handleChange,content_messsage,content_error_email } = props

    return(
        <div className="modal fade" id="forgetpass" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-4 info-signup">
                                <div className="welcome-ex">
                                    <div className="logo">
                                    <img src={require("../../public/images/svg/logo-azul.svg")} alt="svg"/>
                                    </div>
                                    <span className="text-forget">Ingresa tu email y te enviaremos un mensaje para que puedas recuperar tu contraseña</span> 
                                </div>
                                <form className="form-signin" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            name="email"
                                            type="email"
                                            onChange={handleChange}
                                            placeholder="Email"
                                            id = "email"
                                        />
                                        {content_error_email}

                                    </div>
                                    {content_messsage}

                                    <div className="send-submit">
                                        <button type="submit" className="submit-signin">Recuperar Password</button>
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
