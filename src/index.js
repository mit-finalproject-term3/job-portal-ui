import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import store from './store';
import App from './App';
import Auth from './containers/Auth/Auth';
import Callback from './containers/Callback/Callback';

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

export default store;
