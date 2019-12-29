
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../libs/helper';

class HomeRoute extends React.Component {
    render() {
        const { component: Component, ...props } = this.props;
        return (
            <Route
                {...props}
                render={props => (
                    isLogged() === false ?
                        <Component {...props} /> :
                        <Redirect to='/dashboard' />
                )}
            />
        )
    }
}

export default HomeRoute;