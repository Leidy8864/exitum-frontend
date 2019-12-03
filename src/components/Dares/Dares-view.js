
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import ModalDare from '../ModalDare/ModalDare-controller'
import './style.css';

function View(props) {

    const {
        challenges,
        idChallengues
    } = props
    console.log(challenges)
    return (
        <Fragment>
            <div className="container-fluid content-challenge">
            <div className="content-help">
                <h4>Emprendedores al rescate</h4>
                <p><strong>Verifica</strong> y <strong>Observa</strong> retos para conseguir más oportunidades de ser mejor</p>
                <div className="helps mt-4">
                    <li>Manda una observación de los pasos a seguir en cada reto.</li>
                    <li>Manda una verificación de los pasos a seguir en cada reto.</li>
                </div>
            </div>
            <div className="row content-challenges">
                
                {challenges && challenges.length > 0 ?
                    challenges.map(function (item, index) {
                        return (
                            <Fragment key={index}>
                                <div className="col-lg-6 col-xl-4">
                                    <div className="card card-challenge mb-3">
                                        <div className="contact-body">
                                            <div className="header-challenge text-center w-100 mt-3">
                                                <img alt="" width="100px" height="100px" className="img-challenge" src={item.user.photo} />
                                                <div className="name-contact mt-3">
                                                    <span className="contact ml-2">{item.user.name} {item.user.lastname}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="challenges text-center w-100">
                                            <span className="card-title-challenge mt-4 w-100">{item.tip.tip}</span>
                                        </div>
                                        <div className="btn-go-challenge mt-4 mb-3">
                                            <button 
                                                onClick={idChallengues.bind(this,item.id)}
                                                id={item.id} 
                                                data-toggle="modal" data-target="#modaldare" className="title-body mb-3">
                                                Ver reto</button>
                                        </div>
                                    </div>
                                </div>
                                <ModalDare />
                            </Fragment>
                        )
                    }) : null
                }
            </div>
            </div>
        </Fragment>
    );
}
export default View;