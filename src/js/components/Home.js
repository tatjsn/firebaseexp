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

const Home = ({ entries }) => {
  return (
    <div className="row">
      <div class="list-group">
        {entries.map((entry, i) => <Link className="list-group-item" key={'entry.' + i} to="#">{entry.text}</Link>)}
      </div>
    </div>
  );
}

export default connect(state => ({
  entries: state.entries
}))(Home);
