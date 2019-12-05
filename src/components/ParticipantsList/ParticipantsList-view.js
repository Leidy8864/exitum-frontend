
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {
    const {
        participants,
        user_id
    } = props
    return (
        <div className="container-fluid" id="list-participants">

            <div className="row">
                {
                    participants.length > 0 ?
                        participants.map(function (item, index) {
                            return (
                                <div className="col-sm-3 mb-4" key={index}>
                                    <div className="card">
                                        <img src={item.photo || 'https://www.w3schools.com/howto/img_avatar.png'} className="image-employee mx-auto d-block mt-2" alt="..." />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">{item.fullname}</h6>
                                            <Link to={user_id === item.id ? "/my-profile" : "/profile/" + item.id} className="btn btn-primary">Ver perfil</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h6 className="text-center">No se encontraron participantes</h6>
                }
            </div>
        </div>
    );
}
export default View;
