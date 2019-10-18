
import React from 'react';
import { Link } from 'react-router-dom';
import ModalProjects from '../ModalProjects/ModalProjects-controller';

import './style.css';

function View(props) {

    const  {
        cleanForm
    } = props
    return (
        <div>
            <div className="add-proyect">
                <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                    <div className="Ads-plus">
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
