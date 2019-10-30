
import React,{Fragment} from 'react';
import './style.css';
import DatePicker from 'react-date-picker';

function View(props) {

    const {
        description,
        date,
        education,
        dateFinal,
        onChange,
        onChange_,
        university,
        other_university
    } = props

    return (
        <div>
            <div className="modal fade" id="education" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Educacion</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={education}>
                                <div className="row">
                                    <label>Descripcion</label>
                                    <input 
                                     type="text"
                                     className="form-control"
                                     name="description"
                                     onChange={description}
                                     />
                                </div>
                                <div className="row clocwerk">
                                    <label>Inicio de estudios</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                        />
                                    </Fragment>
                                </div>
                                <div className="row clocwerk">
                                    <label>Fin de estudios</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange_}
                                            value={dateFinal}
                                        />
                                    </Fragment>
                                </div>
                                <div className="row">
                                    <label>Universidad</label>
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    name="university"
                                    onChange={university}
                                    />
                                </div>
                                <div className="row">
                                    <label>Otra Universidad</label>
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    name="other_university"
                                    onChange={other_university}
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
