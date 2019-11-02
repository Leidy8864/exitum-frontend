
import React from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

class HomeRoute extends React.Component {

    isLogged() {
        const token = localStorage.getItem("token");

        if (token == null) {
            return true;
        } else {
            return false;
        };
    }

    render() {

        const { component: Component, ...props } = this.props;
        return (
            <Route
                {...props}
                render={props => (
                    this.isLogged() ?
                      <Component {...props} /> :
                      <Redirect to='/dashboard' />
                  )} 
            />
        )
    }
}

export default HomeRoute;