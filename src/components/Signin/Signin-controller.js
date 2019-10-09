import React from 'react';
import View from './Signin-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions  from '../../redux/actions'
import $ from 'jquery'

class Signin extends React.Component {


    state = {
        email: '',
        password: '',
        error_login: '',
        error_user: '',
        error_pass: ''
    }

    email = e => {
        this.setState({ email: e.target.value })
    }

    password = e => {
        this.setState({ password: e.target.value })
    }

    forgetPass = e => {
        e.preventDefault(e);
        $('#signin').modal('hide');
        this.setState({ error_login: '' })
    }

    logged = async e => {
        e.preventDefault();

        this.setState({ error_login: '' });
        this.setState({ error_user: '' });
        this.setState({ error_pass: '' });

        const {email, password} = this.state
        const formData = {
            email,
            password
        }
        if(email && password){
            const response = await this.props.signIn(formData);
            if(response.status){
                localStorage.setItem('token',response.data.accessToken)
                localStorage.setItem('name',response.data.name)
                localStorage.setItem('lastname',response.data.lastname)
                localStorage.setItem('role',response.data.role)
                this.props.history.push('/dashboard');
            }else{
                console.log("error = ", response.message)
                this.setState({ error_login: response.message })
            }
        }else{
            if(!email){
                this.setState({ error_user: 'Debes ingresar un usuario' })
            }
    
            if(!password){
                this.setState({ error_pass: 'Debes ingresar una clave' })
            }
        }

    }


    responseGoogle = async (res) => {
        console.log('responseGoggle', res);
        console.log('typeof res', typeof res)
        const response = await this.props.oauthGoogle(res.accessToken)
        if (response.status) {
            localStorage.setItem('token',response.data.accessToken)
            localStorage.setItem('name',response.data.name);
            localStorage.setItem('lastname',response.data.lastname);
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('role',response.data.role)

            this.props.history.push('/dashboard');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }else{
            console.log("Credenciales incorrectas, por favor intentelo nuevamente.", response.message)
            this.setState({ error_login: "Credenciales incorrectas, por favor intentelo nuevamente." });

        }
    }

    responseFacebook = async (res) => {
        console.log('responseFacebook', res);
        const response = await this.props.oauthFacebook(res.accessToken)
        if (response.status) {
            localStorage.setItem('token',response.data.accessToken)
            localStorage.setItem('name',response.data.name);
            localStorage.setItem('lastname',response.data.name);
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('role',response.data.role)

            this.props.history.push('/dashboard');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }else{
            console.log("Credenciales incorrectas, por favor intentelo nuevamente.", response.message)
            this.setState({ error_login: "Credenciales incorrectas, por favor intentelo nuevamente." });
        }
    }

    render() {
        let error_login = this.state.error_login;
        let contentError='';
        let error_user = this.state.error_user;
        let contentErrorUser='';
        let error_pass = this.state.error_pass;
        let contentErrorPass='';
        if(error_login){
            contentError = <div className="error-message"><p>{error_login}</p></div>;
        }
        if(error_user){
            contentErrorUser = <div className="error-message-aux"><p>{error_user}</p></div>;
        }
        if(error_pass){
            contentErrorPass = <div className="error-message-aux"><p>{error_pass}</p></div>;
        }
        return (
            <View
                responseFacebook={this.responseFacebook}
                responseGoogle={this.responseGoogle}
                logged={this.logged}
                email={this.email}
                contentError={contentError}
                contentErrorUser={contentErrorUser}
                contentErrorPass={contentErrorPass}
                password={this.password}
                forgetPass={this.forgetPass}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Signin)
)

