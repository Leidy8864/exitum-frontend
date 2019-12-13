import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';

function View(props) {

    const {
        description,
        date,
        education,
        dateFinal,
        onChange,
        onChange_,
        options,
        handleChange,
        handleInputChange,
        university_name,
        certificationChange,
        certificationInputChange,
        certifications,
        certification_name,
    } = props

    return (
        <div>
            <div className="modal fade" id="education" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Educacion</h6>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={education}>
                                <div className="form_group_">
                                    <label>Carrera</label>
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
                                            onChange={certificationChange}
                                            onInputChange={certificationInputChange}
                                            options={certifications}
                                            value={certification_name}
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ clocwerk mt-3">
                                    <label>Inicio de estudios</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                            name="date_start"
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ clocwerk mt-3">
                                    <label>Fin de estudios</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange_}
                                            value={dateFinal}
                                            name="date_end"
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3">
                                    <label>Universidad</label>
                                    <Fragment>
                                        <CreatableSelect
                                            isClearable
                                            onChange={handleChange}
                                            onInputChange={handleInputChange}
                                            options={options}
                                            className={"styleCreatableSelect_"}
                                            value={university_name}
                                        />
                                    </Fragment>
                                </div>
                                <div className="d-flex justify-content-end mt-4">
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
