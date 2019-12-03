
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import moment from 'moment';
import AssistButton from '../AssistButton/AssistButton-controller';

function View(props) {
    const {
        id,
        title,
        description,
        day,
        hour_start,
        eventType,
        handleDeleteEvent,
        isPart
    } = props;
    return (
        <div className="card card-body h-100">
            <div className="row">
                <Link to={"/events/" + id} className="title_add col-sm-9">{title}</Link>
                <div className="col-sm-3 images-icons">
                    {eventType === "my_events" ? <span className="ml-2"><Link className="trash-bg" to="#"><img className="trash-btn" src={require("../../public/images/svg/basura.svg")} alt="svg" width="23" id={id} onClick={handleDeleteEvent.bind(this, id)} /></Link></span>
                        :
                        <AssistButton
                            event_id={id}
                            isPart={isPart}
                        />
                    }
                </div>
            </div>
            <div className="row margin_botton_15">
                <span className="bold col-sm-12 d-inline-block text-truncate">{description}</span>
            </div>
            <div className="row">
                <span className="col-sm-6 bold">Fecha : {moment(day).format('DD/MM/YYYY')}</span>
                <span className="col-sm-6 bold">Hora : {hour_start}</span>
            </div>
        </div>
    );
}
export default View;
