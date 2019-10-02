import React, {Fragment} from 'react';
import './style.css'
import Forgetpass from '../Forgetpass/Forgetpass-controller'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'

function View(props) {

    const {forgetPass , email, password, responseFacebook, responseGoogle, logged } = props

    return (
        <Fragment>
        <div className="modal fade" id="signin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-4 info-signup">
                                <div className="welcome-ex">
                                    <span>Que bueno verte de nuevo</span>
                                    <h2>Exitum</h2>
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
                                    <div className="form-group">
                                        <input
                                            onChange={password}
                                            name="password"
                                            type="password"
                                            placeholder="Contraseña"
                                        />
                                    </div>

                                    <div className="send-submit">
                                        <button type="submit" className="submit-signin">Iniciar Sesión</button>
                                    </div>
                                </form>
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
                                        appId="2591522130911268"
                                        textButton=""
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        cssClass="fab fa-facebook-f"
                                    />

                                    <GoogleLogin
                                        clientId="700642697607-67d5v2cokbnfue09v44061sj3iq6cr6d.apps.googleusercontent.com"
                                        buttonText=""
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        icon={true}
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
