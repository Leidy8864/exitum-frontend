
import React, { Fragment } from 'react';
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
        <div className="card all-card h-100">
            <div className="card-header d-flex">
                <Link to={"/events/" + id} className="title_add col-sm-9">{title}</Link>
                <div className="col-sm-3 images-icons">
                    {eventType === "my_events" ? <Link className="edit-icon" to="#"><i className="mt-1 fas fa-trash" id={id} onClick={handleDeleteEvent.bind(this, id)}></i></Link>
                        :
                        <AssistButton
                            event_id={id}
                            isPart={isPart}
                        />
                    }
                </div>
            </div>
            <div className="card-body">
            <div className="margin_botton_15">
                <span className="gray col-sm-12 d-inline-block text-truncate">{description}</span>
            </div>
            <div className="">
                <span className="col-sm-6 gray">Fecha : {moment(day).format('DD/MM/YYYY')}</span>
                <span className="col-sm-6 gray">Hora : {hour_start}</span>
            </div>
            </div>
        </div>
    );
}
export default View;
