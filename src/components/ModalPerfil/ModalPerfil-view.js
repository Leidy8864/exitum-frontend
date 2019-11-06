
import React from 'react';
import './style.css';

function View(props) {

    const {
        name,
        lastname,
        phone,
        from_hour,
        to_hour,
        fromHourPerfil,
        toHourPerfil,
        namePerfil,
        lastnamePerfil,
        phonePerfil,
        updatePerfil,
        birthday,
        birthdayPerfil,
        position,
        positionPerfil
    } = props

    return (
        <div>
            <div className="modal fade" id="perfil" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Perfil</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombres</label>
                                        <input 
                                        type="text"
                                        defaultValue={name}
                                        onChange={namePerfil} 
                                        className="form-control" 
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Apellidos</label>
                                        <input 
                                        type="text" 
                                        defaultValue={lastname}
                                        onChange={lastnamePerfil}
                                        className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Fecha de nacimiento</label>
                                        <input 
                                        type="date" 
                                        className="form-control" 
                                        defaultValue={birthday}
                                        onChange={birthdayPerfil}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Celular</label>
                                        <input 
                                        type="text" 
                                        defaultValue={phone}
                                        onChange={phonePerfil}
                                        className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Puesto Actual</label>
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        defaultValue = {position}
                                        onChange={positionPerfil}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <label>De:</label>
                                        <input 
                                        type="time" 
                                        className="form-control"
                                        defaultValue={from_hour}
                                        onChange = {fromHourPerfil}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                    <label>Hasta:</label>
                                        <input 
                                        type="time" 
                                        className="form-control"
                                        defaultValue={to_hour}
                                        onChange = {toHourPerfil}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" onClick={updatePerfil} className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
