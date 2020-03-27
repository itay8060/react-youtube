import React from 'react'

const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/"
const VideoDetails = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const videoSrc = YOUTUBE_BASE_URL + `${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails