
import React from 'react';
import './style.css';

function View(props) {

    const {
        handleChange,
        title,
        description,
        time,
        date,
        selectHour,
        selected,
        hoursOptions,
        updateReminder,
        selectTypeDiary,
        isHour,
    } = props

    return (
        <div>
            <div className="modal fade" id="updateReminder" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Recordatorio</h6>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="">
                                    <label>Titulo</label>
                                    <input type="text" className="form-control" name="title" onChange={handleChange} defaultValue={title} />
                                </div>
                                <div className="mt-3">
                                    <label>Fecha del evento</label>
                                    <input type="date" className="form-control" name="date" onChange={handleChange} defaultValue={date} />
                                </div>
                                <div className="form_group_ mt-3">
                                    <label>Hora del evento</label>
                                    {
                                        hoursOptions.map(dt =>
                                            <div
                                                key={dt}
                                                id={dt}
                                                className={selected === dt ? "hourModalAdsSelected" : "hourModalAds"}
                                                onClick={selectHour}
                                                onChange={handleChange}
                                                defaultValue={time}
                                            >
                                                {dt}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="form_group_ mt-3">
                                    <label>Descripción</label>
                                    <textarea className="form-control" type="text" name="description" onChange={handleChange} defaultValue={description} />
                                </div>
                                <div className="modal-footer mt-3">
                                    <button onClick={updateReminder} className="btn btn-primary" type="button">Guardar</button>
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
