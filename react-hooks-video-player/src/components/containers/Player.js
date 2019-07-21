// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import { ThemeProvider } from 'styled-components';
import StyledPlayer from '../styles/StyledPlayer';
import videos from '../../videoDB.js';

const themeDark = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff'
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535 ',
  borderPlayed: 'none',
  color: '#353535'
};

const Player = ({ history, location, match }) => {
  const nightmodeCallback = () => {};
  const endCallback = () => {};
  const progressCallback = () => {};

  // const videos =  JSON.parse(document.querySelector('[name="videos"]').value)

  const [state, setstate] = useState({
    nightMode: true,
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    playlistId: videos.playlistId,
    autoPlay: false
  });

  useEffect(() => {
    // check if url has an active video id
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      let currentActiveVideoIndex = state.videos.findIndex(
        vid => vid.id === videoId
      );
      
      if (currentActiveVideoIndex < 0) {
        currentActiveVideoIndex = 0
      }
      setstate(prev => {
        history.push({
          pathname: `/${prev.videos[currentActiveVideoIndex].id}`,
          autoplay: false
        });
        return {
          ...prev,
          activeVideo: prev.videos[currentActiveVideoIndex],
          autoPlay: location.autoplay
        };
      });
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false
      });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos
  ]);

  return (
    <ThemeProvider theme={state.nightMode ? themeDark : themeLight}>
      {state.videos !== null ? (
        <StyledPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoPlay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightMode={state.nightMode}
            nightmodeCallback={nightmodeCallback}
          />
        </StyledPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default Player;
