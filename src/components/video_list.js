import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videosItem = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  })

  return (
    <ul className='col-md-4 list-group'>
      {videosItem}
    </ul>
  )
}

export default VideoList
