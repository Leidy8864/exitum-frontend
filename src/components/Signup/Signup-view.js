import React from 'react';
import './style.css'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

function View(props) {

    const {
        name,
        lastname,
        email,
        password,
        responseFacebook,
        responseGoogle,
        logged,
        content_error_name,
        content_error_lastname,
        content_error_email,
        content_error_password,
        content_error_registro,
        content_exito_registro
    } = props

    return (
        <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className=" pt-4 info-signup">
                        <div className="welcome-ex">
                            <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg" /></span>
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
                                    <div className="error-message-aux">
                                        {content_error_name}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        className="mediun"
                                        onChange={lastname}
                                        name="lastname"
                                        type="text"
                                        placeholder="Apellidos"
                                    />
                                    <div className="error-message-aux">
                                        {content_error_lastname}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input
                                        onChange={email}
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <div className="error-message-aux">
                                        {content_error_email}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input
                                        onChange={password}
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                    />
                                    <div className="error-message-aux">
                                        {content_error_password}
                                    </div>
                                </div>
                                <div className="send-submit">
                                    <button type="submit" className="submit-signup">Registrate</button>
                                </div>
                            </div>
                        </form>
                        {content_error_registro}
                        {content_exito_registro}
                        <div className="border-space">
                            <hr />
                            <div className="to">
                                <p>
                                    Registrate con las redes sociales</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center socials">
                            <FacebookLogin
                                appId="2753590341320162"
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
                            />
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

