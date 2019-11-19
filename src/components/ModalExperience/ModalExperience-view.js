
import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';

function View(props) {

    const {
        position,
        // company_name,
        experience,
        date,
        onChange,
        dateFinal,
        onChange_,
        selectCurrentJob,
        options,
        handleChange,
        handleInputChange,
        company_name
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
                                    <label>Posision</label>
                                    <input
                                        type="text"
                                        onChange={position}
                                        name="position"
                                        id="nombrePosition"
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
                                    <input type="radio" name="role" id="true" value="true" onClick={selectCurrentJob}/>
                                    <label className="label-radio-modal-experience" htmlFor="true">Si</label>
                                    <input type="radio" name="role" id="false" value="false" onClick={selectCurrentJob}/>
                                    <label className="label-radio-modal-experience" htmlFor="false">No</label>
                                </div>
                                <div className="row clocwerk" id="endDateModal">
                                    <label>Fecha Fin</label>
                                    <Fragment>
                                            <DatePicker
                                                onChange={onChange_}
                                                value={dateFinal}
                                                name="date_start"
                                            />
                                    </Fragment>
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
