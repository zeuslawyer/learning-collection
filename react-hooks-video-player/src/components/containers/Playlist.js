import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

function Playlist({ videos, active, nightmodeCallback, nightMode }) {
  return (
    <StyledPlaylist>
      <Nightmode nightmodeCallback={nightmodeCallback} nightMode={nightMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems videos={videos} active={active} nightMode={nightMode} />
    </StyledPlaylist>
  );
}

export default Playlist;
