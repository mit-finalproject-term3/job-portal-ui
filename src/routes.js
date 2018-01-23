import React from 'react';
import { Route } from 'react-router';
import App from './App';
import AboutPage from './components/AboutPage';
import SearchPage from './components/SearchPage';
import ApplyPage from './components/ApplyPage';
import PostAJob from './components/PostAJob';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={SearchPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/applypage" component={ApplyPage} />
    <Route path="/postajob" component={PostAJob} />
  </Route>
);

// function requireAuth(nextState, replace) {
//   if (!sessionStorage.jwt) replace({ pathname: '/' })
// }
//
// function redirectToHomeIfLoggedIn() {
//   if(!!sessionStorage.jwt) browserHistory.push('/')
// }
