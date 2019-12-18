
import React, { Fragment } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom'

function View(props) {

    const {
        header
    } = props

    return (
        <Fragment>
            {header}
        </Fragment>
    );
}
export default View;
