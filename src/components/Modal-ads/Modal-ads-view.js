import React, {Fragment} from 'react';
import Select from 'react-select';
import './style.css'

function View(props){
    const {
        className,
        proyectClassNamePrefix,
        AreaClassNamePrefix,
        skillClassNamePrefix,
        proyectPlaceholder,
        areaPlaceholder,
        skillPlaceholder,
        isDisabled,
        isLoading,
        isClearable,
        isRtl,
        isSearchable,
        proyectName,
        areaName,
        proyectsOptions,
        areaOptions,
        skillsOptions
    } = props;
    return(
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="AdsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="row">
                                    <div className="title_">
                                        Nuevo Anuncio
                                    </div>
                                    <div className="form_group_">
                                        <label>Seleccionar Proyecto</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                classNamePrefix={proyectClassNamePrefix}
                                                // placeholder = {proyectPlaceholder}
                                                // defaultValue={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isClearable={isClearable}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name={proyectName}
                                                options={proyectsOptions}
                                            />
                                        </Fragment>
                                    </div>
                                    <div className="form_group_">
                                        <label>Seleccionar Area</label>
                                        <Fragment>
                                            <Select
                                                className={className}
                                                classNamePrefix={AreaClassNamePrefix}
                                                // placeholder = {areaPlaceholder}
                                                // defaultValue={defaultValue}
                                                isDisabled={isDisabled}
                                                isLoading={isLoading}
                                                isClearable={isClearable}
                                                isRtl={isRtl}
                                                isSearchable={isSearchable}
                                                name={areaName}
                                                options={areaOptions}
                                            />
                                        </Fragment>
                                    </div>
                                    <div className="form_group_">
                                        <label>Titulo del Anuncio</label>
                                        <input/>
                                    </div>
                                    <div className="form_group_">
                                        <label>Aptitudes del perfil</label>
                                        <Fragment>
                                            <Select
                                                isMulti
                                                name="colors"
                                                options={skillsOptions}
                                                className="basic-multi-select"
                                                classNamePrefix={skillClassNamePrefix}
                                                // placeholder={skillPlaceholder}
                                            />
                                        </Fragment>
                                    </div>
                                    <div className="form_group_">
                                        <label>Descripción del proyecto</label>
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
