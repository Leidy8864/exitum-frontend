
import React from 'react';
import { Link } from 'react-router-dom';
import ModalProjects from '../ModalProjects/ModalProjects-controller';

import './style.css';

function View(props) {

    const {
        cleanForm,
        blockProjects,
        selectProject,
        selected,
        show_add_proyect_empty,
        role
    } = props
    return (
        <div className="add-proyect-container">
            {show_add_proyect_empty ?
                <div>
                    <div className="proyects-list"></div>
                    <div className="add-proyect">
                        <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                            <div className="Ads-plus">
                                <i className="fas fa-plus mr-2"></i>
                                Agregar un proyecto
                            </div>
                        </Link>
                    </div>
                </div>
                :
                <div >
                    <div className="title-proyect">
                        <h4>Mis proyectos</h4>
                    </div>
                    <div className="proyects-list-aux">
                        <div className="container">
                            <div className="row">
                                {
                                    blockProjects.map((dt) =>
                                        <div
                                            key={"project" + dt.id}
                                            id={dt.id}
                                            className={selected.toString() === dt.id.toString() ? "projectblockSelected" : "projectblock"}
                                            // className= {selected === dt.id ? "hourModalAdsSelected": "hourModalAds"}
                                            onClick={selectProject}
                                        >
                                            {dt.name}

                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    {
                        role === "entrepreneur" ?
                            <div className="add-proyect-aux mt-4">
                                <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                                    <div className="Ads-plus">
                                        <i className="fas fa-plus mr-2"></i>
                                        Agregar un proyecto
                                </div>
                                </Link>
                            </div>
                            : <h5 className="text-center none-persons">"No hay ningun proyecto tuyo, create uno"</h5>
                    }
                </div>

            }
            <ModalProjects />
        </div>
    );
}
export default View;
