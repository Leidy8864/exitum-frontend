
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import moment from 'moment'

function View(props) {
    const {
        id,
        title,
        index,
        handleClickDelete,
        handleClickUpdate,
        handleSetAdId,
        startup,
        state,
        userRole,
        proposals,
        slugAd,
        description
    } = props;
    return (
        <div className="card pauses-play mb-3">
                {
                    userRole === "entrepreneur" ?
                        <div className="d-flex justify-content-between card-anuncios p-3">
                            <div className="start-info">
                            <img className="mr-2" width="20px" src={require('../../public/icons/ESTRELLA.svg')} />
                            <Link to={"/advertisement/" + id + "/" + slugAd} className="title_add">{title}</Link>
                            </div>
                            <div className="images-icons">
                                <span><Link data-toggle="tooltip" data-placement="top" title="Pausar anuncio" className="pause-bg" to="#">
                                    {state === "active" ? <i className="far fa-pause-circle" id={id} onClick={handleClickUpdate.bind(this, index, state)}></i> : <i className="far fa-play-circle" data-toggle="tooltip" data-placement="top" title="Reanudar anuncio" id={id} onClick={handleClickUpdate.bind(this, index, state)}></i>}</Link></span>
                                <span className="ml-2"><Link className="trash-bg" to="#"><i data-toggle="tooltip" data-placement="top" title="Eliminar anuncio" className="far fa-pause-circle" className="far fa-trash-alt" id={id} onClick={handleClickDelete.bind(this, index)} ></i></Link></span>

                            </div>
                        </div>
                        :
                        <div className="d-flex justify-content-between card-anuncios p-3">
                            <div className="start-info">
                                <img className="mr-2" width="20px" src={require('../../public/icons/ESTRELLA.svg')} />
                                <Link className="row col-sm-12 title-anuncio" to="" data-toggle="modal" data-target="#adDetail" onClick={handleSetAdId.bind(this, id)}>{title}</Link>
                            </div>
                        </div>
                }
            <div className="pb-3">
                <div className="">
                    <strong className="bold col-sm-12">Proyecto: {startup.name}</strong>
                    <strong className="bold col-sm-12">{moment().diff(startup.created_at,'days') == 0 ? 'Creado: hoy' : 'hace' + moment().diff(startup.created_at, 'days') + 'días' }</strong>
                </div>
                <span className="bold description-textos col-sm-12">{description}</span><br />
            </div>
            {/* {
                userRole === "entrepreneur" ?
                    <div className="row margin_botton_15">
                        <div className="col-sm-6">
                            <span className="bold">{proposals} Postulantes</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="bold">18 coincidencias</span>
                        </div>
                    </div>
                    : ""
            } */}
        </div>
    );
}
export default View;
