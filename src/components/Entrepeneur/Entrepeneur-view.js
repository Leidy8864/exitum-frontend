
import React, { Fragment } from 'react';
import Stages from '../../components/Stages/Stages-controller'
import Challenges from '../../components/Challenges/Challenges-controller'
import AddProyect from '../../components/AddProyect/AddProyect-controller'
import './style.css';

function View(){
    return(
        <Fragment>
            <div className="container-tree">
                <div className="container">
                    <div className="row">
                        <AddProyect />
                        <div className="col-md-5">
                            <Stages />
                        </div>
                        <div className="col-md-7">
                            <Challenges />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        );
}
export default View;
