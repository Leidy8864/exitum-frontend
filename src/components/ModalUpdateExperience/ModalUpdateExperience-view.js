
import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';

function View(props) {

    const {
        experience_id,
        position,
        description,
        description_,
        experience,
        date,
        onChange,
        dateFinal,
        onChange_,
        selectCurrentJob,
        options,
        handleChange,
        handleInputChange,
        company_name,
        updateExperience
    } = props

    return (
        <div>
            <div className="modal fade" id="updateexperience" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Experiencia</h5>
                        </div>
                        <div className="modal-body">
                            <input
                                id="experience_id"
                                type="hidden"
                                name="id"
                                className="form-control"
                                value={experience_id || ''}
                            />
                            <form onSubmit={updateExperience}>
                                <div className="row">
                                    <label>Posisión</label>
                                    <input
                                        type="text"
                                        id="positionName"
                                        onChange={position}
                                        name="position"
                                        className="form-control"
                                    />
                                </div>
                                <div className="row">
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
                                <div className="row clocwerk">
                                    <label>Fecha de inicio</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                            name="date_start"
                                        />
                                    </Fragment>
                                </div>
                                <div className="row mt-1">
                                    <label>Actualmente trabajando</label>
                                </div>
                                <div className="row mt-1">
                                    <input type="radio" name="role" id="true_" value="true_" onClick={selectCurrentJob}/>
                                    <label className="label-radio-modal-experience" htmlFor="true_">Si</label>
                                    <input type="radio" name="role" id="false_" value="false_" onClick={selectCurrentJob}/>
                                    <label className="label-radio-modal-experience" htmlFor="false_">No</label>
                                </div>
                                <div className="row clocwerk" id="endDateModal_">
                                    <label>Fecha Fin</label>
                                    <Fragment>
                                            <DatePicker
                                                onChange={onChange_}
                                                value={dateFinal}
                                                name="date_start"
                                            />
                                    </Fragment>
                                </div>
                                <div className="row">
                                    <label>Descripción del puesto(Describa un resumen de sus funciones)</label>
                                    <textarea 
                                        name="description" 
                                        onChange={description} 
                                        onKeyPress={description} 
                                        id="nombreDescripcion"
                                        value={description_} 
                                        className="form-control textarea"

                                    />
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
