
import React from 'react';
import './style.css';
import ProfileEmployee from '../ProfileEmployee/ProfileEmployee-controller'
import PerfilEmployee from '../PerfilEmployee/PerfilEmployee-controller'

function View(){
    return(
        <div className="container-fluid driving">
            <div className="row">
                <div className="col-xl-3 profile-employee">
                    <ProfileEmployee />
                </div>
                <div className="col-xl-9 plus-employee">
                    <PerfilEmployee />
                </div>
            </div>
        </div>
    );
}
export default View;
