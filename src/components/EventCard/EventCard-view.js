
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
        place,
        eventType,
        handleDeleteEvent,
        isPart
    } = props;
    return (
        <div className="card events mb-1">
            <div className="card-header">
                <img className="w-100" src="https://www.expertosdecomputadoras.com/wp-content/uploads/2012/03/como%20hacer%20una%20copia%20de%20seguridad%20en%20mac%20sin%20usar%20time%20machine1.jpg" />
            </div>
            <div className="card-body events">
                <div className="d-flex header-events">
                    <Link to={"/events/" + id} className="title_add col-sm-8">{title}
                    </Link>
                    <div className="">
                        <span className="gray">{moment(day).format('ll')}</span>
                    </div>
                </div>
                <div className="mt-2">
                    <span className="gray col-sm-12 d-inline-block text-truncate">{description}</span>
                </div>

                <i className="ml-3 fas fa-map-marker-alt"></i><span className="col-sm-12 gray">{place}</span>
            </div>
            {eventType === "my_events" ?
                <div className="card-body events-footer-delete text-center">
                    <Link className="edit-icon" to="#" id={id} onClick={handleDeleteEvent.bind(this, id)}>Eliminar evento</Link>

                </div> :
                <div className="card-body events-footer text-center">
                    <AssistButton
                        event_id={id}
                        isPart={isPart}
                    />
                </div>
            }
        </div>
    );
}
export default View;
