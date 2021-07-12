import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getYoutubeVideos } from '../actions'

class HomeScreen extends Component {
  componentDidMount() {
    const { getVideos } = this.props;
    getVideos()
  }
  render() {
    const { name, loading } = this.props;
    return (
      loading ? <>Loading</> : <>Não loading</>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  loading: state.videos.loading,
  videos: state.videos.videos,
  error: state.videos.error,
});

const mapDispatchToProps = (dispatch) => ({
  getVideos: (search) => dispatch(getYoutubeVideos(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)