import React from 'react';
import View from './Forgetpass-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../redux/actions/'
import $ from 'jquery'


class Forgetpass extends React.Component {
    state = {
        form: {
            email: ''
        },
        success_message: '',
        error_message: '',
        error_email: ''
    }
    sendEmail = e => {
        e.preventDefault();
        $('#forgetpass').modal('hide');
        $('#signin').modal('show');

    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                email: e.target.value
            }
        });

    }


    handleSubmit = async e => {
        this.setState({
            success_message: '',
            error_message: '',
            error_email: ''
        });

        e.preventDefault();
        const {email} = this.state.form;

        console.log("STATE FORM",email);

        const formData = {
            email
        }
        // console.log("formdata",formData);
        console.log("EMAIL",email);

        if (email) {
            // console.log("EMAIL",data.email);

            const response = await actions.forgotPassword(formData)

            console.log("DATA RESPONSE", response);

            if (response.status) {
                console.log("DATA RESPONSE", response);
                this.setState({
                    success_message: response.message
                });

                console.log("success message", this.state);
            } else {
                console.log("error reset password", response.message);

                this.setState({
                    error_message: response.message
                });
            }
        } else {
            this.setState({
                error_email: 'Debes ingresar un email válido',
            });
            console.log("Error")
        }
    }

    render() {
        let success_message = this.state.success_message;
        let error_message = this.state.error_message;
        let error_email = this.state.error_email;
        var content_messsage = '';
        var content_error_email = '';

        if (success_message) {
            content_messsage = <div className="exito-message"><p>{success_message}</p></div>;
        }
        if (error_message) {
            content_messsage = <div className="error-message"><p>{error_message}</p></div>;
        }
        if (error_email) {
            content_error_email = <div className="error-message"><p>{error_email}</p></div>;

        }
        return (
            <View
                sendEmail={this.sendEmail}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                content_messsage={content_messsage}
                content_error_email={content_error_email}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Forgetpass)
)