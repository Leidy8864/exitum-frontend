import React,{Fragment} from 'react';
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
        university_name
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
                                <div className="row">
                                    <div className="col-md-12">
                                    <label>Descripcion</label>
                                    <input 
                                     type="text"
                                     id="nombreDescripcion"
                                     className="form-control"
                                     name="description"
                                     onChange={description}
                                     />
                                    </div>
                                </div>
                                <div className="row clocwerk mt-3">
                                    <div className="col-md-12">
                                    <label>Inicio de estudios</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                            name="date_start"
                                        />
                                    </Fragment>
                                    </div>
                                </div>
                                <div className="row clocwerk mt-3">
                                    <div className="col-md-12">
                                    <label>Fin de estudios</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange_}
                                            value={dateFinal}
                                            name="date_end"
                                        />
                                    </Fragment>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
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
                                </div>
                                <div className="modal-footer mt-3">
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
