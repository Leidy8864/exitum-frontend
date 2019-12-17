
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
        <div className="card p-3 pauses-play mb-3">
            <div>
                {
                    userRole === "entrepreneur" ?
                        <li className="d-flex">
                            <Link to={"/advertisement/" + id + "/" + slugAd} className="title_add col-sm-9">{title}</Link>
                            <div className="col-sm-3 images-icons">
                                <span><Link className="pause-bg" to="#">
                                    {state === "active" ? <i data-toggle="tooltip" data-placement="top" title="Pausar anuncio" className="far fa-pause-circle" id={id} onClick={handleClickUpdate.bind(this, index, state)}></i> : <i className="far fa-play-circle" data-toggle="tooltip" data-placement="top" title="Reanudar anuncio" id={id} onClick={handleClickUpdate.bind(this, index, state)}></i>}</Link></span>
                                <span className="ml-2"><Link className="trash-bg" to="#"><i data-toggle="tooltip" data-placement="top" title="Eliminar anuncio" className="far fa-pause-circle" className="far fa-trash-alt" id={id} onClick={handleClickDelete.bind(this, index)} ></i></Link></span>

                            </div>
                        </li>
                        :
                        <Link className="row col-sm-12" to="" data-toggle="modal" data-target="#adDetail" onClick={handleSetAdId.bind(this, id)}>{title}</Link>
                }
            </div>
            <hr/>
            <div className="">
                <i className="fab fa-wpforms ml-3"></i><span className="title-company col-sm-12">{startup.name}</span><br />
                <span className="bold col-sm-12">{description}</span><br />
                <span className="bold col-sm-12">{moment(startup.created_at).fromNow()}</span><br />
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
