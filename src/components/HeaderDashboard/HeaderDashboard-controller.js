
import React from 'react';
import View from './HeaderDashboard-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'

class HeaderDashboard extends React.Component {

    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname'),
        photo: localStorage.getItem('photo'),
        imagen: localStorage.getItem('genre') !== 'null' && localStorage.getItem('genre') !== 'undefined' && localStorage.getItem('genre') ==='femenino'  ? "https://img.icons8.com/color/48/000000/guest-female.png" : "https://img.icons8.com/plasticine/2x/user.png",
        role: localStorage.getItem('role') || 'undefined'
    }

    logOut = e => {
        e.preventDefault()
        localStorage.clear();
        this.props.history.push('/');
    }

    componentDidMount = () => {
        $('.navbar-toggler').on('click', function () {
            $('html').toggleClass('nav-open');
            $('.opacity-panel').toggleClass('close-layer visible')
        })
    }
    componentDidUpdate(nextProps) {
        const { imageProfile, reload } = this.props;
        if (nextProps.imageProfile !== imageProfile) {
            if (imageProfile) {
                this.setState({
                    photo: imageProfile
                });
            }
        }
        if (nextProps.reload !== reload) {
            if (reload) {
                this.setState({
                    name: localStorage.getItem('name'),
                    lastname: localStorage.getItem('lastname')
                })
            }
        }
    }

    goProfile = e => {
        e.preventDefault();
        this.props.history.push('/my-profile')
    }

    render() {
        let header =

            <nav className="navbar navbar-expand-lg navbar-light bg-light dashboard-header">
                <div className="container-fluid">

                    <div className="content-user">
                        <div className="dropleft">
                            <button className="perfil-pick dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="img-usuario" src={this.state.photo !== 'null' && this.state.photo !== 'undefined' ? this.state.photo : this.state.imagen} alt="svg" />
                                <span>{this.state.name || "Usuario"} {this.state.lastname || "Invitado"}</span>
                            </button>
                        </div>

                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                    </button>
                </div>
            </nav>

        if (this.state.role === 'undefined') {
            header = ''
        }

        return (
            <View
                header={header}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    imageProfile: state.setImageReducer,
    reload: state.reloadPageReducer
});
export default withRouter(
    connect(mapStateToProps, null)(HeaderDashboard)
)