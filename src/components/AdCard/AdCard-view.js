
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
                            <Link to={"/advertisement/" + id + "/" + slugAd} className="text-primary card-title title_add col-sm-9">{title}</Link>
                            <div className="col-sm-3 images-icons">
                                <span><Link to="#"><img src={state === "active" ? require("../../public/images/svg/pause.svg") : require("../../public/images/svg/play-button.svg")} alt="svg" width="23" id={id} onClick={handleClickUpdate.bind(this, index, state)} /></Link></span>
                                <span className="pl-2"><Link to="#"><img src={require("../../public/images/svg/delete.svg")} alt="svg" width="23" id={id} onClick={handleClickDelete.bind(this, index)} /></Link></span>
                            </div>
                        </div>
                        :
                        <Link className="row card-title title_add col-sm-12" to="" data-toggle="modal" data-target="#adDetail" onClick={handleSetAdId.bind(this, id)}>{title}</Link>

                }
            </div>
            <div className="row margin_botton_15">
                <p className="card-text col-sm-12">{startup.name}</p>
            </div>
            {
                userRole === "entrepreneur" ?
                    <div className="row margin_botton_15">
                        <div className="col-sm-6">
                            <p className="card-text">{proposals} Postulantes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="card-text">18 coincidencias</p>
                        </div>
                    </div>
                    : ""
            }
        </div>
    );
}
export default View;
