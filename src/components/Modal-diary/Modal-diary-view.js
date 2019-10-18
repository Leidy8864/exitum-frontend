import React, {Fragment} from 'react';
import './style.css';
import Select from 'react-select';

function View(props){
    const {
        className,
        contactoClassNamePrefix,
        contactoPlaceholder,
        contactoName,
        contactoOptions,
        diaClassNamePrefix,
        diaPlaceholder,
        diaName,
        diaOptions,
        mesClassNamePrefix,
        mesPlaceholder,
        mesName,
        mesOptions,
        anhoClassNamePrefix,
        anhoPlaceholder,
        anhoName,
        anhoOptions,
        isDisabled,
        isLoading,
        isClearable,
        isRtl,
        isSearchable
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
                                        <label className="label-radio-modal-diary"htmlFor="meet">Reunion</label>
                                        <input type="radio" name="role" id="reminder" value="reminder" />
                                        <label className="label-radio-modal-diary"htmlFor="reminder">Recordatorio</label>
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
                                        <div className="date">
                                            <Select
                                                className={className}
                                                classNamePrefix={diaClassNamePrefix}
                                                placeholder = {diaPlaceholder}
                                                // defaultValue={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isClearable={isClearable}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name={diaName}
                                                options={diaOptions}
                                            />
                                        </div>
                                        <div className="date">
                                            <Select
                                                className={className}
                                                classNamePrefix={mesClassNamePrefix}
                                                placeholder = {mesPlaceholder}
                                                // defaultValue={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isClearable={isClearable}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name={mesName}
                                                options={mesOptions}
                                            />
                                        </div>
                                        <div className="date">
                                            <Select
                                                className={className}
                                                classNamePrefix={anhoClassNamePrefix}
                                                placeholder = {anhoPlaceholder}
                                                // defaultValue={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isClearable={isClearable}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name={anhoName}
                                                options={anhoOptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Descripción</label>
                                        <textarea/>
                                    </div>
                                    <div className="form_group_">
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
