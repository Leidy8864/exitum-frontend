
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ModalProjects from '../ModalProjects/ModalProjects-controller';

import './style.css';
import { NimbleEmoji } from 'emoji-mart';

function View(props) {

    const {
        cleanForm,
        blockProjects,
        selectProject,
        selected,
        show_add_proyect_empty,
        role
    } = props

    console.log("PROYECTOS VACIOS ?", show_add_proyect_empty)

    return (

        <Fragment>
            {
                role === "entrepreneur" ?

                    <div>
                        <div className="add-proyect-container container-options">
                            <div className="proyects-list"></div>
                            <div className="add-proyect">
                                <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
                                    <div className="Ads-plus-proyect">
                                        <i className="fas fa-plus mr-2"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="proyects-list-aux">
                            <div className="container">
                                <div className="row proyects-block">
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
                    </div> : ''
                
            }

            <ModalProjects />
        </Fragment>

        // <div className="">
        //     {show_add_proyect_empty ?
        //         <div>
        //             <div className="proyects-list"></div>
        //             <div className="add-proyect">
        //                 <Link className="" to="" data-toggle="modal" data-target="#NewProjectModal" onClick={cleanForm}>
        //                     <div className="Ads-plus-proyect">
        //                         <i className="fas fa-plus mr-2"></i>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>
        //         :
        //         <div >
        //             <div className="proyects-list-aux">
        //                 <div className="container">
        //                     <div className="row proyects-block">
        //                         {
        //                             blockProjects.map((dt) =>
        //                                 <div
        //                                     key={"project" + dt.id}
        //                                     id={dt.id}
        //                                     className={selected.toString() === dt.id.toString() ? "projectblockSelected" : "projectblock"}
        //                                     // className= {selected === dt.id ? "hourModalAdsSelected": "hourModalAds"}
        //                                     onClick={selectProject}
        //                                 >
        //                                     {dt.name}

        //                                 </div>
        //                             )
        //                         }
        //                     </div>
        //                 </div>
        //             </div>
        //            
        //         </div>

        //     }
        //     
        // </div>
    );
}
export default View;
