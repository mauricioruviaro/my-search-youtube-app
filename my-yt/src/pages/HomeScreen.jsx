import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        {`bem vindo ${ name }`}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  loading: state.videos.loading,
  videos: state.videos.videos,
  error: state.videos.error,
});

export default connect(mapStateToProps)(HomeScreen)