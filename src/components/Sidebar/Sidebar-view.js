
import React, { Fragment } from 'react';
import './style.css';

function View(props) {
    const {
        menu,
    } = props;
    return (
        <Fragment>{menu}</Fragment>
    );
}
export default View;
