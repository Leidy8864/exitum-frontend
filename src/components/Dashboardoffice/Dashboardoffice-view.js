import React, { Fragment } from 'react';
import './style.css';

function View(props) {

    const { pickDiary,content } = props

    return (
        
        <Fragment>
            {content}
        </Fragment>
    );
}
export default View;
