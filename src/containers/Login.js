import React, { Component } from 'react';
import { login } from '../actions/user';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  render() {
    return <button onClick={this.props.login}>Login Here!</button>;
  }
}

const Login = connect(null, dispatch => ({
  login: () => {
    dispatch(login());
  }
}))(LoginContainer);

export default Login;
