import React, { useEffect, useState } from 'react';
import './Playlist.css';
import song1 from './song1.mp4';
import song2 from './song2.mp4';

function VideoPlaylist() {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0); // State for storing the video duration
  const data = [
    {
      id: 'a1',
      title: 'song1',
      name: 'song1.mp4',
      duration: '0.09',
      link: song1
    },
    {
      id: 'a2',
      title: 'song2',
      name: 'song2.mp4',
      duration: '0.09',
      link: song2
    },
    // Add other video data here...
  ];

  useEffect(() => {
    const createPlaylistItems = () => {
      return data.map((video, i) => (
        <div
          className={i === activeVideoIndex ? 'video_play active' : 'video_play'}
          data-id={video.id}
          key={video.id}
          onClick={() => handleVideoClick(i)}
        >
          <p>{i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
          <h3 className="playlist_title">{video.title}</h3>
          <p className="time">{i === activeVideoIndex ? formatTime(videoDuration) : video.duration}</p>
        </div>
      ));
    };

    setPlaylistItems(createPlaylistItems());
  }, [activeVideoIndex, videoDuration]);

  const handleVideoClick = (index) => {
    setActiveVideoIndex(index);
    setVideoDuration(0); // Reset video duration when a new video is clicked
  };

  const handleVideoTimeUpdate = (event) => {
    const { currentTime, duration } = event.target;
    setVideoDuration(duration ? currentTime : 0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className='bd'>
    <div className="container">
      <header className="playlist-header">
        <h1>Video Playlist</h1>
      </header>

      <body className='background_playlist'>
        <div className="playlist_container">
          <section className="main-video">
            <video
              src={data[activeVideoIndex].link}
              controls
              autoPlay
              onTimeUpdate={handleVideoTimeUpdate}
            />
            <h3 className="title">{data[activeVideoIndex].title}</h3>
          </section>

          <section className="video-playlist">
            <h3 className="title">Title of Video Playlist</h3>
            <p>10 lessons &nbsp; . &nbsp; 50m 48s</p>
            <div className="videos_list">{playlistItems}</div>
          </section>
        </div>
      </body>
    </div>
    </div>
  );
}

export default VideoPlaylist;