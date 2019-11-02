
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
        startup,
        state,
        userRole
    } = props;
    return (
        <div className="card card-body h-100">
            <div className="row">
                <h5 className={userRole ==="entrepreneur" ? "card-title title_add col-sm-9" : "card-title title_add col-sm-12"}>{title}</h5>
                {
                    userRole === "entrepreneur" ? 
                    <div className="col-sm-3 images-icons">
                        <span><Link to="#"><img src={state === "active" ? require("../../public/images/svg/boton-de-pausa.svg") : require("../../public/images/svg/boton-de-reproduccion.svg")} alt="svg" width="23" id={id} onClick={handleClickUpdate.bind(this, index, state)} /></Link></span>
                        <span className="pl-2"><Link to="#"><img src={require("../../public/images/svg/boton-de-eliminacion-del-contenedor-de-basuras.svg")} alt="svg" width="23" id={id} onClick={handleClickDelete.bind(this, index)} /></Link></span>
                    </div>
                    : ""
                }
            </div>
            <div className="row margin_botton_15">
                <p className="card-text col-sm-12">{startup.name}</p>
            </div>
            {
                userRole === "entrepreneur" ?
                    <div className="row margin_botton_15">
                        <div className="col-sm-6">
                            <p className="card-text">18 Postulantes</p>
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
