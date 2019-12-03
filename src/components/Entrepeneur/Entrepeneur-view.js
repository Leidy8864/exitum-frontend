
import React, { Fragment } from 'react';
import Stages from '../../components/Stages/Stages-controller'
import Challenges from '../../components/Challenges/Challenges-controller'
import AddProyect from '../../components/AddProyect/AddProyect-controller'
import './style.css';
import Cherry from '../Cherry/Cherry-controller';

function View() {
    return (
        <Fragment>
            <div className="container">
                <div className="row arbol">
                    <AddProyect />
                    <div className="col-xl-7 col-lg-12">
                        <Challenges />
                    </div>
                    <div className="col-xl-5 col-lg-12">
                        <Stages />
                    </div>
                    {/* <Cherry /> */}
                </div>
            </div>
        </Fragment>
    );
}
export default View;
