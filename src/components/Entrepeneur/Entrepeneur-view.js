
import React, { Fragment } from 'react';
import Stages from '../../components/Stages/Stages-controller'
import Challenges from '../../components/Challenges/Challenges-controller'
import AddProyect from '../../components/AddProyect/AddProyect-controller'
import './style.css';
import Cherry from '../Cherry/Cherry-controller';

function View(){
    return(
        <Fragment>
            <div className="container-tree">
                <div className="container">
                    <div className="row">
                        <AddProyect />
                        <div className="col-xl-5 col-md-12 m-md-0">
                            <Stages />
                        </div>
                        <div className="col-xl-7 col-md-12 m-md-0">
                            <Challenges />
                        </div>
                        <Cherry />
                    </div>
                </div>
            </div>
        </Fragment>
        );
}
export default View;
