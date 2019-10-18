import React, { Fragment } from 'react';
import Select from 'react-select';
import './style.css'

function View(props) {
    const {
        className,
        categoryOptions,
        stageOptions,
        handleSubmit,
        handleChange,
        handleSelectChange,
        content_error_name,
        content_error_category,
        content_error_stage,
        content_error_description,
        content_message
    } = props;
    return (
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="NewProjectModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="title_">
                                        Nuevo Proyecto
                                    </div>

                                    <div className="form_group_">
                                        <label>Nombre del Proyecto</label>
                                        <input name="name" onChange={handleChange} id="name_project" />
                                        <div className="error-message-aux">
                                            {content_error_name}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Seleccionar Rubro</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                name="category_id"
                                                options={categoryOptions}
                                                onChange={handleSelectChange}
                                                placeholder="Rubro..."
                                                id="category_id"
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {content_error_category}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Seleccionar Fase</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                name="stage_id"
                                                options={stageOptions}
                                                onChange={handleSelectChange}
                                                placeholder="Fase..."
                                                id="stage_id"
                                            />
                                        </Fragment>
                                        <div className="error-message-aux">
                                            {content_error_stage}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Descripción del proyecto</label>
                                        <textarea name="description" onChange={handleChange}  id="description"/>
                                        <div className="error-message-aux">
                                            {content_error_description}
                                        </div>
                                    </div>
                                    {content_message}

                                    <div className="form_group_ form_group__">
                                        <button type="button" onClick={handleSubmit}>Guardar</button>
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
