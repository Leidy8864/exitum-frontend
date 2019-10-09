import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light dashboard-header">
            <button className="boton-sidebar"><span><i className="fas fa-ellipsis-v"></i></span></button>
            <Link className="navbar-brand ml-4 float-left" to="/">Dashboard</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <button className="boton-sidebar-cell"><span><i className="fas fa-ellipsis-v"></i></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Administrador<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;