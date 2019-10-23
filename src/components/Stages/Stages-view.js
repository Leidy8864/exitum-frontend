
import React from 'react';
import './style.css';


function View() {
    return (
        <div className="stages">
            <div className="stage">
                <div className="container-stage">
                    <div className="stage-1">
                            <img src={require('../../public/images/svg/circulo.svg')} alt="img-stages" />
                        </div>
                        <div className="stage-2">
                            <img src={require('../../public/images/svg/circulo.svg')} alt="img-stages" />
                        </div>
                        <div className="stage-3">
                            <img src={require('../../public/images/svg/circulo.svg')} alt="img-stages" />
                        </div>
                        <div className="stage-4">
                            <img src={require('../../public/images/svg/circulo.svg')} alt="img-stages" />
                        </div>
                        <div className="stage-5">
                            <img src={require('../../public/images/svg/circulo.svg')} alt="img-stages" />
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default View;
