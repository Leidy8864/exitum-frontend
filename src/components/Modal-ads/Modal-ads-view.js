import React, { Fragment } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import './style.css'

function View(props) {
    const {
        className,
        proyectClassNamePrefix,
        AreaClassNamePrefix,
        skillClassNamePrefix,
        isDisabled,
        isLoading,
        isRtl,
        isSearchable,
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
        areaSelected,
        startupSelected,
        skillsSelected,
        description,
        title,
        advertisement_id

    } = props;
    return (
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="AdsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header adds">
                                <h6 className="modal-title">{advertisement_id ? 'Editar Anuncio' : 'Nuevo Anuncio'}</h6>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mt-3">
                                        <label>Seleccionar Proyecto</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                classNamePrefix={proyectClassNamePrefix}
                                                value={startupSelected ? startupSelected : ''}
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

                                    <div className="form_group_ mt-3">
                                        <label>Seleccionar Area</label>
                                        <Select
                                            className={className}
                                            classNamePrefix={AreaClassNamePrefix}
                                            value={areaSelected ? areaSelected : ''}
                                            isDisabled={isDisabled}
                                            isLoading={isLoading}
                                            isRtl={isRtl}
                                            isSearchable={isSearchable}
                                            name="area_id"
                                            options={areaOptions}
                                            onChange={handleSelectChange}
                                        />
                                        <div className="error-message-aux">
                                            {content_error_area}
                                        </div>
                                    </div>
                                    <div className="form_group_ mt-3">
                                        <label>Titulo del Anuncio</label>
                                        <input name="title" className="form-control" onChange={handleChange} id="title"
                                            value={title}
                                        />
                                        <div className="error-message-aux">
                                            {content_error_title}
                                        </div>
                                    </div>
                                    <div className="form_group_ select mt-3">
                                        <label>Aptitudes del perfil</label>
                                        <Fragment>
                                            <CreatableSelect
                                                isMulti
                                                value={skillsSelected ? skillsSelected : ''}
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
                                    <div className="form_group_ mt-3">
                                        <label>Descripción del anuncio</label>
                                        <textarea type="text" name="description" onChange={handleChange} id="description"
                                            value={description}
                                            className="form-control"

                                        />
                                        <div className="error-message-aux">
                                            {content_error_description}
                                        </div>
                                    </div>
                                    {content_message}
                                    <div className="d-flex justify-content-end mb-3 mt-3 ">
                                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Guardar</button>
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
