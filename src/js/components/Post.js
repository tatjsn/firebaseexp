import React from 'react';
import { connect } from 'react-redux';
import { post } from '../actions';

const Post = ({ dispatch }) => {
  return (
    <div>
      <textarea rows="20">Hello</textarea>
      <p>
        <button onClick={() => dispatch(post('Haa'))}>Post</button>
      </p>
    </div>
  );
}

export default connect(state => ({ auth: state.auth }))(Post);
