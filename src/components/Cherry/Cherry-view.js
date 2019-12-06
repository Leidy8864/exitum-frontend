
import React, { Fragment } from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {

    const { 
        role,
        chikoinfo, 
        cherry, 
        changeCherry, 
        clickCherry, 
        clickChiko, 
        show_info, 
        textInfo 
    } = props;

    return (
        <Fragment>
            <div className="Cherry">
                <a href="#" className="Chiko__" onClick={clickChiko}>{ role === 'entrepreneur' ? chikoinfo : null }</a>
                <a href="#" className="Cherry__" onClick={clickCherry}>{ role === 'employee' ? cherry : null }</a>
            </div>
            {show_info?

                <div id="id01" className="message">
                <div className="modal-message">
                    <div className="message-content">
                    <header className="container-message text-center">
                        <img src={
                            role === 'entrepreneur' ? 
                                require('../../public/img/chikorita.png')
                            : 
                                require('../../public/img/fresita_.png')
                        } alt="Informacion" />
                    </header>
                    <div className="container-message">
                        <p>{textInfo}</p>
                    </div>
                    <div className="closecherry">
                            <Link to="#" className="closebtn" onClick={changeCherry}>Entendido</Link>
                        </div>
                    </div>
                </div>
                </div>
            
            :
            null
            }
        </Fragment>
    );
}
export default View;
