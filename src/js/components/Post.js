import React from 'react';
import { connect } from 'react-redux';
import { post } from '../actions';

class Post extends React.Component {
  handlePost() {
    this.props.dispatch(post(this.refs.text.value));
  }

  // https://phabricator.babeljs.io/T2779
  render() {
    return (
      <div className="row">
        <textarea className="form-control" rows="3" ref="text" defaultValue="Hello"></textarea>
        <button type="button" className="btn btn-primary-outline" onClick={::this.handlePost}>Post</button>
      </div>
    );
  }
}

export default connect(state => ({ auth: state.auth }))(Post);
