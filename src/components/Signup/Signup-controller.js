import React from 'react';
import View from './Signup-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {oauthGoogle,oauthFacebook,signUp,signIn,updateUser} from '../../redux/actions';
import clearSignUp from '../../redux/actions/clean-sign-up'
import $ from 'jquery';

class Signup extends React.Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error_name: '',
        error_lastname: '',
        error_email: '',
        error_password: '',
        error_registro: '',
        exito_registro:'',
    }

    name = e => {
        this.setState({ name: e.target.value })
    }

    lastname = e => {
        this.setState({ lastname: e.target.value })
    }

    email = e => {
        this.setState({ email: e.target.value })
    }

    password = e => {
        this.setState({ password: e.target.value })
    }

    logged = async e => {
        this.props.clearSignUp("0");
        this.setState({ error_name: '' });
        this.setState({ error_lastname: '' });
        this.setState({ error_email: '' });
        this.setState({ error_password: '' });
        this.setState({ error_registro: '' });
        this.setState({ exito_registro: '' });

        e.preventDefault();
        const {name,lastname,email, password} = this.state
        const formData = {
            name,
            lastname,
            email,
            password
        }
        if(name && lastname && email && password && password.length >= 8){
            const response = await this.props.signUp(formData);
            console.log("response = ", response)
            if(response.status){
                localStorage.setItem('token',response.data.accessToken)
                localStorage.setItem('confirmed',response.data.confirmed);
                localStorage.setItem('lastname',response.data.name);
                localStorage.setItem('email',response.data.email);
                localStorage.setItem('role',response.data.role)
                
                $('.modal-backdrop').remove();
                $('body').removeClass('modal-open');

                this.setState({ exito_registro: 'Se te ha enviado un correo para validar tu registro.' })
                this.props.history.push('/dashboard');
            }else{
                console.log("error = ", response.message)
                this.setState({ error_registro: response.message })
            }
        }else{
            if(!name){
                this.setState({ error_name: 'Debes ingresar un nombre' })
            }
            if(!lastname){
                this.setState({ error_lastname: 'Debes ingresar un apellido' })
            }
            if(!email){
                this.setState({ error_email: 'Debes ingresar un email' })
            }
            if(!password){
                this.setState({ error_password: 'Debes ingresar una clave' })
            }else{
                if(password.length < 8){
                    this.setState({ error_password: 'La clave debe tener mínimo 8 caracteres' })
                }
            }
            
        }
    }


    responseGoogle = async (res) => {
        this.props.clearSignUp("0");
        console.log('responseGoggle', res);
        console.log('typeof res', typeof res)
        const response = await this.props.oauthGoogle(res.accessToken);
        console.log(response)
        if(response.status) {
            localStorage.setItem('token',response.data.accessToken)
            localStorage.setItem('confirmed',response.data.confirmed)
            localStorage.setItem('token',response.data.accessToken)
            localStorage.setItem('confirmed',response.data.confirmed);
            localStorage.setItem('lastname',response.data.name);
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('role',response.data.role)

            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();

            this.props.history.push('/dashboard');
        } else{
            console.log("error = ", response.message)
            this.setState({ error_registro: response.message })
        }
    }

    responseFacebook = async (res) => {
        this.props.clearSignUp("0");
        console.log('responseFB', res);
        console.log('typeof res', typeof res)
        const response =  await this.props.oauthFacebook(res.accessToken)
        if(response.status) {
            localStorage.setItem('token',response.data.accessToken)
            localStorage.setItem('confirmed',response.data.confirmed);
            localStorage.setItem('lastname',response.data.name);
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('role',response.data.role)
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();

            this.props.history.push('/dashboard');
        } else{
            console.log("error = ", response.message)
            this.setState({ error_registro: response.message })
        }
    }

    render() {
        const {
            cleanSignUpReducer
        } = this.props;
        let error_name = this.state.error_name;
        let error_lastname = this.state.error_lastname;
        let error_email = this.state.error_email;
        let error_password = this.state.error_password;
        let error_registro = this.state.error_registro;
        let exito_registro = this.state.exito_registro;
        let content_error_name = '';
        let content_error_lastname = '';
        let content_error_email = '';
        let content_error_password = '';
        let content_error_registro = '';
        let content_exito_registro = '';

        if(cleanSignUpReducer){
            error_name = '';
            error_lastname = '';
            error_email = '';
            error_password = '';
            error_registro = '';
            exito_registro = '';
        }

        if(error_name){
            content_error_name = <p>{error_name}</p>;
        }
        if(error_lastname){
            content_error_lastname = <p>{error_lastname}</p>;
        }
        if(error_email){
            content_error_email = <p>{error_email}</p>;
        }
        if(error_password){
            content_error_password = <p>{error_password}</p>;
        }
        if(error_registro){
            content_error_registro = <div className="error-message"><p>{error_registro}</p></div>;
        }
        if(exito_registro){
            content_exito_registro = <div className="exito-message"><p>{exito_registro}</p></div>;
        }

        return (
            <View
                responseFacebook={this.responseFacebook}
                responseGoogle={this.responseGoogle}
                logged={this.logged}
                name={this.name}
                lastname={this.lastname}
                email={this.email}
                password={this.password}
                content_error_name = {content_error_name}
                content_error_lastname = {content_error_lastname}
                content_error_email = {content_error_email}
                content_error_password = {content_error_password}
                content_error_registro = {content_error_registro}
                content_exito_registro = {content_exito_registro}
            />
        );
    }
}


const mapStateToProps = state => ({
    cleanSignUpReducer: state.cleanSignUpReducer
});

const mapDispatchToProps = {
    clearSignUp,
    oauthGoogle,
    oauthFacebook,
    signUp,
    signIn,
    updateUser
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Signup)
)


