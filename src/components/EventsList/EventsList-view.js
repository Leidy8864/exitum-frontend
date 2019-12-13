
import React from 'react';
import EventCard from '../EventCard/EventCard-controller'

import './style.css';

function View(props) {
    const {
        eventsList,
        eventType,
        handleDeleteEvent
    } = props

    console.log(eventsList)

    return (
        <div className="w-100 events-list" id="events-list">
                {
                    eventsList.length > 0 ?
                        eventsList.map(function (item) {
                            return (
                                <div className="col-md-4 mb-3 events-padding" key={item.id}>
                                    <EventCard
                                        id={item.id}
                                        title={item.title}
                                        key={item.id}
                                        description={item.description}
                                        day={item.day}
                                        place= {item.place}
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
    );
}
export default View;
