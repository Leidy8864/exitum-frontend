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
        onChange_,
        className,
        contactoClassNamePrefix,
        // contactoPlaceholder,
        contactoName,
        contactosOptions,
        handleChange,
        isDisabled,
        isLoading,
        isClearable,
        isRtl,
        isSearchable,
        date,
        saveMeeting,
        hoursOptions,
        selectHour,
        selected,
        selectTypeDiary
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
                                        <input type="text" name="title" className="form-control" onChange={handleChange} />
                                    </div>
                                </div>
                                {isMeet ?
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Contacto</label>
                                            <Fragment>
                                                <Select
                                                    className={className}
                                                    classNamePrefix={contactoClassNamePrefix}
                                                    placeholder=""
                                                    // defaultValue={defaultValue}
                                                    isDisabled={isDisabled}
                                                    isLoading={isLoading}
                                                    isClearable={isClearable}
                                                    isRtl={isRtl}
                                                    isSearchable={isSearchable}
                                                    name={contactoName}
                                                    options={contactosOptions}
                                                    onChange={onChange_}
                                                />
                                            </Fragment>
                                        </div>
                                    </div> : <br />}
                                <div className="row">
                                    <div className="col-md-12 datepicker">
                                        <label>Fecha del evento</label>
                                        <Fragment>
                                            <DatePicker
                                                onChange={onChange}
                                                value={date}
                                                minDate={date}
                                            />
                                        </Fragment>
                                    </div>
                                </div>
                                {isHour ?
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                        <label>Hora del evento</label>
                                        <br/>
                                        {
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
                                            )
                                        }
                                    </div>
                                    </div> : <br />}
                            <div className="row">
                            <div className="col-md-12 form_group_">
                                    <label>Descripción</label>
                                    <textarea type="text" name="description" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={saveReminder} className="btn btn-primary" type="button">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}
export default View;
