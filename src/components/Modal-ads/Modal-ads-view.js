import React, {Fragment} from 'react';
import './style.css'

function View(){
    return(
        <div className="Modal-ads">
            <Fragment>
                <div className="modal fade" id="AdsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="row">
                                    <div className="title_">
                                        Nuevo Anuncio
                                    </div>
                                    <div className="form_group_">
                                        <label>Elige el proyecto</label>
                                        <input/>
                                    </div>
                                    <div className="form_group_">
                                        <label>Rubro</label>
                                        <input/>
                                    </div>
                                    <div className="form_group_">
                                        <label>Titulo del Anuncio</label>
                                        <input/>
                                    </div>
                                    <div className="form_group_">
                                        <label>Descripción del requerimiento</label>
                                        <text/>
                                    </div>
                                    <div className="form_group_">
                                        <label>Aptitudes del perfil</label>
                                        <input/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}
export default View;
