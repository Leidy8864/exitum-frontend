
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class ChooseProfileRoute extends React.Component {


    hasRole() {
        const role = localStorage.getItem("role");

        console.log("ROLE",role);

        if (role != 'undefined') {
            return false
        } else {
            return true;
        };
    }

    render() {

        const { component: Component, ...props } = this.props;
        return (
            <Route
                {...props}
                render={props => (
                    this.hasRole() ?
                      <Component {...props} /> :
                      <Redirect to='/dashboard' />
                  )} 
            />
        )
    }
}

export default ChooseProfileRoute;