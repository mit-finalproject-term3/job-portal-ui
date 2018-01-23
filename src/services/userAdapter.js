import { push } from 'react-router-redux';
import request from '../utils/request';
import store from '../store';
const { dispatch } = store;
// const url = 'https://a-junior-dev.herokuapp.com/v1/'
// const dev_url = 'https://localhost:3000/v1/'

export const userAdapter = {
  login: credentials => {
    return request('/login', {
      method: 'POST',
      body: credentials
    })
      .then(response => {
        sessionStorage.setItem('jwt', response.data.jwt);
        dispatch({
          type: 'AUTH_SUCCESS'
        });
        dispatch(push('/'));

        return response.data;
      })
      .catch(error => {
        console.log('Failed login to server');
        dispatch({
          type: 'AUTH_FAIL'
        });
        return error;
      });
  },

  fetchCurrentUser: () => {
    return request('/user')
      .then(response => response.data)
      .catch(error => {
        console.log('Failed fetch user from server');
        return error;
      });
  }
};
