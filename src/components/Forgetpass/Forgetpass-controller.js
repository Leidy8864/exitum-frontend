import React from 'react';
import View from './Forgetpass-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { forgotPassword } from '../../redux/actions/index';
import cleanForm from '../../redux/actions/clean-form'

import $ from 'jquery'


class Forgetpass extends React.Component {
    state = {
        email: '',
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
            email: e.target.value
        });

    }


    handleSubmit = async e => {
        this.props.cleanForm("0");

        this.setState({
            success_message: '',
            error_message: '',
            error_email: ''
        });

        e.preventDefault();

        const { email } = this.state;

        const formData = {
            email
        }

        if (email) {
            const response = await forgotPassword(formData)

            if (response.status) {

                this.setState({
                    email: '',
                    success_message: response.message
                });

                setTimeout(
                    () => {
                        $('#forgetpass').modal('hide');
                        $('#signin').modal('show');
                    },
                    3000
                )
            } else {
                this.setState({
                    email: '',
                    error_message: response.message,
                });
                $('#email').val('');
            }
        } else {
            this.setState({
                email: '',
                error_email: 'Debes ingresar un email válido',
            });
            $('#email').val('');
        }
    }

    render() {
        const {
            cleanFormReducer
        } = this.props;

        let success_message = this.state.success_message;
        let error_message = this.state.error_message;
        let error_email = this.state.error_email;
        var content_messsage = '';
        var content_error_email = '';

        if (cleanFormReducer) {
            success_message = '';
            error_message = '';
            error_email = '';
            error_email = '';
        }

        if (success_message) {
            content_messsage = <div className="success-message"><p>{success_message}</p></div>;
        }
        if (error_message) {
            content_messsage = <div className="error-message"><p>{error_message}</p></div>;
        }
        if (error_email) {
            content_error_email = <div className="error-message"><p>{error_email}</p></div>;

        }
        return (
            <View
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                content_messsage={content_messsage}
                content_error_email={content_error_email}
            />
        );
    }
}

const mapStateToProps = state => ({
    cleanFormReducer: state.cleanFormReducer
});

const mapDispatchToProps = {
    cleanForm,
    forgotPassword
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Forgetpass)
)