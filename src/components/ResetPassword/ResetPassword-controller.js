
import React from 'react';
import View from './ResetPassword-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/index';

class ResetPassword extends React.Component {

    async componentDidMount(){
        console.log("TOKEN",this.props.match.params.token);
        const token = this.props.match.params.token;
        const response = await resetPassword(token);

        if (response.status) {
            alert('Todo bien');
        }else{
            alert('Aggg');
        }
    }
    render() {
        return (
            <View/>
        );
    }
}
const mapDispatchToProps = {
    resetPassword
};

export default withRouter(
    connect(null, mapDispatchToProps)(ResetPassword)
)
