
import React from 'react';
import View from './EventCard-view';
import moment from 'moment';

class EventCard extends React.Component {
    render() {
        let {
            id,
            title,
            description,
            day,
            photo,
            place,
            hour_start,
            participants_count,
            eventType,
            handleDeleteEvent,
            handleAssistEvent,
            date_publicacion
        } = this.props;

        var isPart = true;
        if (eventType !== "my_events" && eventType === "events") {
            isPart = false
        }
        date_publicacion = moment(date_publicacion);
        var today = moment();
        var published = today.diff(date_publicacion, 'days') == 0 ? 'Publicado hoy': 'publicado hace '+ today.diff(date_publicacion, 'days') + ' días';

        return (
            <View
                id={id}
                title={title}
                description={description}
                day={day}
                photo = {photo}
                place={place}
                isPart={isPart}
                participants_count = {participants_count}
                published = {published}
                hour_start={hour_start}
                eventType={eventType}
                handleDeleteEvent={handleDeleteEvent}
                handleAssistEvent={handleAssistEvent}
            />
        );
    }
}
export default EventCard;
