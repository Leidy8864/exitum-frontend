
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
            handleAssistEvent,
            participants
        } = this.props;

            // if (participants) {
            //     const state = participants.find(user => user.id === 12);

            //     console.log("STATE",state);
                
            // }
            
        return (
            <View
                id={id}
                title={title}
                description={description}
                day={day}
                hour_start={hour_start}
                eventType={eventType}
                handleDeleteEvent={handleDeleteEvent}
                handleAssistEvent={handleAssistEvent}
            />
        );
    }
}
export default EventCard;
