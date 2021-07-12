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
        {loading ? <p>Loading videos</p> : <div>{ videos[0].items.map((video, index) => (
          <div key={ index }>
            <img src={video.snippet.thumbnails.medium.url} alt={ video.snippet.title }/>
            <h5>{video.snippet.title}</h5>
            {/* <iframe src={`https://youtube.com/embed/${video.id.videoId}`} title={ video.snippet.title } width="300px" height="150px"></iframe> */}
          </div>
        )) }</div>
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