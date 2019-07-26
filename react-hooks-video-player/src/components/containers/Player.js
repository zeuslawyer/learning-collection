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
  color: '#fff',
  urlColor: 'white'
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535 ',
  borderPlayed: 'none',
  color: '#353535',
  visitedUrlCol: 'purple'
};

const Player = ({ history, location, match }) => {
  const localStorageState = JSON.parse(
    window.localStorage.getItem(`${videos.playlistId}`)
  );

  const [state, setState] = useState({
    nightMode: localStorageState ? localStorageState.nightMode : false,
    videos: localStorageState ? localStorageState.videos : videos.playlist,
    activeVideo: localStorageState
      ? localStorageState.activeVideo
      : videos.playlist[0],
    playlistId: localStorageState
      ? localStorageState.playlistId
      : videos.playlistId,
    autoPlay: localStorageState ? localStorageState.autoPlay : false
  });

  const activeTheme = state.nightMode ? themeDark : themeLight;

  const nightmodeCallback = () => {
    setState(prev => {
      return {
        ...prev,
        nightMode: !prev.nightMode
      };
    });
  };
  const endCallback = () => {
    const currentVideoId = match.params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      vid => vid.id === currentVideoId
    );

    const nextVideoIndex =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    history.push({
      pathname: `/${state.videos[nextVideoIndex].id}`,
      autoplay: true
    });
  };
  const progressCallback = event => {
    if (event.playedSeconds > 10 && event.playedSeconds < 11) {
      let videos = [...state.videos];
      const playedVideo = videos.find(vid => vid.id === state.activeVideo.id);
      playedVideo.played = true;
      console.log('progress:  ', playedVideo);

      setState(prev => {
        return {
          ...prev,
          videos
        };
      });
    }
  };

  // USE LOCAL STORAGE FOR MAINTAINING STATE
  useEffect(() => {
    localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }));
  }, [state]);
  // HANDLE URL VIDEO ID CHANGES
  useEffect(() => {
    // check if url has an active video id
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      let currentVideoIndex = state.videos.findIndex(vid => vid.id === videoId);

      if (currentVideoIndex < 0) {
        currentVideoIndex = 0;
      }

      setState(prev => {
        return {
          ...prev,
          activeVideo: prev.videos[currentVideoIndex],
          autoPlay: location.autoplay
        };
      });

      // update url path
      history.push({
        pathname: `/${state.videos[currentVideoIndex].id}`,
        autoplay: false
      });
    } else {
      // go back to first video
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
    <ThemeProvider theme={activeTheme}>
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
