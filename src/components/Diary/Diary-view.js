
// import React, { Fragment } from 'react';
import React from 'react';
import './style.css';
import NewDiary from '../NewDiary/NewDiary-controller';
function View(props) {
    const { blockDiary } = props;
    return (
        <div className="Diary">
            {blockDiary}
            <NewDiary/>
        </div>
    );
}
export default View;
