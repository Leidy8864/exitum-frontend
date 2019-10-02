import React from 'react';
import View from './Signin-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions  from '../../redux/actions'
import $ from 'jquery'

class Signin extends React.Component {


    state = {
        email: '',
        password: ''
    }

    email = e => {
        this.setState({ email: e.target.value })
    }

    password = e => {
        this.setState({ password: e.target.value })
    }

    forgetPass = e => {
        e.preventDefault(e);
    }

    logged = e => {
        e.preventDefault();
        const {email, password} = this.state
        const formData = {
            email,
            password
        }
        console.log('onSubmit() is called')
        console.log('form data', formData)
        this.props.signIn(formData);
        if (!this.props.errorMessage) {
            this.props.history.push('/dashboard')
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }
    }


    async responseGoggle(res) {
        console.log('responseGoggle', res);
        console.log('typeof res', typeof res)
        await this.props.oauthGoogle(res.accessToken)
        if (!this.props.errorMessage) {
            this.props.history.push('/dashboard');
            $('body').removeClass('modal-open');
            $('#signin').removeClass('show');
            $('.modal-backdrop').remove();
        }
    }

    async responseFacebook(res) {
        console.log('responseFacebook', res);
        await this.props.oauthFacebook(res.accessToken)
        if (!this.props.errorMessage) {
            this.props.history.push('/dashboard');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }
    }

    render() {

        return (
            <View
                responseFacebook={this.responseFacebook}
                responseGoggle={this.responseGoggle}
                logged={this.logged}
                email={this.email}
                password={this.password}
                forgetPass={this.forgetPass}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Signin)
)

