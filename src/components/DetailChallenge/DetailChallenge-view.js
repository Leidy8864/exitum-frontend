import React, {Fragment} from 'react';
import './style.css';

function View(){
    return(
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="detailCHallengeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="row">
                                    <div className="title_">
                                        Realizar el model Business Canvas
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
                                                <div className="description_">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor id est quis gravida. Phasellus molestie feugiat aliquam. Vivamus semper elit nec nunc cursus pulvinar. Vestibulum quis pretium ipsum. Duis in purus at erat molestie fermentum non non turpis. Etiam quis lectus sit amet tellus tempus condimentum. Suspendisse eu sem vel lacus imperdiet tincidunt quis eget justo. Integer ac ante ultrices, eleifend nibh sit amet, venenatis nunc. 
                                                </div>
                                                <div className="subtitle_">
                                                    Archivos para descargar
                                                </div>
                                                <div className="downloads_container">
                                                    <a className="downloads_" href="">Coffee.docx</a>
                                                    <a className="downloads_" href="">Tea.docx</a>
                                                    <a className="downloads_" href="">Milk.docx</a>

                                                </div>
                                                <div className="subtitle_">
                                                    Respuesta al reto planteado
                                                </div>
                                                <div className="response_ ">
                                                    <textarea></textarea>
                                                </div>
                                                <div className="subtitle_">
                                                    Subir archivos
                                                </div>
                                                <div className="response_ ">
                                                    <input type="file"></input>
                                                </div>
                                                <div className="form_group_ form_group__">
                                                    <button type="button">completar reto</button>
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
