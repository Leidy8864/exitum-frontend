
import React, { Fragment } from 'react';
import './style.css';

function View(props) {

    const {
        appointments
    } = props
    console.log(appointments)
    return (
        <div className="appointments">
            <h4>Recordatorios</h4>
            {
                appointments && appointments.length > 0 ? 
                appointments.map(function(item, index){
                    return(
                        <Fragment key={index}>
                            <div className="reminders mb-3">
                                <div className="date-reminder">
                                    <strong><i class="far fa-calendar-alt mr-2"></i>Fecha:</strong><p>{item.date}</p>
                                </div>
                                <div className="title-reminder">
                                    <strong><i class="far fa-bell mr-2"></i>Titulo:</strong><p>Programacion Web</p>
                                </div>
                                <div className="description-reminder">
                                    <strong><i class="far fa-clock mr-2"></i>Hora:</strong><p>{item.time}</p>
                                </div>
                                <div className="description-reminder">
                                    <strong><i class="far fa-newspaper mr-2"></i>Descripcion:</strong><p>{item.description}</p>
                                </div>
                            </div>
                        </Fragment>
                    )
                }) : null
            }
        </div>
    );
}
export default View;
