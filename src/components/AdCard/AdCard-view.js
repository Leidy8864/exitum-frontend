
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
        <div className="card card-body h-100">
            <div>
                {
                    userRole === "entrepreneur" ?
                        <div className="row">
                            <Link to={"/advertisement/" + id + "/" + slugAd} className="title_add col-sm-9">{title}</Link>
                            <div className="col-sm-3 images-icons">
                                <span><Link className="pause-bg" to="#"><img className="pause-btn" src={state === "active" ? require("../../public/images/svg/boton-pause.svg") : require("../../public/images/svg/reproducir.svg")} alt="svg"  id={id} onClick={handleClickUpdate.bind(this, index, state)} /></Link></span>
                                <span className="ml-2"><Link className="trash-bg" to="#"><img className="trash-btn" src={require("../../public/images/svg/basura.svg")} alt="svg" width="23" id={id} onClick={handleClickDelete.bind(this, index)} /></Link></span>
                            </div>
                        </div>
                        :
                        <Link className="row  col-sm-12" to="" data-toggle="modal" data-target="#adDetail" onClick={handleSetAdId.bind(this, id)}>{title}</Link>
                }
            </div>
            <div className="row margin_botton_15">
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
