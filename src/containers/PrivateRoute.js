import React, { Component } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;
    const { isAuthenticated } = this.props.auth;
    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
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
