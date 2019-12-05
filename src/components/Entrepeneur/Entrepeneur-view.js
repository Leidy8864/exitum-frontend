
import React, { Fragment } from 'react';
import Stages from '../../components/Stages/Stages-controller'
import Challenges from '../../components/Challenges/Challenges-controller'
import AddProyect from '../../components/AddProyect/AddProyect-controller'
import './style.css';

function View() {
    return (
        <Fragment>
            <div className="container-fluid bg-whites adds-scroll">
                <div className="row stages-challenges">
                    <AddProyect />
                    <div className="col-xl-7 col-lg-12 col-md-12">
                        <Challenges />
                    </div>
                    <div className="col-xl-5 col-lg-12 col-md-12 retos">
                        <Stages />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default View;
