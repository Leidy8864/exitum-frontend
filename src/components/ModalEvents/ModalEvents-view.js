
import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
// import TimePicker from 'react-time-picker';
import TimePicker from 'react-times';
import 'react-times/css/material/default.css';

function View(props) {
    const {
        handleSelectChange,
        handleDateChange,
        handleInputChange,
        handleSubmit,
        title,
        description,
        day,
        place,
        participants,
        fileSelectedHandler,
        hour_start,
        error_title,
        error_description,
        error_participants,
        error_day,
        error_hour_start,
        error_place,
        error_categories,
        categoryOptions,
        citiesOptions,
        content_message,
        categoryClassNamePrefix,
        categories,
        department,
        countriesOptions,
        error_country,
        error_department,
        country,
        onFocusChange,
        onTimeChange,
        hour,
        minute,
        focused,
    } = props
    // console.log("DAY",day);

    return (
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="EventsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header adds">
                                <h6 className="modal-title">Crear Evento</h6>
                            </div>
                            <div className="modal-body">
                                <div id="event-form">
                                    <div className="form_group_ mt-3">
                                        <label>Titulo del evento</label>
                                        <input name="title" className="form-control" onChange={handleInputChange} id="title"
                                            value={title}
                                        />
                                        <div className="error-message-aux">
                                            {error_title}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Descripción del evento</label>
                                        <textarea type="text" name="description" onChange={handleInputChange} id="description"
                                            value={description}
                                            className="form-control"
                                        />
                                        <div className="error-message-aux">
                                            {error_description}
                                        </div>
                                    </div>
                                    <div className="form_group_ clocwerk mt-3">
                                        <label>Fecha</label>
                                        <Fragment>
                                            <DatePicker
                                                onChange={handleDateChange}
                                                value={day}
                                                name="day"
                                                minDate={new Date()}
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {error_day}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Hora</label>
                                        {/* <input type="time" name="hour_start" className="form-control" onChange={handleInputChange} value={hour_start} /> */}
                                        <TimePicker
                                            focused={focused}
                                            onFocusChange={onFocusChange}
                                            onTimeChange={onTimeChange}
                                            time={hour_start}

                                        />
                                        <div className="error-message-aux">
                                            {error_hour_start}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>País</label>
                                        <Fragment>
                                            <Select
                                                className="basic-single"
                                                // value={startupSelected ? startupSelected : ''}
                                                value={country}
                                                isSearchable={true}
                                                name="country"
                                                options={countriesOptions}
                                                onChange={handleSelectChange}
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {error_country}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Ciudad</label>
                                        <Fragment>
                                            <CreatableSelect
                                                value={department}
                                                name="department"
                                                options={citiesOptions}
                                                className="basic-single"
                                                classNamePrefix={categoryClassNamePrefix}
                                                placeholder="Seleccione una ciudad"
                                                onChange={handleSelectChange}
                                                id="department"
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {error_department}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Dirección</label>
                                        <input type="text" name="place" className="form-control" onChange={handleInputChange} value={place} />
                                        <div className="error-message-aux">
                                            {error_place}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Categorías</label>
                                        <Fragment>
                                            <CreatableSelect
                                                isMulti
                                                value={categories}
                                                name="categories"
                                                options={categoryOptions}
                                                className="basic-multi-select"
                                                classNamePrefix={categoryClassNamePrefix}
                                                placeholder="Categorías..."
                                                onChange={handleSelectChange}
                                                id="categories"
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {error_categories}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Capacidad máxima de participantes</label>
                                        <input value={participants} type="number" name="participants" className="form-control" onChange={handleInputChange} />
                                    </div>
                                    <div className="error-message-aux">
                                        {error_participants}
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Elija un banner de tu evento</label>
                                        <input type="file" name="photo" id="photo_banner" className="form-control" />
                                    </div>
                                    {content_message}
                                    <div className="form_group_">
                                        <div className="d-flex justify-content-end mb-3">
                                            <button className="btn btn-primary event" type="button" onClick={handleSubmit}>Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}
export default View;
