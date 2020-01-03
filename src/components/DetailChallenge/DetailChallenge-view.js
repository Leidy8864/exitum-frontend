import React, { Fragment } from 'react';
import './style.css';

function View(props) {
    const {
        challenge,
        handleClick,
        handleInputFileChange,
        handleChange,
        content_message,
        handleDownload,
        content_error_reply,
        handledDeleteFile,
        reply,
        handleGetSummary,
        summary,
        active
    } = props
    return (
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="detailCHallengeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header adds">
                                <h6 className="modal-title" id="exampleModalLabel">{challenge.title}</h6>
                            </div>
                            <div className="d-flex justify-content-between mt-4 pl-4">
                                <ul className="nav nav-pills" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className={active ? 'nav-link px-3 active' : 'nav-link px-3'} id="active-tab" data-toggle="tab" href="#reto" role="tab" aria-controls="active" aria-selected="true">Reto</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={!active ? 'nav-link px-3 active' : 'nav-link px-3'} id="closed-tab" data-toggle="tab" href="#howto" role="tab" aria-controls="closed" aria-selected="false" onClick={handleGetSummary}>Como lo hicieron</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content modal-body pl-4 pr-4 pb-4 mt-2" id="myTabContent">
                                <div className={active ? 'tab-pane fade show active' : 'tab-pane fade show'} id="reto" role="tabpanel" aria-labelledby="active-tab">
                                    <div className="form_group_ ">
                                        <label>Descripción del reto</label>
                                        <span className="gray">{challenge.description}</span>
                                    </div>
                                    {
                                        challenge.files.length >= 1 ?
                                            <div>
                                                <div className="form_group_ mt-3">
                                                    <label>Archivos para descargar</label>
                                                </div>
                                                <div className="downloads_container row p-3">
                                                    {

                                                        challenge.files.map((item, index) =>
                                                            <div key={index} className="downloads_ mb-2">

                                                                <a className="text-file" name={item.name} href="#" onClick={handleDownload.bind(this, item.key_s3)}>
                                                                    {item.name}
                                                                </a>
                                                                <i className="far fa-arrow-alt-circle-down"></i>
                                                            </div>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                            : ''
                                    }
                                    {
                                        challenge.comment ?
                                            <div className="form_group_ ">
                                                <label>Última observación recibida</label>
                                                <span className="gray">{challenge.comment}</span>
                                            </div> : ''
                                    }
                                    <div className="form_group_ mt-3">
                                        <label>Respuesta al reto planteado</label>
                                        <textarea name="reply" className="form-control" onChange={handleChange} value={reply ? reply : ''} disabled={challenge.status === "Verificado" ? 'disabled' : ''}></textarea>
                                        <div className="error-message-aux">
                                            {content_error_reply}
                                        </div>
                                    </div>
                                    {
                                        challenge.uploaded_files.length >= 1 ?
                                            <div>

                                                <div className="subtitle_">
                                                    Archivos subidos
                                                        </div>
                                                <div className="downloads_container">
                                                    {challenge.uploaded_files.map((item, index) =>
                                                        <div key={index} className="my-files">
                                                            <div className="downloads_">

                                                                <a className="text-file" name={item.name} href="#" onClick={handleDownload.bind(this, item.key_s3)} key={index}>
                                                                    {item.name}
                                                                </a>
                                                                <img src={require('../../public/images/svg/flecha-hacia-abajo.svg')} />
                                                            </div>
                                                            {
                                                                challenge.status !== "Verificado" ?
                                                                    <img src={require('../../public/images/svg/boton-de-eliminacion-del-contenedor-de-basura.svg')} onClick={handledDeleteFile.bind(this, item.key_s3)} /> : ''
                                                            }

                                                        </div>
                                                    )
                                                    }
                                                </div>
                                            </div>
                                            : ''
                                    }
                                    {
                                        challenge.status !== "Verificado" ?
                                            <div>

                                                <div className="form_group_">
                                                    <label>Subir archivos</label>
                                                    <input id="choose_files" className="form-control" type="file" name="file" onChange={handleInputFileChange} />
                                                </div>
                                                {content_message}
                                                <div className="form_group_ mt-4">
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button" className="btn btn-primary" onClick={handleClick}>Completar reto</button>
                                                    </div>
                                                </div>
                                            </div>
                                            : ''
                                    }
                                </div>
                                <div className="tab-pane fade" className={!active ? 'tab-pane fade show active' : 'tab-pane fade'} id="howto" role="tabpanel" aria-labelledby="closed-tab" >
                                    <div className="summary-list">
                                        {
                                            summary.length > 0 ?

                                                summary.map((item, index) =>
                                                    
                                                    <div className="row_detail mt-4" key={index}>
                                                        <hr className="w-100"/>
                                                        <div className="mb-3">
                                                            <div className="media">
                                                                <img src={item.ownerChallenge.photo || 'https://www.w3schools.com/howto/img_avatar.png'} className="image-user mr-3" alt="..." />
                                                                <h6 className="mt-0 font-weight-bold">{item.ownerChallenge.name + ' ' + item.ownerChallenge.lastname}</h6>
                                                            </div>
                                                            <div className="description_">
                                                                <p className="padding-detail">{item.reply}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                :
                                                <span className="text-center gray mt-5">No se encontraron resultados</span>
                                        }
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
