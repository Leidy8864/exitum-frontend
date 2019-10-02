import React from 'react';
import './style.scss'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

function View(props) {

    const { name, lastName, email, password, responseFacebook, responseGoogle, logged } = props

    return (
        <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className=" pt-4 info-signup">
                        <div className="welcome-ex">
                            <span>Que bueno verte de nuevo</span>
                            <h2>Exitum</h2>
                        </div>
                        <form onSubmit={logged}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        className="mediun"
                                        onChange={name}
                                        name="name"
                                        type="text"
                                        placeholder="Nombre"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        className="mediun"
                                        onChange={lastName}
                                        name="lastname"
                                        type="text"
                                        placeholder="Apellidos"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        onChange={email}
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        onChange={password}
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                    />
                                </div>
                                <div className="send-submit">
                                    <button type="submit" className="submit-signup">Iniciar Sesión</button>
                                </div>
                            </div>
                        </form>
                        <div className="border-space">
                            <hr />
                            <div className="to">
                                <p>
                                    Registrate con las redes sociales</p>
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
                    <div className="col-md-0 bg-register">
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;

