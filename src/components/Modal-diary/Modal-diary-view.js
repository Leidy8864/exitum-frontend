import React, {Fragment} from 'react';
import './style.css';
import Select from 'react-select';
import DatePicker from 'react-date-picker';

function View(props){
    const {
        onChange,
        className,
        contactoClassNamePrefix,
        contactoPlaceholder,
        contactoName,
        contactoOptions,
        isDisabled,
        isLoading,
        isClearable,
        isRtl,
        isSearchable,
        date,
        hoursOptions,
        selectHour,
        selected
    } = props;
    
    return(
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="newdiary" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="row">
                                    <div className="title_">
                                        Nueva Agenda
                                    </div>
                                    <div className="form_group_">
                                        <input type="radio" name="role" id="meet" value="meet"/>
                                        <label className="label-radio-modal-diary" htmlFor="meet">Reunion</label>
                                        <input type="radio" name="role" id="reminder" value="reminder" />
                                        <label className="label-radio-modal-diary" htmlFor="reminder">Recordatorio</label>
                                    </div>
                                    <div className="form_group_">
                                        <label>Titulo</label>
                                        <input placeholder="Titulo ..."/>
                                    </div>
                                    <div className="form_group_">
                                        <label>Contacto</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                classNamePrefix={contactoClassNamePrefix}
                                                placeholder = {contactoPlaceholder}
                                                // defaultValue={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isClearable={isClearable}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name={contactoName}
                                                options={contactoOptions}
                                            />
                                        </Fragment>
                                    </div>
                                    <div className="form_group_">
                                        <label>Fecha del evento</label>
                                        <Fragment>
                                            <DatePicker
                                                onChange={onChange}
                                                value={date}
                                                minDate={date}
                                            />
                                        </Fragment>
                                    </div>
                                    <div className="form_group_">
                                        <label>Hora del evento</label>
                                        {
                                            hoursOptions.map(dt =>
                                                <div 
                                                    key={dt}
                                                    id={dt}
                                                    className= {selected === dt ? "hourModalAdsSelected": "hourModalAds"}
                                                    onClick={selectHour}
                                                >
                                                    {dt}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="form_group_">
                                        <label>Descripción</label>
                                        <textarea/>
                                    </div>
                                    <div className="form_group_ form_group__">
                                        <button type="button">Guardar</button>
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
