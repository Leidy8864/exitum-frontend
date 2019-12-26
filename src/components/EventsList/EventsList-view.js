
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
        <div className="w-100 events-list" id="events-list">
            {
                eventsList.length > 0 ?
                    eventsList.map(function (item) {
                        return (
                            <div className="col-xl-4 col-md-6 events-padding" key={item.id}>
                                <EventCard
                                    id={item.id}
                                    title={item.title}
                                    key={item.id}
                                    description={item.description}
                                    day={item.day}
                                    participants_count={item.participants_count}
                                    place={item.place}
                                    hour_start={item.hour_start}
                                    eventType={eventType}
                                    handleDeleteEvent={handleDeleteEvent}
                                    photo={item.photo}
                                />
                            </div>
                        )
                    })
                    :
                    
                    ''
            }
        </div>
    );
}
export default View;
