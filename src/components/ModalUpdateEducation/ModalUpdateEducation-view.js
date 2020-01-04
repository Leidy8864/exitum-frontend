
import React, { Fragment } from 'react';
import DatePicker from 'react-date-picker';
import './style.css';
import CreatableSelect from 'react-select/creatable';

function View(props) {

    const {
        onChange,
        onChange_,
        educationUpdate,
        EducationId,
        date,
        dateFinal,
        handleChange,
        handleInputChange,
        university,
        options,
        certificationChange,
        certificationInputChange,
        certifications,
        certification_name,
        specialityChange,
        specialitiesOptions,
        specialities
    } = props

    return (
        <div><div className="modal fade" id="updateeducation" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Educacion</h6>
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
                            <div className="form_group_ mt-3">
                                <label>Universidad</label>
                                <div className="styleCreatableSelect">
                                    <Fragment>
                                        <CreatableSelect
                                            isClearable
                                            onChange={handleChange}
                                            onInputChange={handleInputChange}
                                            options={options}
                                            // defaultValue={university}
                                            value={university}
                                            className={"styleCreatableSelect_"}
                                        />
                                    </Fragment>
                                </div>
                            </div>
                            <div className="form_group_">
                                <label>Carrera</label>
                                {/* <input
                                    type="text"
                                    id="EducationDescription"
                                    // onChange={description}
                                    name="name"
                                    className="form-control"
                                    // defaultValue={EducationDescription}
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
                                        // selected={date_expidition}
                                        name="date_expidition"
                                    />
                                </Fragment>
                            </div>
                            <div className="form_group_ clocwerk mt-3">
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
                            <div className="modal-footer mt-2">
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
