
import React, { Fragment } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';

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
        hour_start,
        error_title,
        error_description,
        error_day,
        error_hour_start,
        error_place,
        error_categories,
        categoryOptions,
        content_message,
        categoryClassNamePrefix,
        categories
    } = props
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
                                <form id="event-form">
                                    <div className="form_group_ mt-3">
                                        <label>Titulo del Anuncio</label>
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
                                    <div className="form_group_ mt-3">
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
                                        <input type="time" name="hour_start" className="form-control" onChange={handleInputChange} value={hour_start} />
                                        <div className="error-message-aux">
                                            {error_hour_start}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Lugar</label>
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
                                    {content_message}
                                    <div className="modal-footer adds mt-3">
                                        <button className="adds" type="submit" onClick={handleSubmit}>Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}
export default View;
