
import React from 'react';
import './style.css';

function View(props) {
    const{
        title,
        message
    } = props;
    return (
        <div className="myNotification p-2">
            <img src={require('../../public/img/chikorita.png')} width="100px" alt="notificacion"/>           
            <div className="text-info-notification">
                <h4>{title}</h4>
                <p>{message}</p>
            </div>
        </div>
    );
}
export default View;
