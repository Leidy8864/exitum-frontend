
import React from 'react';
import './style.css';

function View(props) {
    const {
        menu,
    } = props;
    return (
        <div className="sidebar">
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <img src={require('../../public/images/svg/logo-azul.svg')} alt="img"/>
                </div>
            </div>
            {menu}
        </div>
    );
}
export default View;
