
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import ModalDare from '../ModalDare/ModalDare-controller'
import './style.css';

function View(props) {

    const {
        challenges,
        idChallengues
    } = props
    console.log(challenges)
    return (
        <Fragment>
            <div className="row pl-3 pr-3">
                {challenges && challenges.length > 0 ?
                    challenges.map(function (item, index) {
                        return (
                            <Fragment key={index}>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <div className="card-body challenges">
                                            <a to="#" 
                                            onClick={idChallengues.bind(this,item.id)}
                                            id={item.id} 
                                            data-toggle="modal" data-target="#modaldare" className="title-body mb-3">
                                                <i className="fa-2x far fa-snowflake mt-1 ml-1"></i><span className="card-title ml-3 mt-2">{item.tip.tip}</span></a>
                                            <div className="contact-body">
                                               <img alt="" width="40px" height="40px" className="img-challenge" src={item.user.photo} /><span className="gray ml-2">{item.user.name} {item.user.lastname}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ModalDare />
                            </Fragment>
                        )
                    }) : null
                }
            </div>
        </Fragment>
    );
}
export default View;
