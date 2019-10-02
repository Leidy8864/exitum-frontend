import React from 'react';
import View from './Signup-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions  from '../../redux/actions'
import $ from 'jquery'

class Signup extends React.Component {


    state = {
        name: '',
        lastName: '',
        email: '',
        password: ''
    }

    name = e => {
        this.setState({ name: e.target.value })
    }

    lastName = e => {
        this.setState({ lastName: e.target.value })
    }

    email = e => {
        this.setState({ email: e.target.value })
    }

    password = e => {
        this.setState({ password: e.target.value })
    }

    logged = e => {
        e.preventDefault();
        const {name,lastName,email, password} = this.state
        const formData = {
            name,
            lastName,
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
                name={this.name}
                lastName={this.lastName}
                email={this.email}
                password={this.password}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Signup)
)


