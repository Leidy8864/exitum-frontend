
import React from 'react';
import './style.css';
function View() {
    return (
        <div>
            <ul className="nav nav-pills" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link px-4 active" id="active-tab" data-toggle="tab" href="#active" role="tab" aria-controls="active" aria-selected="true">EN CURSO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link px-4" id="closed-tab" data-toggle="tab" href="#closed" role="tab" aria-controls="closed" aria-selected="false">EN PAUSA</a>
                </li>
            </ul>
        </div>
    );
}
export default View;
