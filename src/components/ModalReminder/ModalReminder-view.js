
import React from 'react';
import './style.css';

function View(props) {

    const { 
        handleChange,
        title,
        description,
        time,
        date,
        updateReminder,
    } = props

    return (
        <div>
            <div className="modal fade" id="updateReminder" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Recordatorio</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="">
                                    <label>Titulo</label>
                                    <input type="text" name="title" onChange={handleChange} defaultValue={title} />
                                </div>
                                <div className="">
                                    <label>Fecha del evento</label>
                                    <input type="date" name="date" onChange={handleChange} defaultValue={date} />
                                </div>
                                <div className="">
                                    <label>Hora del evento</label>
                                    <input type="time" name="time" onChange={handleChange} defaultValue={time} />
                                </div>
                                    <div className="form_group_">
                                    <label>Descripción</label>
                                    <textarea type="text" name="description" onChange={handleChange} defaultValue={description} />
                                </div>
                                <div className="form_group_ form_group__">
                                    <button onClick={updateReminder} className="btn-submit" type="button">Guardar</button>
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
