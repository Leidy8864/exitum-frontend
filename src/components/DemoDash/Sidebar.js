import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import './styles.css'

// Routing
import { Link } from 'react-router-dom'

class Sidebar extends Component {

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

    // irClientes = () => {
    //     this.props.history.push('/clientes')
    // }

    // irProductos = () => {
    //     this.props.history.push('/productos')
    // }

    // irObras = () => {
    //     this.props.history.push('/obras')
    // }

    // irUsuarios = () => {
    //     this.props.history.push('/usuarios')
    // }

    render() {

        return (
            <div className="sidebar">
                <div className="img-sidebar">

                </div>
                <div className="cabecera">
                    <div className="text-logo pt-4">
                        <span className="text-abrv">EX</span>
                        <p>EXITUM</p>
                    </div>
                </div>
                <div className="navegacion">
                    <div className="nav flex-column nav-pills p-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to="/clientes" onClick={this.irClientes} className="nav-link active mt-3" id="v-pills-profile-tab" role="tab"
                            data-toggle="pill"
                            aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-home"></i><p>Inicio</p></Link>
                        <Link to="/productos" onClick={this.irProductos} className="nav-link mt-3" id="v-pills-profile-tab" role="tab"
                            data-toggle="pill"
                            aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-box"></i><p>Anuncios</p></Link>
                        <Link to="/obras" onClick={this.irObras} className="nav-link mt-3" id="v-pills-messages-tab" role="tab"
                            data-toggle="pill" aria-controls="v-pills-messages" aria-selected="false"><i className="fas fa-building"></i><p>Emprendedores</p></Link>
                        <Link to="/usuarios" onClick={this.irUsuarios} className="nav-link mt-3" id="v-pills-settings-tab"
                            data-toggle="pill" role="tab"><i className="fas fa-users"></i><p>Impulsores</p></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Sidebar);