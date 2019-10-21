
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
    } = props
    return (
        <div className="add-proyect-container">
            <div className="proyects-list">
                {/* {blockProjects} */}
                {
                    blockProjects.map(dt =>
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
            <div className="add-proyect">
                <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                    <div className="Ads-plusito">
                        <span> + </span>
                        Agregar un proyecto
                    </div>
                </Link>
            </div>

            <ModalProjects />
        </div>
    );
}
export default View;
