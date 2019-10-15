
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
        </Fragment>
    );
}
export default View;
