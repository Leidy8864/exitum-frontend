
import React from 'react';
import './style.css';

function View(){
    return(
        <div className="stages">
            <div className="stage-4">
                <img src={require('../../public/images/svg/Circulo-reto.svg')} alt="stages" />
            </div>
            <div className="stage-3">
                <img src={require('../../public/images/svg/Circulo-reto.svg')} alt="stages" />
            </div>
            <div className="stage-2">
                <img src={require('../../public/images/svg/Circulo-reto.svg')} alt="stages" />
            </div>
            <div className="stage-1">
                <img src={require('../../public/images/svg/Circulo-reto.svg')} alt="stages" />
            </div>
        </div>
    );
}
export default View;
