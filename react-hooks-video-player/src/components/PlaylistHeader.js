import React from 'react';
import StyledPlaylistHeader from './styles/StyledPlaylistHeader';
import StyledJourney from './styles/StyledJourney';

function PlaylistHeader({ active, total }) {
  return (
    <StyledPlaylistHeader>
      <p>{active.title}</p>
      <StyledJourney>
        <p>
          {active.num} / {total}
        </p>
      </StyledJourney>
    </StyledPlaylistHeader>
  );
}

export default PlaylistHeader;
