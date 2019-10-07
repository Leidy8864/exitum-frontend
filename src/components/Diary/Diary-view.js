
import React from 'react';
import './style.css';

function View(){
    return(
        <div className="Diary">
            <div className="start-diary">
                <button type="submit" className="add-diary"><span>+</span></button>
                Empieza una agenda
            </div>
        </div>
    );
}
export default View;
