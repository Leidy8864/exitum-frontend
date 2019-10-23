
import React, { Fragment } from 'react';
import './style.css';
import ChooseProfile from '../ChooseProfile/ChooseProfile-controller'
import Entrepeneur from '../Entrepeneur/Entrepeneur-controller';
import Capsula from '../../public/img/Capsula'

function View(props) {
    const { blockTree, conditionShowChooseProfile,conditionShowCapsule, showTreeContainer, conditionShowTreeContainer } = props
    return (
        <Fragment>
                {conditionShowChooseProfile ? <ChooseProfile /> : blockTree}

                {conditionShowTreeContainer ? <Entrepeneur /> : 
                    conditionShowCapsule ? <div className="Tree">
                        <Capsula/>
                    </div>: <br/>
                }
        </Fragment>
    );
}
export default View;
