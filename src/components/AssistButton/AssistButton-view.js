
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
                    "Me interesa"
                    : "Ya no me interesa"
            }
        </button>
    );
}
export default View;
