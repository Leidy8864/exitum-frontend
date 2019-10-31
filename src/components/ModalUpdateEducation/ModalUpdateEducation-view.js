
import React, { Fragment } from 'react';
import DatePicker from 'react-date-picker';
import './style.css';

function View(props) {

    const {
        name,
        date,
        company,
        dateFinal,
        onChange,
        onChange_,
        certificateUpdate,
        CertificateId,
        CertificateName,
        CertificateIssuingCompany,
        date_expidition,
        date_expiration
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
                                id="CertificateId"
                                type="hidden"
                                name="id"
                                className="form-control"
                                value={CertificateId}
                            />
                            <div className="row">
                                <label>Descripcion</label>
                                <input
                                    type="text"
                                    id="CertificateName"
                                    onChange={name}
                                    name="name"
                                    className="form-control"
                                    defaultValue={CertificateName}
                                />
                            </div>
                            <div className="row clocwerk">
                                <label>Inicio de estudios</label>
                                <Fragment>
                                    <DatePicker
                                        onChange={onChange}
                                        value={date}
                                        selected={date_expidition}
                                        name="date_expidition"
                                    />
                                </Fragment>
                            </div>
                            <div className="row clocwerk">
                                <label>Fin de estudios</label>
                                <Fragment>
                                    <DatePicker
                                        onChange={onChange}
                                        value={date}
                                        selected={date_expidition}
                                        name="date_expidition"
                                    />
                                </Fragment>
                            </div>
                            <div className="row">
                                <label>Universidad</label>
                                <input
                                    type="text"
                                    id="CertificateName"
                                    onChange={name}
                                    name="name"
                                    className="form-control"
                                    defaultValue={CertificateName}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={certificateUpdate}>Actualizar</button>
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
