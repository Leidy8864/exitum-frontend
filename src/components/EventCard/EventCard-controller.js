
import React from 'react';
import View from './EventCard-view';

class EventCard extends React.Component {
    render() {
        const {
            id,
            title,
            description,
            day,
            hour_start,
            eventType,
            handleDeleteEvent,
            handleAssistEvent
        } = this.props;

        var isPart = true;
        if (eventType !== "my_events" && eventType === "events") {
            isPart = false
        }
        return (
            <View
                id={id}
                title={title}
                description={description}
                day={day}
                isPart={isPart}
                hour_start={hour_start}
                eventType={eventType}
                handleDeleteEvent={handleDeleteEvent}
                handleAssistEvent={handleAssistEvent}
            />
        );
    }
}
export default EventCard;
