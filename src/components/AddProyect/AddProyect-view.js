
import React from 'react';
import { Link } from 'react-router-dom';
import ModalProjects from '../ModalProjects/ModalProjects-controller';

import './style.css';

function View(props) {

    const  {
        cleanForm,
        blockProjects,
        selectProject,
        selected,
        show_add_proyect_empty
    } = props
    return (
        <div className="add-proyect-container">
            {show_add_proyect_empty ? 
                <div>
                    <div className="proyects-list"></div>
                    <div className="add-proyect">
                        <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                            <div className="Ads-plusito">
                                <span> + </span>
                                Agregar un proyecto
                            </div>
                        </Link>
                    </div> 
                </div>
                : 
                <div >
                    <div className="proyects-list-aux">
                        {
                            blockProjects.map((dt) =>
                                <div 
                                    key={"project"+dt.id}
                                    id={dt.id}
                                    className= {selected.toString() === dt.id.toString() ? "projectblockSelected": "projectblock"}
                                    // className= {selected === dt.id ? "hourModalAdsSelected": "hourModalAds"}
                                    onClick={selectProject}
                                >
                                    {dt.name}

                                </div>
                            )
                        }
                    </div>

                    <div className="add-proyect-aux">
                        <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                            <div className="Ads-plusito">
                                <span> + </span>
                                Agregar un proyecto
                            </div>
                        </Link>
                    </div>
                </div>
                
            }
            <ModalProjects />
        </div>
    );
}
export default View;
