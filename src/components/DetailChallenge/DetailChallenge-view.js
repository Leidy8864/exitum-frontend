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
                            <div className="container">
                                <div className="row">
                                    <div className="title_">
                                        {challenge.title}
                                    </div>
                                    <div className="container_challenge_tabs">
                                        <ul className="nav nav-pills" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className={active ? 'nav-link px-4 active' : 'nav-link px-4'} id="active-tab" data-toggle="tab" href="#reto" role="tab" aria-controls="active" aria-selected="true">RETO</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={!active ? 'nav-link px-4 active' : 'nav-link px-4'} id="closed-tab" data-toggle="tab" href="#howto" role="tab" aria-controls="closed" aria-selected="false" onClick={handleGetSummary}>COMO LO HICIERON</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content content_challenge" id="myTabContent">
                                        <div className={active ? 'tab-pane fade show active' : 'tab-pane fade show'} id="reto" role="tabpanel" aria-labelledby="active-tab">
                                            <div className="row_detail">
                                                <div className="subtitle_ mt-5">
                                                    Descripción del reto
                                                </div>
                                                <div className="description_">
                                                    {challenge.description}
                                                </div>
                                                {
                                                    challenge.files.length >= 1 ?
                                                        <div>

                                                            <div className="subtitle_">
                                                                Archivos para descargar
                                                        </div>
                                                            <div className="downloads_container">
                                                                {

                                                                    challenge.files.map((item, index) =>
                                                                        <div key={index} className="downloads_ mb-4">

                                                                            <a className="text-file" name={item.name} href="#" onClick={handleDownload.bind(this, item.name)}>
                                                                                {item.name}
                                                                            </a>
                                                                            <img src={require('../../public/images/svg/flecha-hacia-abajo.svg')} onClick={handleDownload.bind(this, item.name)} />
                                                                        </div>
                                                                    )
                                                                }

                                                            </div>
                                                        </div>
                                                        : ''
                                                }

                                                <div className="subtitle_">
                                                    Respuesta al reto planteado
                                                </div>
                                                <div className="response_1 ">
                                                    <textarea name="reply" onChange={handleChange} value={reply ? reply : ''} disabled={challenge.status === "Verificado" ? 'disabled' : ''}></textarea>
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

                                                                            <a className="text-file" name={item.name} href="#" onClick={handleDownload.bind(this, item.name)} key={index}>
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

                                                            <div className="subtitle_">
                                                                Subir archivos
                                                            </div>
                                                            <div className="">
                                                                <input id="choose_files" type="file" name="file" onChange={handleInputFileChange} />
                                                            </div>
                                                            {content_message}
                                                            <div className="form_group_ form_group__">
                                                                <button type="button" onClick={handleClick}>Completar reto</button>
                                                            </div>
                                                        </div>
                                                        : ''
                                                }
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" className={!active ? 'tab-pane fade show active' : 'tab-pane fade'} id="howto" role="tabpanel" aria-labelledby="closed-tab" >
                                            <div className="summary-list">

                                            {
                                                summary.length > 0 ?

                                                summary.map((item, index) =>
                                                    <div className="row_detail mt-4" key={index}>
                                                        <div className="mb-3">
                                                            <div className="media">
                                                                <img src={item.user.photo || 'https://www.w3schools.com/howto/img_avatar.png'} className="image-user mr-3" alt="..." />
                                                                <h5 className="mt-0 font-weight-bold">{item.user.name + ' ' + item.user.lastname}</h5>
                                                            </div>
                                                            <div className="description_">
                                                                {item.reply}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                : 
                                                <p className="text-center mt-5">No se encontraron resultados</p>
                                            }
                                            </div>
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
