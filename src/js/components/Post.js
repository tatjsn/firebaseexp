import React from 'react';
import { connect } from 'react-redux';
import { post } from '../actions';

class Post extends React.Component {
  handlePost() {
    const {dispatch, history, state} = this.props;
    dispatch(post(this.refs.text.value, history, state));
  }

  // https://phabricator.babeljs.io/T2779
  render() {
    return (
      <div>
        <textarea rows="20" ref="text" defaultValue="Hello"></textarea>
        <p>
          <button onClick={::this.handlePost}>Post</button>
        </p>
      </div>
    );
  }
}

export default connect(state => ({ auth: state.auth }))(Post);
