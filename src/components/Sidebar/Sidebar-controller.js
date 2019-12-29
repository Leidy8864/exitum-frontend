
import React from 'react';
import View from './Sidebar-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
// import $ from 'jquery'

class Sidebar extends React.Component {

    state = {
        isConfirmed: localStorage.getItem('confirmed') || false,
        role: localStorage.getItem('role') || 'undefined',
    }

    logOut = e => {
        e.preventDefault()
        localStorage.clear();
        window.location.replace('/');
    }

    chooseProfile = async() =>{
        const {isConfirmed, role } =this.state;
        if(isConfirmed === "true" && (role === "" || role ==="undefined")){
        }
    }

    goDashboard = e => {
        e.preventDefault();
        this.props.history.push('/dashboard')
    }

    goAdvertisement = e => {
        e.preventDefault();
        this.props.history.push('/advertisement')
    }

    goProfile = e => {
        e.preventDefault();
        this.props.history.push('/my-profile')
    }

    goEvents = e => {
        e.preventDefault();
        this.props.history.push('/events')
    }

    goChallenges = e => {
        e.preventDefault();
        this.props.history.push('/challenges')
    }

    goDairy = e => {
        e.preventDefault();
        this.props.history.push('/calendar')
    }

    render() {
        
        this.chooseProfile();


        let menu =
        <div className="sidebar">
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <img src={require('../../public/images/svg/logo-azul.svg')} alt="img"/>
                </div>
            </div>
            <div className="navegacion">
                <ul className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <li className="nav-item">
                        <NavLink className="nav-link" data-toggle="pill" to="/dashboard" onClick={this.goDashboard}>
                            <i className="far fa-paper-plane"></i>
                            <p className="home">Inicio</p>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" data-toggle="pill" to="/advertisement" onClick={this.goAdvertisement}>
                            <i className="far fa-address-card"></i>
                            <p>Anuncios</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-toggle="pill" to="/events" onClick={this.goEvents}>
                            <i className="far fa-calendar-alt"></i>
                            <p>Eventos</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-toggle="pill" to="/challenges" onClick={this.goChallenges}>
                            <i className="far fa-snowflake"></i>
                            <p>Retos</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-toggle="pill" to="/my-profile" onClick={this.goProfile}>
                            <i className="far fa-user"></i>
                            <p>Perfil</p>
                        </NavLink>
                    </li>
                    <li className="nav-item calendar">
                        <NavLink className="nav-link" data-toggle="pill" to="/calendar" onClick={this.goDairy}>
                            <i className="far fa-calendar"></i>
                            <p>Agenda</p>
                        </NavLink>
                    </li>
                    <li className="exit-dashboard">
                        <NavLink to="/" onClick={this.logOut}>
                            <i className="far fa-arrow-alt-circle-left"></i>
                            <p>Salir</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
            

        if (this.state.role === "undefined") {
            menu = 
            ''
        }

        return (

            <View
                menu={menu}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Sidebar)
)