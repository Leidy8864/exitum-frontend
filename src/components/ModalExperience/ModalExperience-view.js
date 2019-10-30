
import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';

function View(props) {

    const {
        position,
        company,
        experience,
        date,
        dateFinal,
        onChange,
        onChange_
    } = props

    return (
        <div>
            <div className="modal fade" id="experience" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Experiencia</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={experience}>
                                <div className="row">
                                    <label>Cargo</label>
                                    <input
                                        type="text"
                                        onChange={position}
                                        name="position"
                                        className="form-control"
                                    />
                                </div>
                                <div className="row">
                                    <label>Empresa</label>
                                    <input
                                        type="text"
                                        onChange={company}
                                        name="company"
                                        className="form-control"
                                    />
                                </div>
                                <div className="row clocwerk">
                                    <label>Fecha de inicio</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                        />
                                    </Fragment>
                                </div>
                                <div className="row clocwerk">
                                    <label>Fecha final</label>
                                    <Fragment>
                                        <DatePicker 
                                            onChange={onChange_}
                                            value={dateFinal}
                                        />
                                    </Fragment>
                                </div>
                                <div className="row mt-1">
                                    <label>Actualmente trabajando</label>
                                    <input className="radio-work" type="radio" name="radio" value="false" />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
