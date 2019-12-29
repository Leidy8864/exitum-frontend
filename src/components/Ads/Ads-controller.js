
import React from 'react';
import View from './Ads-view';
import {authToken} from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cleanForm from '../../redux/actions/clean-form'
import $ from 'jquery';
import { updateLastLogin } from '../../libs/helper';

class Ads extends React.Component {

    state = {
        isConfirmed: localStorage.getItem('confirmed') || "false",
        url: window.location.href,
        conditionShowChooseProfile: false,
    }

    async componentDidMount() {

        const { url, isConfirmed } = this.state;
        const token = url.substr(url.indexOf("token") + 6);
        // alert(token);
        if(url.indexOf("token") !== -1){
            const response = await mapDispatchToProps.authToken(token);

            localStorage.setItem('id',response.data.id);
            localStorage.setItem('token',token);
            localStorage.setItem('confirmed',response.data.confirmed);
            localStorage.setItem('lastname',response.data.lastname);
            localStorage.setItem('name',response.data.name);
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('role',response.data.role)
            window.location.href = "/dashboard";
        }
        else{
            const role = localStorage.getItem('role');
            if(isConfirmed === "true"){ 
                if(role === "undefined" || role === "" || !role){
                    this.setState({ conditionShowChooseProfile: true });
                }
            }
        }
        updateLastLogin();

    }

    cleanForm = () => {
        $('#title').val('');
        $('#description').val('');
        this.props.cleanForm("1");
    }

    render() {
        return (
            <View
                conditionShowChooseProfile = {this.state.conditionShowChooseProfile}
                cleanForm={this.cleanForm}
            />
        );
    }
}

const mapDispatchToProps = {
    authToken,
    cleanForm
};


export default withRouter(
    connect(null, mapDispatchToProps)(Ads)
)

