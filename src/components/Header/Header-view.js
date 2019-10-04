import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import SignIn from '../Signin/Signin-controller'
import './style.css';

function View(props) {

  const { modalLogin,menuCel } = props

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span><img src={require("../../public/images/svg/logo-blanco.svg")} alt="svg" /></span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <div onClick={menuCel} className="menu">
              <div className="hamburger"></div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link onClick={modalLogin} className="signin" to="/" data-toggle="modal" data-target="#signin">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <SignIn />
    </Fragment>
  );
}
export default View;
