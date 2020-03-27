import React from 'react' 
import VideoItem from './VideoItem'

const VideosList = (props) => {
const renderedList = props.videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelected={props.onVideoSelected}/>
})

    return <div className="ui relaxed devided list" > {renderedList} </div>;
};

export default VideosList