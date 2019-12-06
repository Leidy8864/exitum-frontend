
import React from 'react';
import './style.css';

function View(props) {
    const {
        handleAssistEvent,
        event_id,
        isPart
    } = props
    return (
        <button className={!isPart ? 'btn-assist' : 'btn-no-assist'} onClick={handleAssistEvent.bind(this,event_id)}>
            {
                !isPart ?
                    <i className="fas fa-hands-helping"></i>
                    : <i className="far fa-calendar-times"></i>
            }
        </button>
    );
}
export default View;
