import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import SignIn from '../Signin/Signin-controller'
import './style.css';

function View(props) {

  const { modalLogin } = props

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span><img src={require("../../public/images/svg/logo-blanco.svg")} alt="svg" /></span>
          </Link>
          <div className="mr-signin" id="navbarNav">
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
