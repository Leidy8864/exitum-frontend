import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import DetailChallenge from '../DetailChallenge/DetailChallenge-controller'
import './style.css';

function View(props) {
    const {
        blockChallenge,
        handleClick,
        mostrarImagen,
        project
    } = props

    return (
        <Fragment>
            <div className="">
                {
                    !mostrarImagen ?
                        <div className="complete-challenge">
                            <img src={require('../../public/images/svg/el-planeta-tierra.svg')} />
                            <div className="welcome-challenge">
                                {
                                    project.name ?

                                        <div>
                                            <h3>{project.name}</h3>
                                            <p>Creado : {project.created}</p>
                                            <p>{project.description}</p>
                                        </div>
                                        :
                                        <div>
                                            <h2>Bienvenido a los retos</h2>
                                            <p>Completa cada reto para poder más probabilidad de tener éxito, mientras avanzas, tu planta crecerá tambien.</p>

                                        </div>
                                }

                            </div>
                        </div>
                        : ''
                }

                {
                    blockChallenge.length >= 1 ?
                        blockChallenge.map((dt, index) =>
                            <div className="challenges-hc mt-3" key={index}>
                                <div className="">
                                    <Link className="signin" to="" data-toggle="modal" data-target="#detailCHallengeModal" key={"project" + index}>
                                        <div
                                            className={dt.status === "completado" ? "challenge_complete" : "challenge"}

                                            id={dt.id}
                                            onClick={handleClick.bind(this, dt.tip_id)}
                                        >
                                            <p>{dt.title}</p>
                                            <span>{dt.status}</span>
                                        </div>
                                    </Link>
                                </div>
                                <DetailChallenge />
                            </div>
                        )

                        : <div className="img-startup-help">
                            <img className="max-cell" src={require('../../public/img/infostart.png')} />
                            <img className="min-cell" src={require('../../public/img/infocell.png')} />
                        </div>

                }

            </div>

        </Fragment>
    );
}
export default View;
