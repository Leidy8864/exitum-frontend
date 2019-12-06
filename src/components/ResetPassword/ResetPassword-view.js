
import React from 'react';
import './style.css';
function View(props) {

    const {
        handleSubmit,
        handleChange,
        content_error_message,
        error,
    } = props

    return (
        <div>
            <div className="container container-form">
                <div className="row">
                    <div className="col-sm-12 align-self-center">

                        {
                            error ?
                                <div>
                                    <div className="welcome-ex col-sm-12">
                                        <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg" /></span>
                                    </div>
                                    <div className="card mt-5 ">
                                        <div className="card-body">
                                            <h1 className="card-title text-center text-danger my-2">
                                                Acceso Denegado</h1>
                                            <h3 className="card-text  text-center text-secondary my-4">
                                                <span><img src={require("../../public/images/svg/alert-icon.svg")} alt="svg" className="mb-1 mx-2" /></span>
                                                No tienes permiso para acceder a este contenido
                                            </h3>
                                            <div className="send-submit">
                                                <a className="btn btn-outline-primary btn-lg" href="/" role="button">Ir al Inicio</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>

                                    <div className="welcome-ex col-sm-12">
                                        <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg" /></span>
                                    </div>
                                    <form className="reset-form" onSubmit={handleSubmit}>
                                        <div className="row justify-content-start ">
                                            <div className="col-sm-12 my-2">
                                                <input type="password"
                                                    name="new_password"
                                                    placeholder="Cambiar Contraseña"
                                                    onChange={handleChange}
                                                    disabled={error}

                                                />
                                            </div>
                                            <div className="col-sm-12 my-2">
                                                <input type="password"
                                                    name="verify_password"
                                                    placeholder="Confirmar Contraseña"
                                                    onChange={handleChange}
                                                    disabled={error}
                                                />
                                            </div>
                                            {content_error_message}
                                            <div className="send-submit">
                                                <button type="submit" className="submit-signup" disabled={error}>Restablecer</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
