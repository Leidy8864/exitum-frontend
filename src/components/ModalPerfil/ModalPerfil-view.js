
import React from 'react';
import './style.css';

function View(props) {

    const {
        isHour,
        name,
        lastname,
        phone,
        birthday,
        description,
        hoursOptions,
        selectHour,
        selected,
        handleChange,
        updatePerfil
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
                                            name="name"
                                            defaultValue={name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Apellidos</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            defaultValue={lastname}
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Fecha de nacimiento</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="birthday"
                                            defaultValue={birthday}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Celular</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            defaultValue={phone}
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Descripcion</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            name="description"
                                            defaultValue={description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {isHour ?
                                    <div className="form_group_ mt-1">
                                        <label>Seleccione horas disponibles para reuniones</label>
                                        <div className="content-hour">
                                        {
                                            hoursOptions.map(dt =>
                                                
                                                    <div className="text-hour">
                                                        <div
                                                            key={dt}
                                                            id={dt}
                                                            name="available"
                                                            className={selected === dt ? "hourModalAdsSelected" : "hourModalAds"}
                                                            onClick={selectHour}
                                                            >
                                                            </div>
                                                        {dt}
                                                    </div>
                                            )
                                        }
                                        </div>
                                    </div> : <br />}
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
