
import React from 'react';
import './style.css';

function View(props) {

    const { 
        tip,
        description,
        reply,
        confirmChallenge,
        handleChange
     } = props

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
                                <span className="">{tip}</span>
                            </div>
                            <div className="row card-body">
                                <label>Descripcion:</label><br/>
                                <span className="">{description}</span>
                            </div>
                            <div className="row card-body">
                                <label className="w-100">Respuesta:</label><br/>
                                <span className="">{reply}</span>
                            </div>
                            <div className="row card-body">
                                <label className="w-100">Escribe aqui tus observaciones:</label>
                                <textarea className="form-control" onChange={handleChange} name="comment" />
                            </div>
                            <div className="justify-content-between d-flex">
                                <button type="submit" onClick={confirmChallenge} className="btn btn-observar">Confirmar</button>
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
