
// import React, { Fragment } from 'react';
import React from 'react';
import './style.css';
// import NewDiary from '../NewDiary/NewDiary-controller';
import ModalDiary from '../Modal-diary/Modal-diary-controller';
function View(props) {
    const { blockDiary } = props;
    return (
        <div className="Diary">
            {blockDiary}
            <ModalDiary/>
        </div>
    );
}
export default View;
