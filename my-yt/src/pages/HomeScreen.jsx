import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getYoutubeVideos } from '../actions'

class HomeScreen extends Component {
  componentDidMount() {
    const { getVideos } = this.props;
    getVideos()
  }
  render() {
    const { name, loading, videos } = this.props;
    return (
      <main>
        <header>
          <p>YT LOGO</p>
          <nav>
            {name}
          </nav>
        </header>
        {loading ? <p>Loading videos</p> : <div>{ videos[0].items.map((video, index) => <p key={ index }>{video.snippet.title}</p>) }</div>
        }
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getVideos: (search) => dispatch(getYoutubeVideos(search))
});

const mapStateToProps = (state) => ({
  name: state.user.name,
  loading: state.videos.loading,
  videos: state.videos.videos,
  error: state.videos.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)