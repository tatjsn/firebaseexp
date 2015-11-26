import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { app } from './reducers';
import { init, receiveEntry } from './actions';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() from actions
)(createStore);
const store = createStoreWithMiddleware(app);

store.dispatch(init());

render((
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="post" component={Post} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>
), document.getElementById('app'))
