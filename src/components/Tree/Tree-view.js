
import React from 'react';
import './style.css';
// import { Link } from 'react-router-dom';

function View(props){
    const {blockTree} = props
    return(
        <div className="Tree">
            {blockTree}
        </div>
    );
}
export default View;
