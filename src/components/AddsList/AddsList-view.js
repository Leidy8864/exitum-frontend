
import React from 'react';
import './style.css';



function View(props) {

    const {
        adsActive,
        adsPaused,
        handleClickPause,
        handleClickDelete,
        handleClickPlay
    } = props

    return (
        <div className="container" id="lista-anuncios">
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
                    <div className="row">
                        {
                            adsActive.length >= 1 ?
                                adsActive.map(function (item, index) {
                                    return (
                                        <div className="col-sm-6 py-2" key={item.id}>
                                            <div className="card card-body h-100">
                                                <div className="row">
                                                    <h5 className="card-title col-sm-9 title_add">{item.title}</h5>
                                                    <div className="col-sm-3 images-icons">
                                                        <span><a href="#"><img src={require("../../public/images/svg/boton-de-pausa.svg")} alt="svg" width="23" id={item.id} onClick={handleClickPause.bind(this, index)} /></a></span>
                                                        <span className="pl-2"><a href="#"><img src={require("../../public/images/svg/boton-de-eliminacion-del-contenedor-de-basuras.svg")} alt="svg" width="23" id={item.id} onClick={handleClickDelete.bind(this, index, item.state)} /></a></span>
                                                    </div>
                                                </div>
                                                <div className="row margin_botton_15">
                                                <p className="card-text col-sm-12">{item.startup.name}</p>
                                                </div>

                                                <div className="row margin_botton_15">
                                                    <div className="col-sm-6">
                                                        <p className="card-text">18 Postulantes</p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="card-text">18 coincidencias</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                                :
                                <h4 className="text-center">No se encontraron anuncios activos</h4>
                        }
                    </div>
                </div>
                <div class="tab-pane fade" id="closed" role="tabpanel" aria-labelledby="closed-tab">
                    <div className="row">
                        {
                            adsPaused.length >= 1 ?
                                adsPaused.map(function (item, index) {
                                    return (
                                        <div className="col-sm-6 py-2" key={item.id}>
                                            <div className="card card-body h-100">
                                                <div className="row">
                                                    <h5 className="card-title col-sm-9 title-add">{item.title}</h5>
                                                    <div className="col-sm-3 images-icons">
                                                        <span><a href="#"><img src={require("../../public/images/svg/boton-de-reproduccion.svg")} alt="svg" width="23" id={item.id} onClick={handleClickPlay.bind(this, index)} /></a></span>
                                                        <span className="pl-2"><a href="#"><img src={require("../../public/images/svg/boton-de-eliminacion-del-contenedor-de-basuras.svg")} alt="svg" width="23" id={item.id} onClick={handleClickDelete.bind(this, index, item.state)} /></a></span>
                                                    </div>
                                                </div>
                                                <div className="row margin_botton_15">
                                                <p className="card-text col-sm-12">{item.startup.name}</p>
                                                </div>
                                                <div className="row margin_botton_15">
                                                    <div className="col-sm-4">
                                                        <p className="card-text">18 Postulantes</p>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <p className="card-text">18 coincidencias</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                                :
                                <h4 className="text-center">No se encontraron anuncios pausados</h4>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
