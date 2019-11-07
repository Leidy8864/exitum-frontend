
import React from 'react';
import './style.css';

function View(props) {

    const {
        isHour,
        name,
        lastname,
        phone,
        namePerfil,
        lastnamePerfil,
        phonePerfil,
        updatePerfil,
        birthday,
        birthdayPerfil,
        hoursOptions,
        selectHour,
        selected,
        selectTypeDiary
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
                                {isHour ?
                                    <div className="form_group_ mt-1">
                                        <label>Seleccione horas disponibles para reuniones</label>
                                        {
                                            hoursOptions.map(dt =>
                                                <div
                                                    key={dt}
                                                    id={dt}
                                                    className={selected === dt ? "hourModalAdsSelected" : "hourModalAds"}
                                                    onClick={selectHour}
                                                >
                                                    {dt}
                                                </div>
                                            )
                                        }
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
