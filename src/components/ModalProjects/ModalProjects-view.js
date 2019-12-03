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
        content_message,
        stageDescription
    } = props;
    return (
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="NewProjectModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header adds">
                                <h6 className="modal-title" id="exampleModalLabel">Nuevo Proyecto</h6>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form_group_">
                                        <label>Nombre del Proyecto</label>
                                        <input name="name" className="form-control" onChange={handleChange} id="name_project" />
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
                                            {
                                                stageDescription ?
                                                    <div>
                                                        <span><img className="idea-img" src={require("../../public/images/svg/idea.svg")} alt="svg" width="30" /></span>
                                                        <h6 className="text-secondary">{stageDescription}</h6>
                                                    </div>
                                                    : ''
                                            }
                                            {content_error_stage}
                                        </div>
                                    </div>
                                    <div className="form_group_">
                                        <label>Descripción del proyecto</label>
                                        <textarea name="description" className="form-control" onChange={handleChange} id="description" />
                                        <div className="error-message-aux">
                                            {content_error_description}
                                        </div>
                                    </div>
                                    {content_message}

                                    <div className="modal-footer adds mt-4">
                                        <button className="adds" type="button" onClick={handleSubmit}>Guardar</button>
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
