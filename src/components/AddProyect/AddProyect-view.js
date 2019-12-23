
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ModalProjects from '../ModalProjects/ModalProjects-controller';

import './style.css';

function View(props) {

    const {
        cleanForm,
        blockProjects,
        selectProject,
        selected,
        role
    } = props

    return (

        <Fragment>

            {
                role === "entrepreneur" ?

                    <div className="w-100">
                        <div className="add-proyect-container container-options">
                            <div className="proyects-list"></div>
                            <div className="add-proyect">
                                <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                                    <div className="Ads-plus-proyect">
                                        <i className="fas fa-plus mr-2"></i>
                                    </div>
                                </Link>
                            </div>
                            {
                                blockProjects.map((dt) =>
                                    <div
                                        key={"project" + dt.id}
                                        id={dt.id}
                                        className={selected.toString() === dt.id.toString() ? "projectblockSelected" : "projectblock"}
                                        onClick={selectProject}
                                    >
                                        {dt.name}

                                    </div>
                                )
                            }
                        </div>
                    </div> :
                    <div className="container-options w-100">
                        <div className="container-info-impulsor">
                            <img className="w-100" src={require('../../public/images/svg/empleado.svg')} />
                            <div className="info-impulsor">
                                <h3>Bienvenido Impulsor !</h3>
                                <div className="">
                                    <p>Hoy es buen dia para impulsar proyectos y dar ideas a los emprendedores, los cuales dependen que sus sueños y metas dependan mucho de ti, muchos exitos ¡ </p>
                                </div>
                            </div>
                        </div>
                    </div>

            }
            <ModalProjects />
        </Fragment>
    );
}
export default View;
