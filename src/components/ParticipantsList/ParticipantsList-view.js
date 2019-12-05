
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {
    const {
        participants,
        user_id,
        redirectProfile
    } = props
    return (
        <div className="container-fluid" id="list-participants">

            <div className="row">
                {
                    participants.length > 0 ?
                        participants.map(function (item, index) {
                            return (
                                <div className="col-md-4 col-xl-3 col-xs-2 mb-4" key={index}>
                                    <div className="card list-persons">
                                        <img src={item.photo || 'https://www.w3schools.com/howto/img_avatar.png'} className="image-employee mx-auto d-block mt-2" alt="..." />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">{item.fullname}</h6>
                                            <div className="mt-4 mb-2">
                                                <Link to={user_id === item.id ? "/my-profile" : "/profile/" + item.id} className="see-perfil" onClick={redirectProfile}>Ver perfil</Link>
                                                <p>{item.user_workshop.status === "ACCEPTED" ? "Aceptado" : item.user_workshop.status === "PENDING" ? "En lista de espera" : "Rechazado"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h5 className="text-center none-persons">No se encontraron participantes</h5>
                }
            </div>
        </div>
    );
}
export default View;
