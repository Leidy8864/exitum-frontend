
import React, { Fragment } from 'react';
import './style.css';
import ChooseProfile from '../ChooseProfile/ChooseProfile-controller'
import Entrepeneur from '../Entrepeneur/Entrepeneur-controller';

function View(props) {
    const { blockTree, conditionShowChooseProfile,conditionShowCapsule, showTreeContainer, conditionShowTreeContainer } = props
    return (
        <Fragment>
                {conditionShowChooseProfile ? <ChooseProfile /> : blockTree}

                {conditionShowTreeContainer ? <Entrepeneur /> : 
                    conditionShowCapsule ? <div className="Tree">
                        <img alt="capsula" src={require('../../public/images/svg/Capsula.svg')} onClick={showTreeContainer} />
                    </div>: <br/>
                }
        </Fragment>
    );
}
export default View;
