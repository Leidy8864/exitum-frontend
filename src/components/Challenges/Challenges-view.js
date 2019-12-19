import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import DetailChallenge from '../DetailChallenge/DetailChallenge-controller'
import './style.css';

function View(props){
    const  {
        blockChallenge,
        handleClick,
        mostrarImagen
    } = props
    return(
        <Fragment>
            <div className="">
                <div className="complete-challenge">
                    <img src={require('../../public/images/svg/el-planeta-tierra.svg')} />
                    <div className="welcome-challenge">
                        <h2>Bienvenido a los retos</h2>
                        <p>Completa cada reto para poder más probabilidad de tener exito, mientras avanzas, tu planta crecera tambien.</p>
                    </div>
                </div>
                {   
                    blockChallenge.length >= 1 ?
                    blockChallenge.map((dt,index) =>
                    <div className="challenges-hc mt-3" key={index}>
                        <div className="">
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
                        </div>
                        <DetailChallenge/>
                        </div>
                    )
                    
                    :  mostrarImagen && 

                        <div className="img-startup-help">
                            <img className="max-cell" src={require('../../public/img/infostart.png')} />
                            <img className="min-cell" src={require('../../public/img/infocell.png')} />
                        </div> 
                    
                }
            </div>
            
        </Fragment>
    );
}
export default View;
