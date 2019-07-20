import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems'
import Nightmode from '../Nightmode'


function Playlist() {
  return (
    <>
      <Nightmode />
      <PlaylistHeader />
      <PlaylistItems />
    </>
  )
}

export default Playlist
