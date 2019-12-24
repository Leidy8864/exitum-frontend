import React, { Fragment } from 'react';
import './style.css'
import Forgetpass from '../Forgetpass/Forgetpass-controller'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'


function View(props) {

    const {
        forgetPass,
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
                            <div className="welcome-ex mt-4">
                                <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg" /></span>
                            </div>
                            <form className="form-signin" onSubmit={logged}>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <input
                                            onChange={email}
                                            name="email"
                                            className="mediun"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        {contentErrorUser}
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <input
                                            onChange={password}
                                            name="password"
                                            className="mediun"
                                            type="password"
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                    {contentErrorPass}
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <div className="send-submit">
                                            <button type="submit" className="submit-signin">Iniciar Sesión</button>
                                        </div>
                                    </div>
                                    {contentError}
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
                                    appId="576346469845895"
                                    textButton=""
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="fab fa-facebook-f"
                                    icon={true}
                                />

                                <GoogleLogin
                                    clientId="71522118837-doshidv99lglkc314sk3sr7ve84o335d.apps.googleusercontent.com"
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
            <Forgetpass clear={true} />
        </Fragment>
    );
}
export default View;
