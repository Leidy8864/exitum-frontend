
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
            <div className="modal fade" id="perfilusuario" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header adds">
                            <h6 className="modal-title" id="exampleModalLabel">Mi Perfil</h6>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label>Nombres</label>
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
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
                                    <div className="col-md-6 mb-3">
                                        <label>Fecha de nacimiento</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="birthday"
                                            defaultValue={birthday}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
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
                                    <div className="col-md-12 mb-3 perfils">
                                        <label>Acerca de mí</label>
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
                                        <label>Seleccione tus horas disponibles para reuniones</label>
                                        <div className="content-hour">
                                            {
                                                hoursOptions.map(dt =>

                                                    <div className="text-hour" key={dt}>
                                                        <input
                                                            type="checkbox"
                                                            id={dt + "checked"}
                                                            name="available"
                                                            className={selected === dt ? "hourModalAdsSelected" : "hourModalAds none-checked"}
                                                            onClick={selectHour}
                                                        />
                                                        <label htmlFor={dt + "checked"}>{dt}</label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div> : <br />}
                            </form>
                        </div>
                        <div className="d-flex justify-content-end mt-3 mb-3 mr-4">
                            <button type="submit" onClick={updatePerfil} className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
