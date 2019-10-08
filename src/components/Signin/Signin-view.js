import React, {Fragment} from 'react';
import './style.css'
import Forgetpass from '../Forgetpass/Forgetpass-controller'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'

function View(props) {

    const {
        forgetPass , 
        email, 
        contentError, 
        contentErrorUser,
        contentErrorPass,
        password, 
        responseFacebook, 
        responseGoogle, 
        logged
    } = props;

    return (
        <Fragment>
        <div className="modal fade background-login" id="signin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-4 info-signup">
                                <div className="welcome-ex">
                                    <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg"/></span>
                                </div>
                                <form className="form-signin" onSubmit={logged}>
                                    <div className="form-group">
                                        <input
                                            onChange={email}
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        {contentErrorUser}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={password}
                                            name="password"
                                            type="password"
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                    <div>
                                        {contentErrorPass}
                                    </div>
                                    
                                    <div className="send-submit">
                                        <button type="submit" className="submit-signin">Iniciar Sesión</button>
                                    </div>
                                </form>
                                <div className="div-margin-30px">
                                        {contentError}
                                </div>
                                <div className="forget-password">  
                                    <Link onClick={forgetPass} data-toggle="modal" data-target="#forgetpass" to="/"><p>¿Olvidaste tu contraseña?</p></Link>
                                </div>
                                <div className="border-space">
                                    <hr />
                                    <div className="to">
                                        <p>
                                            Iniciar sesión con la red social</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center socials">
                                    <FacebookLogin
                                        appId="2753590341320162"
                                        textButton=""
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        cssClass="fab fa-facebook-f"
                                    />
                                    <GoogleLogin
                                        clientId="990260099345-jh6kjumka8s2a2a796nur9tf64u26tir.apps.googleusercontent.com"
                                        buttonText=""
                                        onFailure={responseGoogle}
                                        icon={true}
                                        onSuccess={responseGoogle}
                                    >
                                    </GoogleLogin>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Forgetpass/>
        </Fragment>
    );
}
export default View;
