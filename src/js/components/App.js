import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions';

function createHandleClick(dispatch) {
  return e => {
    e.preventDefault();
    dispatch(login());
  }
}

const App = ({ auth, dispatch, children }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Test</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            {auth.uid ? <Link className="nav-link" to="/post">Post</Link> :
              <Link className="nav-link" to="#" onClick={createHandleClick(dispatch)}>Login</Link>}
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default connect(state => ({
  auth: state.auth
}))(App);
