
import React from 'react';
import './style.css';
import ChooseProfile from '../ChooseProfile/ChooseProfile-controller'
// import { Link } from 'react-router-dom';

function View(props){
    const {blockTree, conditionShowChooseProfile} = props
    return(
        <div className="Tree">
            {conditionShowChooseProfile ? <ChooseProfile/> : blockTree}
        </div>
    );
}
export default View;
