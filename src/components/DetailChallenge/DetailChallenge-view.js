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
        content_error_reply
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
                                                <a className="nav-link px-4 active" id="active-tab" data-toggle="tab" href="#reto" role="tab" aria-controls="active" aria-selected="true">RETO</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-4" id="closed-tab" data-toggle="tab" href="#howto" role="tab" aria-controls="closed" aria-selected="false">COMO LO HICIERON</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content content_challenge" id="myTabContent">
                                        <div className="tab-pane fade show active" id="reto" role="tabpanel" aria-labelledby="active-tab">
                                            <div className="row_detail">
                                                <div className="subtitle_">
                                                    Descripción del reto
                                                </div>
                                                <div className="description_ text-justify">
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
                                                                        <div key={index}>
                                                                            <a className="downloads_" name={item.name} href="#" onClick={handleDownload}>{item.name}</a><img src={require('../../public/images/svg/flecha-hacia-abajo.svg')} />
                                                                            <br />
                                                                            <br />
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
                                                    <textarea name="reply" onChange={handleChange}></textarea>
                                                    <div className="error-message-aux">
                                                        {content_error_reply}
                                                    </div>
                                                </div>
                                                <div className="subtitle_">
                                                    Subir archivos
                                                </div>
                                                <div className="">
                                                    {/* <label id="texto" htmlFor="choose_files">Subir archivos</label> */}
                                                    {/* <img src={require('../../public/images/svg/boton-de-eliminacion-del-contenedor-de-basura.svg')} /> */}
                                                    <input id="choose_files" type="file" name="file" onChange={handleInputFileChange} />
                                                </div>
                                                {content_message}

                                                <div className="form_group_ form_group__">
                                                    <button type="button" onClick={handleClick}>Completar reto</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="howto" role="tabpanel" aria-labelledby="closed-tab">
                                            <div className="row_detail">
                                                how to
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
