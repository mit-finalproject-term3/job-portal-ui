import React, { PureComponent } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import isAuthenticated from './isAuthenticated';

class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, ...props } = this.props;
    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
