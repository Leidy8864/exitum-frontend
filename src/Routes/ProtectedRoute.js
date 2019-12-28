
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    isLogged = () => {
        const token = localStorage.getItem("token");
        if (token) {
            return true
        }else{
            return false
        }
    }

    render() {
        const { component: Component, ...props } = this.props;
        return (
            <Route
                {...props}
                render={props => {
                    if (this.isLogged()) {
                        return <Component {...props} />;
                      } else {
                        return (
                          <Redirect
                            to={{
                              pathname: "/",
                              state: {
                                from: props.location
                              }
                            }}
                          />
                        );
                      }
                }
                }
            />
        )
    }
}

export default ProtectedRoute;