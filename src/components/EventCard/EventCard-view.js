
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
        photo,
        participants_count,
        hour_start,
        place,
        eventType,
        handleDeleteEvent,
        isPart,
        published
    } = props;
    return (
        <div className="card mb-4 events">
            <div className="card-header">
                <img className="card-header-img" src={photo || require('../../public/img/ssssss.png')} />
            </div>
            <div className="card-body events">
                <div className="d-flex header-events">
                    <Link to={"/events/" + id} className="title_add_event col-sm-9 ">{title}
                    </Link>
                </div>
                <div className="mt-2 flex-count">
                    <span className="gray">{moment(day).format('ll')}</span>
                    <span className="gray">{hour_start}</span>
                </div>
                <div className="mt-2">
                    <span className="gray col-sm-12 d-inline-block text-truncate">{description}</span>
                </div>

                <div className="mt-2">
                    <span className="gray col-sm-12 d-inline-block text-truncate">{place}</span>
                </div>
                <div className="mt-2 flex-count">
                    {/* <span className="gray">{participants_count}</span> */}
                    <span className="gray">{"Gratis"}</span>
                    <span className="gray">{published}</span>
                </div>
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
