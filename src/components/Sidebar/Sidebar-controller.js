
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
        role: localStorage.getItem('role') || '',
    }

    logOut = e => {
        e.preventDefault()
        localStorage.clear();
        this.props.history.push('/');
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
        this.props.history.push('/profile')
    }

    render() {
        
        this.chooseProfile();


        let menu =
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
                        <NavLink className="nav-link" data-toggle="pill" to="/profile" onClick={this.goProfile}>
                            <i className="far fa-user"></i>
                            <p>Perfil</p>
                        </NavLink>
                    </li>
                </ul>
            </div>

        if (this.state.isConfirmed === "false") {
            menu = 
            <div className="navegacion">
                <ul>
                    <li>
                        <NavLink to="/dashboard" id="link">
                            <i className="far fa-paper-plane"></i>
                            <p className="home">Inicio</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        }

        return (
            <View
                selectOne={this.selectOne}
                selectTwo={this.selectTwo}
                menu={menu}
                logOut={this.logOut}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Sidebar)
)