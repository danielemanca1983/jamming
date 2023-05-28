import React from 'react'
import './Track.scss'

const Track = ({ track }) => {
  return (
    <div>
      <h3>{track.name}</h3>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
    </div>
  )
}

export default Track
