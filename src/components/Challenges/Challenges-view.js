import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';
import DetailChallenge from '../DetailChallenge/DetailChallenge-controller'

function View(props){
    const  {
        blockChallenge,
        cleanForm
    } = props
    return(
        <div className="challenges">
            <div className="container-chellenges">
                {
                    blockChallenge.map((dt,index) =>
                        <Link id={dt.id} className="signin" to="" data-toggle="modal" data-target="#detailCHallengeModal" onClick={cleanForm} key={"project"+index}>
                            <div 
                                className={dt.status === "completado" ? "challenge_complete" : "challenge"}
                                
                                id={dt.id}
                            >
                                <p>{dt.title}</p>
                                <span>{dt.status}</span>
                            </div>
                        </Link>
                    )
                }
            </div>
            <DetailChallenge/>
        </div>
    );
}
export default View;
