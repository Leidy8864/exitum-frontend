
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
        <div className="AdDetail">
            <Fragment>
                <div className="modal fade" id="adDetail" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="justify-content-center px-3 py-3">
                                    <div className="text-center mt-4">
                                        <h3><strong className="title-detail">{advertisement.title}</strong></h3>
                                    </div>
                                    <div className="adjust-text mt-5">
                                        <span className="title-company">Descripción </span>
                                        <span className="bold">{advertisement.description}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group mt-4">
                                            <span className="title-company">Proyecto </span>
                                            <span className="bold">{advertisement.startup.name}</span>
                                        </div>
                                        <div className="form-group mt-4">
                                            <span className="title-company">Area </span>
                                            <span className="bold">{advertisement.area.name}</span>
                                        </div>
                                        <div className="form-group mt-4">
                                            <span className="title-company">Publicado</span>
                                            <span className="bold">Hace {moment(advertisement.created_at).days()} días</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <span className="title-company">Habilidades : </span>

                                        <ul className="tags">
                                            {
                                                advertisement.skills.map(function (item, index) {
                                                    return (
                                                        <li key={index}><a href="#" className="tag">-{item.skill}</a></li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </div>
                                    {content_message}
                                    {
                                        adType === "coincidence" ?
                                            <div className="mb-3 text-center">
                                                <button type="submit" onClick={handleClick} className="btn btn-primary px-5">Postular</button>
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
