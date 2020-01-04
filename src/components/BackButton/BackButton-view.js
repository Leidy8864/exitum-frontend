
import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

function View(props) {
    const{
        goBack
    } = props;
    return (
        <Link to="#" className="atras-arrow go" onClick={goBack}>
            <i className="fas fa-arrow-left"></i>
        </Link>
    );
}
export default View;
