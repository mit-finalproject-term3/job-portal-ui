import 'whatwg-fetch';
import { notification } from 'antd';
import { push } from 'react-router-redux';
import store from '../store';
//const BaseUrl = 'http://localhost:9000/api';
const BaseUrl =
  'https://3k0sunttgl.execute-api.ap-southeast-2.amazonaws.com/prod/api';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext =
    response.statusText ||
    "We couldn't process your request, Plesae try again later";
  notification.error({
    message: `Error ${response.status}: ${response.statusText}`,
    description: errortext
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {};
  const token = sessionStorage.getItem('jwt');
  const newOptions = { ...defaultOptions, ...options };
  newOptions.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    ...newOptions.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : null)
  };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(`${BaseUrl}${url}`, newOptions)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch(e => {
      const { dispatch } = store;
      const status = e.name;
      if (status === 401) {
        dispatch({
          type: 'logout'
        });
        return;
      }
      if (status === 403) {
        dispatch(push('/exception/403'));
        return;
      }
      if (status <= 504 && status >= 500) {
        dispatch(push('/exception/500'));
        return;
      }
      if (status >= 404 && status < 422) {
        dispatch(push('/exception/404'));
      }
    });
}
