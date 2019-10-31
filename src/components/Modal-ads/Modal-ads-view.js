import React, { Fragment } from 'react';
import Select from 'react-select';
import './style.css'

function View(props) {
    const {
        className,
        proyectClassNamePrefix,
        AreaClassNamePrefix,
        skillClassNamePrefix,
        isDisabled,
        isLoading,
        // isClearable,
        isRtl,
        isSearchable,
        // proyectName,
        // areaName,
        startupOptions,
        areaOptions,
        skillsOptions,
        handleChange,
        handleSelectChange,
        handleSubmit,
        content_error_title,
        content_error_startup,
        content_error_area,
        content_error_description,
        content_error_skills,
        content_message,
        
    } = props;
    return (
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="AdsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="title_">
                                        Nuevo Anuncio
                                    </div>
                                    <div className="form_group_">
                                        <label>Seleccionar Proyecto</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                classNamePrefix={proyectClassNamePrefix}
                                                // placeholder = "Proyectos..."
                                                // defaultValue={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name="startup_id"
                                                options={startupOptions}
                                                onChange={handleSelectChange}
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {content_error_startup}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Seleccionar Area</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                classNamePrefix={AreaClassNamePrefix}
                                                placeholder="Area..."
                                                // value={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name="area_id"
                                                options={areaOptions}
                                                onChange={handleSelectChange}

                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {content_error_area}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Titulo del Anuncio</label>
                                        <input name="title" onChange={handleChange} id="title" />
                                        <div className="error-message-aux">
                                            {content_error_title}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Aptitudes del perfil</label>
                                        <Fragment>
                                            <Select
                                                isMulti
                                                name="skills"
                                                options={skillsOptions}
                                                className="basic-multi-select"
                                                classNamePrefix={skillClassNamePrefix}
                                                placeholder="Skills..."
                                                onChange={handleSelectChange}
                                                id="skills"
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {content_error_skills}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Descripción del proyecto</label>
                                        <textarea name="description" onChange={handleChange} id="description" />
                                        <div className="error-message-aux">
                                            {content_error_description}
                                        </div>
                                    </div>
                                    {content_message}

                                    <div className="form_group_ form_group__">
                                        <button type="submit" onClick={handleSubmit}>Guardar</button>
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
