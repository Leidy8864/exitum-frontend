
import React from 'react';
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
        <div className="card card-body h-100">
            <div className="row">
                <Link to="" className="title_add col-sm-9">{title}</Link>
                <div className="col-sm-3 images-icons">
                    {eventType === "my_events" ? <span className="ml-2"><Link className="trash-bg" to="#"><img className="trash-btn" src={require("../../public/images/svg/basura.svg")} alt="svg" width="23" id={id} onClick={handleDeleteEvent.bind(this, id)} /></Link></span>
                        :
                        eventType === "events" ?
                            <button className="btn-assist" onClick={handleAssistEvent.bind(this, id)}>Asistiré</button>
                            : <button className="btn-no-assist" onClick={handleAssistEvent.bind(this, id)}>Cancelar</button>
                    }
                </div>
            </div>
            {/* <Link className="row  col-sm-12" to="" data-toggle="modal" data-target="#adDetail" onClick={handleSetAdId.bind(this, item.id)}>{title}</Link> */}
            <div className="row margin_botton_15">
                <span className="bold col-sm-12 d-inline-block text-truncate">{description}</span>
            </div>
            <div className="row">
                <span className="col-sm-6 bold">Fecha : {day}</span>
                <span className="col-sm-6 bold">Hora : {hour_start}</span>
            </div>
        </div>
    );
}
export default View;
