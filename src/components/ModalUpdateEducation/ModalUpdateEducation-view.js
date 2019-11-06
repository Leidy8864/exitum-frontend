
import React, { Fragment } from 'react';
import DatePicker from 'react-date-picker';
import './style.css';

function View(props) {

    const {
        onChange,
        onChange_,
        educationUpdate,
        EducationId,
        date,
        dateFinal,
    } = props

    return (
        <div><div className="modal fade" id="updateeducation" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Educacion</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <input
                                id="EducationId"
                                type="hidden"
                                name="id"
                                className="form-control"
                                value={EducationId || ''}
                            />
                            <div className="row">
                                <label>Descripcion</label>
                                <input
                                    type="text"
                                    id="EducationDescription"
                                    // onChange={description}
                                    name="name"
                                    className="form-control"
                                    // defaultValue={EducationDescription}
                                />
                            </div>
                            <div className="row clocwerk">
                                <label>Inicio de estudios</label>
                                <Fragment>
                                    <DatePicker
                                        onChange={onChange}
                                        value={date}
                                        // selected={date_expidition}
                                        name="date_expidition"
                                    />
                                </Fragment>
                            </div>
                            <div className="row clocwerk">
                                <label>Fin de estudios</label>
                                <Fragment>
                                    <DatePicker
                                        onChange={onChange_}
                                        value={dateFinal}
                                        // selected={date_expiration}
                                        name="date_expiration"
                                    />
                                </Fragment>
                            </div>
                            <div className="row">
                                <label>Universidad</label>
                                <input
                                    type="text"
                                    id="EducationUniversity"
                                    // onChange={university}
                                    name="name"
                                    className="form-control"
                                    // defaultValue={EducationUniversity}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={educationUpdate}>Actualizar</button>
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
