
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

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
        slugAd
    } = props;
    return (
        <div className="card pauses-play mt-4">
            <div>
                {
                    userRole === "entrepreneur" ?
                        <div className="card-header d-flex">
                            <Link to={"/advertisement/" + id + "/" + slugAd} className="title_add col-sm-9">{title}</Link>
                            <div className="col-sm-3 images-icons">
                                <span><Link className="pause-bg" to="#">
                                    {state === "active" ? <i className="far fa-pause-circle" id={id} onClick={handleClickUpdate.bind(this, index, state)}></i> : <i className="far fa-play-circle" id={id} onClick={handleClickUpdate.bind(this, index, state)}></i>}</Link></span>
                                <span className="ml-2"><Link className="trash-bg" to="#"><i className="far fa-trash-alt" id={id} onClick={handleClickDelete.bind(this, index)} ></i></Link></span>
                            </div>
                        </div>
                        :
                        <Link className="row  col-sm-12" to="" data-toggle="modal" data-target="#adDetail" onClick={handleSetAdId.bind(this, id)}>{title}</Link>
                }
            </div>
            <div className="card-body margin_botton_15">
                <span className="bold col-sm-12">{startup.name}</span>
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
