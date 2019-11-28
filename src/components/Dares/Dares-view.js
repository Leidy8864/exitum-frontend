
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
                                        <div className="card-body">
                                            <a to="#" 
                                            onClick={idChallengues.bind(this,item.id)}
                                            id={item.id} 
                                            data-toggle="modal" data-target="#modaldare" className="title-body d-flex"><i className="far fa-snowflake mt-1"></i><h6 className="card-title ml-2">{item.tip.tip}</h6></a>
                                            <div className="contact-body d-flex">
                                                <i className="far fa-address-book mt-1"></i><p className="ml-2">{item.user.name} {item.user.lastname}</p>
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
