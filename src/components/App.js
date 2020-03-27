import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideosList'
import VideoDetails from './VideoDetails'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyB2wfnIa1pMfBuPkJO9OdQJchwg9iYL3B8';

class App extends React.Component {
    state = {videos: [], selectedVideo: null}

onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
        params: {
            q: term,
            part: 'snippet',
            maxResults: '5',
            type: 'video',
            key: KEY
        }
    });

    this.setState({
        videos: response.data.items, 
        selectedVideo: response.data.items[0]
    })
};

componentDidMount() {
    this.onTermSubmit('buildings')
}

onVideoSelected = (video) => {
    console.log(video.snippet.title)

    this.setState({selectedVideo: video});
}

    render () {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App