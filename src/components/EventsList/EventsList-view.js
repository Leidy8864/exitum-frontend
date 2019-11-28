
import React from 'react';
import EventCard from '../EventCard/EventCard-controller'

import './style.css';

function View(props) {
    const {
        eventsList,
        eventType,
        handleDeleteEvent,
        handleAssistEvent
    } = props
    return (
        <div className="container" id="events-list">
            <div className="row">
                {
                    eventsList.length > 0 ?
                        eventsList.map(function (item) {
                            return (
                                <div className="col-sm-6 py-2" key={item.id}>
                                    <EventCard
                                        id={item.id}
                                        title={item.title}
                                        description={item.description}
                                        day={item.day}
                                        hour_start={item.hour_start}
                                        eventType={eventType}
                                        handleAssistEvent={handleAssistEvent}
                                        handleDeleteEvent={handleDeleteEvent}
                                        participants={item.toWorkshopUsers}
                                    />
                                </div>
                            )
                        })
                        :
                        <h4 className="text-center">No se encontraron eventos</h4>
                }
            </div>
        </div>
    );
}
export default View;
