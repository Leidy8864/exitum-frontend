
import React, { Fragment } from 'react';
import './style.css';
import ChooseProfile from '../ChooseProfile/ChooseProfile-controller'
// import { Link } from 'react-router-dom';

function View(props) {
    const { blockTree, conditionShowChooseProfile } = props
    return (
        <Fragment>
            <div className="container-tree">
                {conditionShowChooseProfile ? <ChooseProfile /> : blockTree}
            </div>
            {/* <div className="Tree">
                <div className="container-tree">
                <div className="add-proyect">
                    <span>+Postular un proyecto</span>
                </div>
                    <img src={require('../../public/images/svg/Capsula.svg')} alt="capsula" />
                </div>
            </div> */}
        </Fragment>
    );
}
export default View;
