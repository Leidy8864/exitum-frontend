import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';

function View(props) {

    const {
        name,
        date,
        dateFinal,
        onChange,
        onChange_,
        certificate,
        options,
        handleChange,
        handleInputChange,
        company_name
    } = props

    return (
        <div>
            <div className="modal fade" id="certificate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Certificacion</h6>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label>Certificacion</label>
                                        <input
                                            type="text"
                                            onChange={name}
                                            name="name"
                                            id="nombreCertificado"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label>Empresa</label>
                                        <Fragment>
                                            <CreatableSelect
                                                isClearable
                                                onChange={handleChange}
                                                onInputChange={handleInputChange}
                                                options={options}
                                                className={"styleCreatableSelect_"}
                                                value={company_name}
                                            />
                                        </Fragment>
                                    </div>
                                </div>
                                <div className="row clocwerk mt-3">
                                    <div className="col-md-12">
                                        <label>Fecha de inicio</label>
                                        <Fragment>
                                            <DatePicker
                                                onChange={onChange}
                                                value={date}
                                                name="date_expidition"
                                            />
                                        </Fragment>
                                    </div>
                                </div>
                                <div className="row clocwerk mt-3">
                                    <div className="col-md-12">
                                        <label>Fecha final</label>
                                        <Fragment>
                                            <DatePicker
                                                onChange={onChange_}
                                                value={dateFinal}
                                                name="date_expiration"
                                            />
                                        </Fragment>
                                    </div>
                                </div>
                                <div className="response_file mt-3">
                                    <p id="texto">Subir Cerfiticado</p>
                                    <input id="choose_file" type="file" name="document" />
                                </div>
                                <div className="modal-footer">

                                    <button type="submit" className="btn btn-primary" onClick={certificate}>Guardar</button>
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
