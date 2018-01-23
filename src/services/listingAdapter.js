import request from '../utils/request';
import { push } from 'react-router-redux';
import store from '../store';

export const listingAdapter = {
  fetchAllListings: () => {
    return request('/jobs', { method: 'GET' }).then(response => response);
  },

  createListing: listing => {
    return request('/jobs', {
      method: 'POST',
      body: listing
    }).then(response => {
      store.dispatch(push('/'));
      return response;
    });
  }
};
