
import React from 'react';
import './style.css';

function View(props) {
    const {
        handleAssistEvent,
        event_id,
        isPart
    } = props
    return (
        <button className={!isPart ? 'btn-assist edit' : 'btn-no-assist edit'} onClick={handleAssistEvent.bind(this,event_id)}>
            {
                !isPart ?
                    "PARTICIPAR"
                    : "YA NO PARTICIPAR"
            }
        </button>
    );
}
export default View;
