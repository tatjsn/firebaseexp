import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import Home from './components/Home';
import Post from './components/Post';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { app } from './reducers';
import { receiveEntry } from './actions';
import Firebase from 'firebase';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() from actions
)(createStore);
const store = createStoreWithMiddleware(app);

const ref = new Firebase('https://tatdbg-001.firebaseio.com');
ref.onAuth(auth => {
  if (auth) {
    console.log('uid=', auth.uid);
  } else {
    console.log('no auth');
  }
});

function authWithPopup() {
  ref.authWithOAuthPopup('google', (error, auth) => {
    if (error) {
      console.log('Login failed', error);
    } else {
      console.log('Back from popup: uid=', auth.uid);
    }
  });
}

ref.child('entries').orderByKey().limitToLast(3).on('child_added', snapshot => {
  store.dispatch(receiveEntry(snapshot.val()));
});

render((
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Home} />
      <Route path="/post" component={Post} />
      <Redirect from="*" to="/" />
    </Router>
  </Provider>
), document.getElementById('app'))
