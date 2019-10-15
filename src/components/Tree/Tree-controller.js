import React from 'react';
import View from './Tree-view';
import {authToken} from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class Tree extends React.Component {
    state = {
        isConfirmed: localStorage.getItem('confirmed') || "false",
        role: localStorage.getItem('role') || "",
        url: window.location.href,
        conditionShowChooseProfile: false,
        conditionShowCapsule: false,
        conditionShowTreeContainer: false,
    }

    async componentDidMount() {
        const { url, isConfirmed } = this.state;
        const token = url.substr(url.indexOf("token") + 6);
        // alert(token);
        if(url.indexOf("token") !== -1){
            const response = await mapDispatchToProps.authToken(token);
            console.log("response = ", response);
            // if(response.status){
            //     localStorage.setItem('token',token)
            //     localStorage.setItem('confirmed',response.data.confirmed);
            //     localStorage.setItem('lastname',response.data.lastname);
            //     localStorage.setItem('name',response.data.name);
            //     localStorage.setItem('email',response.data.email);
            //     localStorage.setItem('role',response.data.role)
            //     window.location.href = "/dashboard";
            // }else{
            //     alert(response.message)
            // }
            localStorage.setItem('token',token)
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
    }

    showTreeContainer = async () => {
        this.setState({
            conditionShowTreeContainer: true,
        });
    }

    render() {

        let {conditionShowCapsule, conditionShowTreeContainer} = this.state;
        let blockTree=<br/>;
        if(this.state.isConfirmed === "false"){
            blockTree = <div className="Tree"><div className="Tree-plus">Favor de verificar su cuenta, revisar su correo electrónico!</div></div>;
        }
        if(this.state.isConfirmed === "true" && (this.state.role === "employee" || this.state.role === "entrepreneur")){
            conditionShowCapsule = true;
        }

        // this.analyzeUrl();

        return (
            <View
            blockTree={blockTree}
            conditionShowChooseProfile = {this.state.conditionShowChooseProfile}
            conditionShowCapsule = {conditionShowCapsule}
            conditionShowTreeContainer = {conditionShowTreeContainer}
            showTreeContainer = {this.showTreeContainer}
            />
        );
    }
}


const mapDispatchToProps = {
    authToken
};


export default withRouter(
    connect(null, mapDispatchToProps)(Tree)
)
