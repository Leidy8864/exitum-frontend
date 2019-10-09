
// import React, { Fragment } from 'react';
import React from 'react';
import './style.css';
import NewDiary from '../NewDiary/NewDiary-controller';
function View(props) {

    return (
        <div className="Diary">
            <div className="start-diary">
                <button type="submit" className="add-diary" data-toggle="modal" data-target="#newdiary"><span>+</span></button>
                Empieza una agenda
            </div>
            <NewDiary/>
        </div>
    );
}
export default View;
