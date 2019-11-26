
import React from 'react';
import './style.css';

function View() {
    return (
        <div className="modal fade" id="modaldare" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Reto</h6>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row card-body">
                                <label className="w-100">Titulo:</label>
                                <span className="">Reto de Techie</span>
                            </div>
                            <div className="row card-body">
                                <label>Descripcion:</label><br/>
                                <span className="">En este reto vamos a salir a completar todo lo acontecido,En este reto vamos a salir a completar todo lo acontecido
                                ,En este reto vamos a salir a completar todo lo acontecido,En este reto vamos a salir a completar todo lo acontecido</span>
                            </div>
                            <div className="row card-body">
                                <label>Respuesta:</label><br/>
                                <span className="">En este reto vamos a salir a completar todo lo acontecido,En este reto vamos a salir a completar todo lo acontecido,En este reto vamos a salir a completar todo lo acontecido,En este reto vamos a salir a completar todo lo acontecido</span>
                            </div>
                            <div className="row card-body">
                                <label>Escribe aqui tus observaciones:</label><br/>
                                <textarea className="form-control" />
                            </div>
                            <div className="justify-content-between d-flex">
                                <button type="submit" className="btn btn-observar">Confirmar</button>
                                <button type="submit" className="btn btn-confirmar">Observar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
