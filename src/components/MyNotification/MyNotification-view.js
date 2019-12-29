
import React from 'react';
import './style.css';

function View(props) {
    const{
        title,
        message
    } = props;
    return (
        <div className="myNotification">
            <img src={require('../../public/images/svg/demostration.svg')} width="60" alt="notificacion"/>           
            <div className="text-info-notification">
                <h4>{title}</h4>
                <p>{message}</p>
            </div>
        </div>
    );
}
export default View;
