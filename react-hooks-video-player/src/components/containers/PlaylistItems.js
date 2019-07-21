import React from 'react';
import PlaylistItem from '../PlaylistItem';
import StyledPlayListItems from '../styles/StyledPlaylistitems';
import withLink from '../hoc/withLink';

const PlayListItemWithHOC = withLink(PlaylistItem);

function PlaylistItems({ videos, active, nightMode }) {
  return (
    <StyledPlayListItems>
      {videos.map(video => (
        <PlayListItemWithHOC
          key={video.id}
          video={video}
          active={active.id === video.id ? true : false}
          played={video.played}
          nightMode ={nightMode}
        />
      ))}
    </StyledPlayListItems>
  );
}

export default PlaylistItems;
