
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import ModalDare from '../ModalDare/ModalDare-controller'
import moment from 'moment'
import './style.css';

function View(props) {

    const {
        challenges,
        idChallengues
    } = props
    console.log(challenges)
    return (
        <Fragment>
            <div className="content-help container-options">
                <div className="img-challenges">
                    <img src={require('../../public/images/svg/cohete.svg')} />
                </div>
                <div className="info-challenges-help">
                    <h4>Retos al rescate !</h4>
                    <p><strong>Verifica</strong> y <strong>Observa</strong> los retos para conseguir más oportunidades de que un emprendedor te elija como su impulsor favorito.</p>
                    <div className="helps">
                        <li>- Manda una observación de los pasos a seguir en cada reto.</li>
                        <li>- Manda una verificación de los pasos a seguir en cada reto.</li>
                    </div>
                </div>
            </div>
            <div className="row content-challenges mb-4">

                {challenges && challenges.length > 0 ?
                    challenges.map(function (item, index) {
                        return (
                            <Fragment key={index}>
                                <div className="col-md-6 col-xl-6 dares-padding">
                                    <div className="card profiles card-challenge mb-3">
                                        <div className="contact-body">
                                            <div className="header-challenge text-center w-100 mt-3">
                                                <img alt="" width="100px" height="100px" className="img-challenge" src={item.ownerChallenge.photo} />
                                                <div className="name-contact mt-3">
                                                    <span className="contact ml-2">{item.ownerChallenge.name} {item.ownerChallenge.lastname}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            item.startup ?

                                                <div className="challenges-dare text-center work-user-event">
                                                    <strong>{item.startup.name}</strong>
                                                    <span className="card-title-challenge"> - {item.tip.tip}</span>
                                                </div>

                                                : ''
                                        }
                                        {
                                            item.startup ?
                                                <div className="challenges-dare text-center description-textos ml-4">
                                                    <span id="text-puntos" className="card-title-challenge ">{item.startup.description}</span>
                                                </div>
                                                : ''
                                        }
                                        {
                                            item.startup ?
                                                <div className="challenges-dare text-center description-textos ml-4">
                                                    <span id="text-puntos" className="card-title-challenge">{moment(item.startup.created).format('ll')}</span>
                                                </div>
                                                : ''
                                        }

                                        <div className="stage text-center work-user-event">
                                            <strong className="card-title-challenge">{item.stage.stage}</strong>
                                        </div>
                                        <div className="btn-go-challenge mt-4 mb-3">
                                            <button
                                                onClick={idChallengues.bind(this, item.id)}
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
        </Fragment>
    );
}
export default View;
