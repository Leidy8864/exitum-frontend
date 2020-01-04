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
        company_name,
        certificationChange,
        certificationInputChange,
        certifications,
        certification_name,
        specialityChange,
        specialitiesOptions,
        specialities
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
                                <div className="form_group_ mt-3">
                                    <label>Certificacion</label>
                                    {/* <input
                                        type="text"
                                        onChange={name}
                                        name="name"
                                        id="nombreCertificado"
                                        className="form-control"
                                    /> */}
                                    <Fragment>
                                        <CreatableSelect
                                            isClearable
                                            onChange={certificationChange}
                                            onInputChange={certificationInputChange}
                                            options={certifications}
                                            value={certification_name}
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3">
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
                                <div className="form_group_ clocwerk mt-4">
                                    <label>Fecha de inicio</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                            name="date_expidition"
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ clocwerk mt-3">
                                    <label>Fecha final</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange_}
                                            value={dateFinal}
                                            name="date_expiration"
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_">
                                    <label>Especialidades</label>
                                    {/* <input
                                        type="text"
                                        id="nombreDescripcion"
                                        className="form-control"
                                        name="description"
                                        onChange={description}
                                    /> */}
                                    <Fragment>
                                        <CreatableSelect
                                            isClearable
                                            isMulti
                                            onChange={specialityChange}
                                            options={specialitiesOptions}
                                            value={specialities}
                                        />
                                    </Fragment>
                                </div>
                                <div className="response_file mt-3">
                                    {/* <p id="texto">Subir Cerfiticado</p> */}
                                    <label>Sube un certificado</label>
                                    <input id="choose_file" type="file" name="document" className="form-control" />
                                </div>
                                <div className="d-flex justify-content-end mt-3">
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
