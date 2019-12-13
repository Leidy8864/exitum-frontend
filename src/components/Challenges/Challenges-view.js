import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';
import DetailChallenge from '../DetailChallenge/DetailChallenge-controller'

function View(props){
    const  {
        blockChallenge,
        handleClick
    } = props
    return(
        <div className="challenges-hc">
            <div className="">
                {   
                    blockChallenge.length >= 1 ?
                    blockChallenge.map((dt,index) =>

                        <Link className="signin" to="" data-toggle="modal" data-target="#detailCHallengeModal" key={"project"+index}>
                            <div 
                                className={dt.status === "completado" ? "challenge_complete" : "challenge"}
                                
                                id={dt.id}
                                onClick={handleClick.bind(this,dt.tip_id)}
                            >
                                <p>{dt.title}</p>
                                <span>{dt.status}</span>
                            </div>
                        </Link>
                    )
                    :

                    <div className="img-startup-help">
                        <img className="max-cell" src={require('../../public/img/infostart.png')} />
                        <img className="min-cell" src={require('../../public/img/infocell.png')} />
                    </div>

                }
            </div>
            <DetailChallenge/>
        </div>
    );
}
export default View;
