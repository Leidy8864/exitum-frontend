import React from 'react';
import View from './Signup-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { oauthGoogle, oauthFacebook, signUp, signIn, updateUser } from '../../redux/actions';
import cleanForm from '../../redux/actions/clean-form'
import $ from 'jquery';
import Swal from 'sweetalert2';

class Signup extends React.Component {

    state = {
        name: '',
        lastname_1: '',
        lastname_2: '',
        email_1: '',
        email_2: '',
        password_1: '',
        password_2: '',
        error_name: '',
        error_lastname_1: '',
        error_lastname_2: '',
        error_email_1: '',
        error_email_2: '',
        error_password_1: '',
        error_password_2: '',
        error_registro: '',
        exito_registro: '',
        error_genre: '',
        genre:'',
        isChecked:false
    }

    name = e => {
        this.setState({ name: e.target.value })
    }

    lastname_1 = e => {
        this.setState({ lastname_1: e.target.value })
    }
    lastname_2 = e => {
        this.setState({ lastname_2: e.target.value })
    }

    email_1 = e => {
        this.setState({ email_1: e.target.value })
    }
    email_2 = e => {
        this.setState({ email_2: e.target.value })
    }

    password_1 = e => {
        this.setState({ password_1: e.target.value })
    }
    password_2 = e => {
        this.setState({ password_2: e.target.value })
    }
    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }

    selectGenre = async (e) => {
        this.setState({genre: e.target.value})
    }

    logged = async e => {
        this.props.cleanForm("0");
        this.setState({ error_genre: '' })
        this.setState({ error_name: '' })
        this.setState({ error_lastname_1: '' })
        this.setState({ error_lastname_2: '' })
        this.setState({ error_email_1: '' })
        this.setState({ error_email_2: '' })
        this.setState({ error_password_1: '' })
        this.setState({ error_password_2: '' })

        e.preventDefault();
        const { name, lastname_1, lastname_2, email_1, email_2, password_1, password_2, genre, isChecked} = this.state
        const formData = {
            name,
            lastname_1,
            lastname_2,
            email: email_1, 
            password: password_1, 
            genre
        }

        console.log("formData = ", JSON.stringify(formData));
        console.log("isChecked = ", isChecked);

        if (
            name && lastname_1 && lastname_2 && email_1 && email_2 && 
            email_1 === email_2 && genre && password_1 && password_2 && isChecked &&
            password_1 === password_2 && password_1.length >= 8 && password_2.length >= 8) {
            // const response = await this.props.signUp(formData);
            // if (response.status) {
            //     localStorage.setItem('id', response.data.id);
            //     localStorage.setItem('infoChiko', true);
            //     localStorage.setItem('token', response.data.accessToken);
            //     localStorage.setItem('confirmed', response.data.confirmed);
            //     localStorage.setItem('lastname', response.data.lastname);
            //     localStorage.setItem('name', response.data.name);
            //     localStorage.setItem('email', response.data.email);
            //     localStorage.setItem('role', response.data.role);

            //     $('.modal-backdrop').remove();
            //     $('body').removeClass('modal-open');

            //     Swal.fire(
            //         'Felicidades se ha creado tu cuenta correctamente',
            //         'Se te ha enviado un correo de verificación a tu cuenta para poder acceder a EXITUM',
            //         'success'
            //     )
            //     setTimeout(
            //         () => {
            //             $('#signup').modal('hide')
            //         },
            //         5000
            //     );
            // } else {
            //     console.log("error = ", response.message)
            //     this.setState({ error_registro: response.message })
            // }
        } else {
            if (!genre) {
                this.setState({ error_genre: 'Debes elegir un genero' })
            }else{
                this.setState({ error_genre: '' })
            }
            if (!name) {
                this.setState({ error_name: 'Debes ingresar un nombre' })
            }else{
                this.setState({ error_name: '' })
            }
            if (!lastname_1) {
                this.setState({ error_lastname_1: 'Debes ingresar el apellido paterno' })
            }else{
                this.setState({ error_lastname_1: '' })
            }
            if (!lastname_2) {
                this.setState({ error_lastname_2: 'Debes ingresar el apellido materno' })
            }else{
                this.setState({ error_lastname_2: '' })
            }
            if (!email_1) {
                this.setState({ error_email_1: 'Debes ingresar un email' })
            }else{
                this.setState({ error_email_1: '' })
            }
            if (!email_2) {
                this.setState({ error_email_2: 'Debes confirmar tu email' })
            }else{
                this.setState({ error_email_2: '' })
            }
            if (email_2 !==email_1) {
                this.setState({ error_email_2: 'Debes ingresar el mismo email' })
            }
            if (!password_1) {
                this.setState({ error_password_1: 'Debes ingresar una clave' })
            } else {
                if (password_1.length < 8) {
                    this.setState({ error_password_1: 'La clave debe tener mínimo 8 caracteres' })
                }else{
                    this.setState({ error_password_1: '' })
                }
            }
            if (!password_2) {
                this.setState({ error_password_2: 'Debes confirmar tu clave' })
            } else {
                if (password_2.length < 8) {
                    this.setState({ error_password_2: 'La clave debe tener mínimo 8 caracteres' })
                }else{
                    this.setState({ error_password_2: '' })
                }
            }
            if (password_2 !== password_1) {
                this.setState({ error_password_2: 'Debes ingresar la misma clave' })
            }else{
                this.setState({ error_password_2: '' })
            }

        }
    }


    responseGoogle = async (response) => {
        try {
            this.props.cleanForm("0");
            const user = response.profileObj;
            if (user) {
                const formData = {
                    user : {
    
                        id : user.googleId,
                        firstname : user.givenName,
                        lastname : user.familyName,
                        email : user.email,
                        photo : user.imageUrl,
                        provider : "google"
                    }
                }   
        
                const response = await this.props.oauthGoogle(formData);
                if (response.status) {
                    localStorage.setItem('id', response.data.id);
                    localStorage.setItem('infoChiko', true);
                    localStorage.setItem('token', response.data.accessToken)
                    localStorage.setItem('photo', response.data.photo);
                    localStorage.setItem('confirmed', response.data.confirmed);
                    localStorage.setItem('lastname', response.data.lastname);
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('email', response.data.email);
                    localStorage.setItem('role', response.data.role);
        
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();
        
                    window.location.replace('/dashboard');
        
                } else {
                    console.log("error = ", response.message)
                    this.setState({ error_registro: response.message })
                }
            }
        } catch (error) {
            console.log("Error");
        }
    }

    responseFacebook = async (res) => {
        try {
            
            this.props.cleanForm("0");
            const token = res.accessToken;
            const response = await this.props.oauthFacebook(token)
            if (response.status) {
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('infoChiko', true);
                localStorage.setItem('token', response.data.accessToken)
                localStorage.setItem('photo', response.data.photo);
                localStorage.setItem('confirmed', response.data.confirmed);
                localStorage.setItem('lastname', response.data.lastname);
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('role', response.data.role);
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
    
                window.location.replace('/dashboard');
    
            } else {
                console.log("error = ", response.message)
                this.setState({ error_registro: response.message })
            }
        } catch (error) {
            console.log("Error");
            
        }
    }

    render() {
        const {
            cleanFormReducer
        } = this.props;
        let error_name = this.state.error_name;
        let error_lastname_1 = this.state.error_lastname_1;
        let error_lastname_2 = this.state.error_lastname_2;
        let error_email_1 = this.state.error_email_1;
        let error_email_2 = this.state.error_email_2;
        let error_password_1 = this.state.error_password_1;
        let error_password_2 = this.state.error_password_2;
        let error_registro = this.state.error_registro;
        let exito_registro = this.state.exito_registro;
        let error_genre = this.state.error_genre;
        let content_error_name = '';
        let content_error_genre = '';
        let content_error_lastname_1 = '';
        let content_error_lastname_2 = '';
        let content_error_email_1 = '';
        let content_error_email_2 = '';
        let content_error_password_1 = '';
        let content_error_password_2 = '';
        let content_error_registro = '';
        let content_exito_registro = '';

        if (cleanFormReducer) {
            error_name = '';
            error_lastname_1 = '';
            error_lastname_2 = '';
            error_email_1 = '';
            error_email_2 = '';
            error_password_1 = '';
            error_password_2 = '';
            error_registro = '';
            exito_registro = '';
            error_genre = '';
        }

        if (error_name) {
            content_error_name = <p>{error_name}</p>;
        }
        if (error_genre) {
            content_error_genre = <p>{error_genre}</p>;
        }
        if (error_lastname_1) {
            content_error_lastname_1 = <p>{error_lastname_1}</p>;
        }
        if (error_lastname_2) {
            content_error_lastname_2 = <p>{error_lastname_2}</p>;
        }
        if (error_email_1) {
            content_error_email_1 = <p>{error_email_1}</p>;
        }
        if (error_email_2) {
            content_error_email_2 = <p>{error_email_2}</p>;
        }
        if (error_password_1) {
            content_error_password_1 = <p>{error_password_1}</p>;
        }
        if (error_password_2) {
            content_error_password_2 = <p>{error_password_2}</p>;
        }
        if (error_registro) {
            content_error_registro = <div className="error-message"><p>{error_registro}</p></div>;
        }
        if (exito_registro) {
            content_exito_registro = <div className="exito-message"><p>{exito_registro}</p></div>;
        }

        return (
            <View
                responseFacebook={this.responseFacebook}
                responseGoogle={this.responseGoogle}
                logged={this.logged}
                name={this.name}
                lastname_1={this.lastname_1}
                lastname_2={this.lastname_2}
                selectGenre={this.selectGenre}
                email_1={this.email_1}
                email_2={this.email_2}
                password_1={this.password_1}
                password_2={this.password_2}
                isChecked={this.state.isChecked}
                toggleChange={this.toggleChange}
                content_error_name={content_error_name}
                content_error_genre={content_error_genre}
                content_error_lastname_1={content_error_lastname_1}
                content_error_lastname_2={content_error_lastname_2}
                content_error_email_1={content_error_email_1}
                content_error_email_2={content_error_email_2}
                content_error_password_1={content_error_password_1}
                content_error_password_2={content_error_password_2}
                content_error_registro={content_error_registro}
                content_exito_registro={content_exito_registro}
            />
        );
    }
}


const mapStateToProps = state => ({
    cleanFormReducer: state.cleanFormReducer
});

const mapDispatchToProps = {
    cleanForm,
    oauthGoogle,
    oauthFacebook,
    signUp,
    signIn,
    updateUser
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Signup)
)


