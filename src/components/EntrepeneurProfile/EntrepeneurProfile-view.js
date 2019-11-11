
import React from 'react';
import './style.css';
import ProfileEmployee from '../ProfileEmployee/ProfileEmployee-controller'

function View(){
    return(
        <div className="container-fluid driving">
            <div className="row">
                <div className="col-xl-12 profile-employee">
                    <ProfileEmployee />
                </div>
            </div>
        </div>
    );
}
export default View;
