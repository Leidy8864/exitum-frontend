
import React from 'react';
import EventCard from '../EventCard/EventCard-controller'

import './style.css';

function View(props) {
    const {
        eventsList,
        eventType,
        handleDeleteEvent
    } = props
    return (
        <div className="container">
            <div className="row">
                {
                    eventsList.length > 0 ?
                        eventsList.map(function (item) {
                            return (
                                <div className="col-sm-6 md-py-2 mb-4 lg-mb-3 md-mb-3" key={item.id}>
                                    <EventCard
                                        id={item.id}
                                        title={item.title}
                                        description={item.description}
                                        day={item.day}
                                        hour_start={item.hour_start}
                                        eventType={eventType}
                                        handleDeleteEvent={handleDeleteEvent}
                                    />
                                </div>
                            )
                        })
                        :
                        <h4 className="text-center no-events ml-3">No se encontraron eventos</h4>
                }
            </div>
        </div>
    );
}
export default View;
