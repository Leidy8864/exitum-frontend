
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function View(props) {
    const {
        id,
        title,
        description,
        day,
        hour_start,
        eventType,
        handleDeleteEvent,
        handleAssistEvent
    } = props;
    return (
        <Fragment>
            {eventType === "my_events" ?
                <div className="card events-card h-100 p-4">
                    <div className="row">
                        <Link to="" className="title_add col-sm-9">{title}</Link>
                        <div className="col-sm-3 images-icons">
                            <i className="far fa-trash-alt" onClick={handleDeleteEvent.bind(this, id)}></i>
                        </div>
                    </div>
                    <div className="row margin_botton_15">
                        <span className="gray col-sm-12 d-inline-block mt-3">{description}</span>
                    </div>
                    <div className="row">
                        <span className="col-sm-6 gray">Fecha : {day}</span>
                        <span className="col-sm-6 gray">Hora : {hour_start}</span>
                    </div>
                </div> : null
            }
            {eventType === "events" ?
                <div className="card card-body events-card-2 h-100">
                    <div className="row">
                        <Link to="" className="title_add col-sm-9">{title}</Link>
                        <div className="col-sm-3 images-icons">
                            <i className="fas fa-clipboard-check" onClick={handleAssistEvent.bind(this, id)}></i>
                        </div>
                    </div>
                    <div className="row margin_botton_15">
                        <span className="gray col-sm-12 d-inline-block mt-3">{description}</span>
                    </div>
                    <div className="row">
                        <span className="col-sm-6 gray">Fecha : {day}</span>
                        <span className="col-sm-6 gray">Hora : {hour_start}</span>
                    </div>
                </div> : null 
            }
            {eventType === "events_assist" ?
                <div className="card card-body events-card-3 h-100">
                    <div className="row">
                        <Link to="" className="title_add col-sm-9">{title}</Link>
                        <div className="col-sm-3 images-icons">
                            <i className="far fa-calendar-times" onClick={handleAssistEvent.bind(this, id)}></i>
                        </div>
                    </div>
                    <div className="row margin_botton_15">
                        <span className="gray col-sm-12 d-inline-block mt-3">{description}</span>
                    </div>
                    <div className="row">
                        <span className="col-sm-6 gray">Fecha : {day}</span>
                        <span className="col-sm-6 gray">Hora : {hour_start}</span>
                    </div>
                </div> : null 
            }
        </Fragment>
        // <div className="card card-body events-card h-100">
        //     <div className="row">
        //         <Link to="" className="title_add col-sm-9">{title}</Link>
        //         <div className="col-sm-3 images-icons">
        //             {eventType === "my_events" ? <i className="far fa-trash-alt" onClick={handleDeleteEvent.bind(this, id)}></i>
        //                 :
        //                 eventType === "events" ?
        //                     <button className="btn-assist" onClick={handleAssistEvent.bind(this, id)}>Asistiré</button>
        //                     : <button className="btn-no-assist" onClick={handleAssistEvent.bind(this, id)}>Cancelar</button>
        //             }
        //         </div>
        //     </div>
        //     {/* <Link className="row  col-sm-12" to="" data-toggle="modal" data-target="#adDetail" onClick={handleSetAdId.bind(this, item.id)}>{title}</Link> */}
        //     <div className="row margin_botton_15">
        //         <span className="gray col-sm-12 d-inline-block mt-3">{description}</span>
        //     </div>
        //     <div className="row">
        //         <span className="col-sm-6 gray">Fecha : {day}</span>
        //         <span className="col-sm-6 gray">Hora : {hour_start}</span>
        //     </div>
        // </div>
    );
}
export default View;
