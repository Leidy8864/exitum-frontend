
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isTokenExpired } from '../libs/helper';

class ProtectedRoute extends React.Component {
  render() {
    const { component: Component, ...props } = this.props;
    return (
      <Route
        {...props}
        render={props => {
          if (!isTokenExpired()) {
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