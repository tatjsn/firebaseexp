import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Home = ({ entries = [] }) => {
  return (
    <div>
      {entries.map((entry, i) => <p key={'entry.' + i}>text={entry.text}</p>)}
      <p>
        <Link to="/post">Post</Link>
      </p>
    </div>
  );
}

export default connect(state => ({ entries: state.entries }))(Home);
