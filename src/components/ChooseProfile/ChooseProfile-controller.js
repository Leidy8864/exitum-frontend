
import React from 'react';
import View from './ChooseProfile-view';
import jwt from 'jsonwebtoken';

import { connect } from "react-redux"
import { updateUser } from '../../redux/actions';
import { withRouter } from 'react-router-dom'
import * as actions  from '../../redux/actions'

class ChooseProfile extends React.Component {

    handleChangeRole = async (e) =>{     

        const token = localStorage.getItem('token');
        
        const result = jwt.decode(token);

        const data = {
            user_id : result.id,
            [e.target.name] : e.target.value,
        }
        const respone = await updateUser(data);
        console.log("respone = ", respone)
        localStorage.setItem('role',respone.data.role);

        // this.props.history.push('/dashboard');
        window.location.href = "/dashboard";

    }

    render() {
        return (
            <View
            handleChangeRole = {this.handleChangeRole}
            email = {this.email}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            form = {this.state}
            />
        );
    }
    // mapDispatchToProps = dispatch => ({
    //     updateUser(data){
    //         dispatch(updateUser(data))
    //     }
    // });
}

export default withRouter(
    connect(null,actions)(ChooseProfile)
);