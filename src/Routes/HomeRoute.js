
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../libs/helper';

class HomeRoute extends React.Component {
    isNotLogged = () => {
        const token = localStorage.getItem('token');

        if (!token) {
            return true;
        } else {
            return false
        }
    }
    render() {
        const { component: Component, ...props } = this.props;
        return (
            <Route
                {...props}
                render={props => (
                    this.isNotLogged() ?
                        <Component {...props} /> :
                        <Redirect to='/dashboard' />
                )}
            />
        )
    }
}

export default HomeRoute;