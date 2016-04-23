import React, { Component } from 'react';

// functional component versus class component
  // less expensive than class component
  // use when component doesn't care about state, doesn't render things
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      // want to render list-item component
      <li key={video.etag}>{video.snippet.title}</li>
    )
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}



export default VideoList;
