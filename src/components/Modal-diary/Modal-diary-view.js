import React, { Fragment } from 'react';
import './style.css';
import Select from 'react-select';
import DatePicker from 'react-date-picker';

function View(props) {
    const {
        isHour,
        saveReminder,
        isMeet,
        onChange,
        options,
        handleChange,
        isReminder,
        handleChangeForm,
        saveMeet,
        hourAvailables,
        onChange_,
        date,
        hoursOptions,
        selectHour,
        selected,
        selectTypeDiary,
        selectedOption,
    } = props;

    return (
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="newdiary" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalLabel">Nueva Agenda</h6>
                            </div>
                            <div className="modal-body diary">
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <input type="radio" name="role" id="reunion" value="reunion" onClick={selectTypeDiary} />
                                        <label className="label-radio-modal-diary" htmlFor="reunion">Reunion</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="radio" name="role" id="recordatorio" value="recordatorio" onClick={selectTypeDiary} />
                                        <label className="label-radio-modal-diary" htmlFor="recordatorio">Recordatorio</label>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label>Titulo</label><br />
                                        <input type="text" name="title" className="form-control" onChange={handleChangeForm} />
                                    </div>
                                </div>
                                {isMeet ?
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>Contacto</label>
                                            <Fragment>
                                                <Select
                                                    className={"styleCreatableSelect_"}
                                                    placeholder={'Selecciona un contacto'}
                                                    value={selectedOption}
                                                    onChange={handleChange}
                                                    options={options}
                                                />
                                            </Fragment>
                                        </div>
                                    </div> : <br />}
                                {isMeet ? <div className="row mt-3">
                                    <div className="col-md-12 datepicker">
                                        <label>Fecha de la reunion</label>
                                        <Fragment>
                                            <DatePicker  
                                                onChange={onChange}
                                                value={date}
                                            />
                                        </Fragment>
                                    </div>
                                </div> :
                                    <div className="row mt-3">
                                        <div className="col-md-12 datepicker">
                                            <label>Fecha de recordatorio</label>
                                            <Fragment>
                                                <DatePicker
                                                    onChange={onChange}
                                                    value={date}
                                                />
                                            </Fragment>
                                        </div>
                                    </div>}
                                {isMeet ?
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>Horas disponibles del contacto</label>
                                            <br />
                                            {
                                                hourAvailables.map(dt =>
                                                    <div
                                                        key={dt}
                                                        id={dt}
                                                        className={selected === dt ? "hourModalAdsSelected" : "hourModalAds"}
                                                        onClick={selectHour}
                                                        onChange={handleChange}
                                                    >
                                                        {dt}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div> :
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>Hora del evento</label>
                                            <br />
                                            {
                                                hoursOptions && hoursOptions.length > 0 ?
                                                hoursOptions.map(dt =>
                                                    <div
                                                        key={dt}
                                                        id={dt}
                                                        className={selected === dt ? "hourModalAdsSelected" : "hourModalAds"}
                                                        onClick={selectHour}
                                                        onChange={handleChange}
                                                    >
                                                        {dt}
                                                    </div>
                                                ) : null
                                            } 
                                        </div>
                                    </div>
                                }
                                <div className="row">
                                    <div className="col-md-12 form_group_">
                                        <label>Descripción</label>
                                        <textarea type="text" name="description" className="form-control" onChange={handleChangeForm} />
                                    </div>
                                </div>
                            </div>

                            {
                                isReminder ?
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="modal-footer">
                                                <button onClick={saveReminder} className="btn btn-primary" type="button">Guardar</button>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            {
                                isMeet ?
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="modal-footer">
                                                <button onClick={saveMeet} className="btn btn-primary" type="button">Guardar</button>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}
export default View;
