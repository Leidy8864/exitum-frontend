
import React from 'react';
import View from './Sidebar-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as actions from '../../redux/actions'
import $ from 'jquery'

class Sidebar extends React.Component {

    state = {
        isConfirmed: localStorage.getItem('confirmed') || false,
    }

    selectOne = e => {
        e.preventDefault()
        $('#link').addClass('active')
        $('#link-1').removeClass('active')
        this.props.history.push('/dashboard');
    }

    selectTwo = e => {
        e.preventDefault()
        $('#link').addClass('active')
        $('#link-1').removeClass('active')
        this.props.history.push('/advertisement');
    }
    logOut = e => {
        e.preventDefault()
        localStorage.clear();
        this.props.history.push('/');
    }

    componentDidMount = () => {
        $('.boton-sidebar').on('click', function () {
            $('.sidebar').toggleClass('traslate');
            $('.main-panel').toggleClass('traslate');
            $('.dashboard-header').toggleClass('traslate');
        })

        $('.boton-sidebar-cell').on('click', function () {
            $('.sidebar').toggleClass('traslate-cell');
            $('.sidebar').removeClass('traslate');
        })
    }

    render() {

        let menu =
            <div className="navegacion">
                <ul>
                    <li>
                        <NavLink to="/dashboard" id="link" onClick={this.selectOne}>
                            <img className="rocket" src={require("../../public/images/svg/proyecto.svg")} alt="svg" />
                            <span className="home">Inicio</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/advertisement" id="link-1" onClick={this.selectTwo}>
                            <img src={require("../../public/images/svg/empleo.svg")} alt="svg" />
                            <span>Anuncios</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        if (this.state.isConfirmed === "false") {
            menu = 
            <div className="navegacion">
                <ul>
                    <li>
                        <NavLink to="/dashboard" id="link" onClick={this.selectOne}>
                            <img className="rocket" src={require("../../public/images/svg/proyecto.svg")} alt="svg" />
                            <span className="home">Inicio</span>
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