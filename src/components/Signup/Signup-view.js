import React from 'react';
import './style.css'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

function View(props) {

    const {
        name,
        content_error_genre,
        lastname_1,
        lastname_2,
        email_1,
        email_2,
        password_1,
        password_2,
        responseFacebook,
        responseGoogle,
        logged,
        content_error_name,
        content_error_lastname_1,
        content_error_lastname_2,
        content_error_email_1,
        content_error_email_2,
        content_error_password_1,
        content_error_password_2,
        content_error_registro,
        content_exito_registro,
        selectGenre,
        isChecked,
        toggleChange
    } = props

    return (
        <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className=" pt-4 info-signup">
                        <div className="welcome-ex">
                            <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg" /></span>
                        </div>
                        <form onSubmit={logged} className="mt-3">
                            <div className="row mt-1">
                                <div className="col-md-12">
                                    <input
                                        className="mediun"
                                        onChange={name}
                                        name="name"
                                        type="text"
                                        placeholder="Nombres"
                                    />
                                    <div className="error-message-aux">
                                        {content_error_name}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <input
                                        className="mediun"
                                        onChange={lastname_2}
                                        name="lastname"
                                        type="text"
                                        placeholder="Apellido Paterno"
                                    />
                                    <div className="error-message-aux">
                                        {content_error_lastname_2}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        className="mediun"
                                        onChange={lastname_1}
                                        name="lastname"
                                        type="text"
                                        placeholder="Apellido Materno"
                                    />
                                    <div className="error-message-aux">
                                        {content_error_lastname_1}
                                    </div>
                                </div>
                            </div>

                                <div className="row mt-1">
                                    <div className="col-md-6">
                                        <input
                                            className="mediun"
                                            onChange={email_1}
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                        <div className="error-message-aux">
                                            {content_error_email_1}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            onChange={email_2}
                                            name="email"
                                            type="email"
                                            className="mediun"
                                            placeholder="Confirmar email"
                                        />
                                        <div className="error-message-aux">
                                            {content_error_email_2}
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-6">
                                        <input
                                            className="mediun"
                                            onChange={password_1}
                                            name="password"
                                            type="password"
                                            placeholder="Contraseña"
                                        />
                                        <div className="error-message-aux">
                                            {content_error_password_1}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            onChange={password_2}
                                            className="mediun"
                                            name="password"
                                            type="password"
                                            placeholder="Confirmar contraseña"
                                        />
                                        <div className="error-message-aux">
                                            {content_error_password_2}
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-6">
                                        <input type="radio" name="role" id="femenino" value="femenino" onClick={selectGenre} />
                                        <label className="label-radio-modal-diary" htmlFor="femenino">Femenino</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="radio" name="role" id="masculino" value="masculino" onClick={selectGenre} />
                                        <label className="label-radio-modal-diary" htmlFor="masculino">Masculino</label>
                                    </div>
                                    <div className="error-message-aux text-center w-100">
                                        {content_error_genre}
                                    </div>
                                </div>
                                <div className="row mt-1 mt-2">
                                    <div className="col-md-12 text-center">
                                        <input type="checkbox" id="checked" name="fruit-1" value="Apple" checked={isChecked} onChange={toggleChange} />
                                        <label htmlFor="checked">Sí,acepto los <a href="https://www.w3schools.com" target="_blank">Términos y condiciones</a> que he leido</label>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="send-submit col-md-12">
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

