
import React, { Fragment } from 'react';
import './style.css';
import moment from 'moment';
function View(props) {
    const {
        adType,
        advertisement,
        handleClick,
        content_message
    } = props
    return (
        <div className="">
            <Fragment>
                <div className="modal fade" id="adDetail" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content px-3">
                            <div className="container">
                                <div className="justify-content-center">
                                    <div className="text-center mt-4">
                                        <h3><strong>{advertisement.title}</strong></h3>
                                    </div>

                                    <div class="form-group mt-3">
                                        <strong>Descripción : </strong>
                                        <p className="text-justify">{advertisement.description}</p>
                                    </div>
                                    <div class="form-group ">
                                        <strong>Proyecto : </strong>
                                        {advertisement.startup.name}
                                    </div>
                                    <div class="form-group">
                                        <strong>Area : </strong>
                                        {advertisement.area.name}
                                    </div>
                                    <div class="form-group">
                                        <strong>Publicado : </strong>
                                        Hace {moment(advertisement.created_at).days()} días
                                    </div>
                                    <div className="form-group">
                                        <strong>Habilidades : </strong>

                                        <ul className="tags">
                                        {
                                            advertisement.skills.map(function (item, index) {
                                                return (
                                                    <li><a href="#" class="tag" key={index}>{item.skill}</a></li>
                                                )
                                                
                                            })
                                        }
                                        </ul>
                                    </div>
                                    {content_message}
                                    {
                                        adType === "coincidence" ?
                                        <div className="mb-3 text-center">
                                            <button type="submit" onClick={handleClick} className="btn btn-primary btn-lg px-5">Postular</button>
                                        </div> : ""

                                    }
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
