import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions';

const Home = ({ entries, auth, dispatch}) => {
  return (
    <div>
      {entries.map((entry, i) => <p key={'entry.' + i}>text={entry.text}</p>)}
      <p>{auth.uid ? <Link to="/post">Post</Link> :
        <button onClick={() => dispatch(login())}>Login</button>}
      </p>
    </div>
  );
}

export default connect(state => ({
  entries: state.entries,
  auth: state.auth
}))(Home);
