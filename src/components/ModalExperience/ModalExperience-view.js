
import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

function View(props) {

    const {
        categories,
        ocupations,
        handleSelectChange,
        className,
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
        ocupationChange,
        ocupationInputChange,
        ocupation_name
    } = props
    console.log("ALDO ",ocupations)
    return (
        <div>
            <div className="modal fade" id="experience" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Experiencia</h6>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={experience} className="p-3">
                                <div className="form_group_ mt-3">
                                    <label>Posisión</label>
                                    {/* <input
                                        type="text"
                                        onChange={position}
                                        name="position"
                                        id="nombrePosition"
                                        className="form-control"
                                    /> */}
                                    <Fragment>
                                        <CreatableSelect
                                            isClearable
                                            onChange={ocupationChange}
                                            onInputChange={ocupationInputChange}
                                            options={ocupations}
                                            value={ocupation_name}
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
                                            value={company_name}
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3">
                                    <label>Seleccionar el rubro de la empresa</label>
                                    <Fragment>
                                        <Select
                                            className={className}
                                            name="category_id"
                                            options={categories}
                                            onChange={handleSelectChange}
                                            placeholder="Rubro..."
                                            id="category_id"
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3 clocwerk">
                                    <label>Fecha de inicio</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                            name="date_start"
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3 ">
                                    <label>Actualmente trabajando</label>
                                </div>
                                <div className="form_group_ mt-3">
                                    <input type="radio" name="role" id="true" value="true" onClick={selectCurrentJob}/>
                                    <label className="label-radio-modal-experience" htmlFor="true">Si</label>
                                    <input type="radio" name="role" id="false" value="false" onClick={selectCurrentJob}/>
                                    <label className="label-radio-modal-experience" htmlFor="false">No</label>
                                </div>
                                <div className="form_group_ mt-3 clocwerk" id="endDateModal">
                                    <label>Fecha Fin</label>
                                    <Fragment>
                                            <DatePicker
                                                onChange={onChange_}
                                                value={dateFinal}
                                                name="date_start"
                                            />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3">
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
                                <div className="d-flex justify-content-end mt-3">
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
