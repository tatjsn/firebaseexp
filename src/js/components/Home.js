import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions';
import Markdown from './Markdown';

function createHandleClick(dispatch) {
  return e => {
    e.preventDefault();
    dispatch(login());
  }
}

const Home = ({ entries }) => {
  return (
    <div className="row">
      <div className="list-group">
        {entries.map((entry, i) =>
          <Link className="list-group-item" key={'entry.' + i} to="#">
            <Markdown>{entry.text}</Markdown>
          </Link>)}
      </div>
    </div>
  );
}

export default connect(state => ({
  entries: state.entries
}))(Home);
