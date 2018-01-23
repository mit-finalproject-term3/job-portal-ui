import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../../services/authService';
class Logout extends Component {
  constructor(props) {
    super(props);
    AuthService.logout();
  }

  render() {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: this.props.location }
        }}
      />
    );
  }
}

export default Logout;
