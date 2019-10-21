
import React from 'react';
import View from './ResetPassword-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { verifyToken, resetPassword } from '../../redux/actions/index';
class ResetPassword extends React.Component {
    state = {
        url: window.location.href,
        error: false,
        isLoading: true,
        error_message: '',
        new_password: '',
        verify_password: '',
        user_id: ''
    }

    async componentDidMount() {

        const { url } = this.state;

        const indexToken = url.indexOf("token")
        const token = url.substr(indexToken + 6);

        if (indexToken !== -1) {

            const response = await verifyToken(token);
            
            console.log("TOKEN ENVIADO", token)

            console.log("RESPONSE VERIFY", response)
            if (response.status) {
                this.setState({
                    error: false,
                    isLoading: false,
                    user_id: response.data.user_id
                });
            } else {
                this.setState({
                    error: true,
                    isLoading: false
                });
            }
        } else {
            window.location.href = "/";
        }

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {

        this.setState({
            error_message: ''
        });

        e.preventDefault();
        const { new_password, verify_password, user_id } = this.state;

        const formData = {
            new_password,
            verify_password,
            user_id
        }


        if (new_password && verify_password) {
            if (new_password.length && verify_password.length >= 8) {
                if (new_password === verify_password) {
                    const response = await resetPassword(formData);
                    if (response.status) {
                        localStorage.setItem('token', response.data.accessToken)
                        localStorage.setItem('confirmed', response.data.confirmed);
                        localStorage.setItem('lastname', response.data.lastname);
                        localStorage.setItem('name', response.data.name);
                        localStorage.setItem('email', response.data.email);
                        localStorage.setItem('role', response.data.role);

                        console.log("RESPUESTA DE INFO", response);
                        this.props.history.push('/dashboard');

                    } else {
                        console.log("ERROR EN LA RESPUESTA", response.message);
                        this.setState({
                            error_message: response.message
                        })
                    }
                } else {
                    this.setState({
                        error_message: 'Las contraseñas deben coincidir'
                    });
                }
            } else {
                this.setState({
                    error_message: 'Las contraseñas deben contener al menos 8 caracteres '
                });
            }
        } else {
            this.setState({
                error_message: 'Las campos son obligatorios'
            });
        }
    }
    render() {

        const { error, isLoading } = this.state;

        if (isLoading) {
            return (
                <div></div>
            );
        } else {

            let error_message = this.state.error_message;

            let content_error_message = '';

            if (error) {
                content_error_message = <div className="error-message col-sm-12"><p id="error-message">{error_message}</p></div>;
            }
            return (
                <View
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    content_error_message={content_error_message}
                    error = {error}
                />
            );
        }
    }
}
const mapDispatchToProps = {
    verifyToken,
    resetPassword
};

export default withRouter(
    connect(null, mapDispatchToProps)(ResetPassword)
)
