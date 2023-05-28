import React, { useState } from 'react';
import './Searchbar.scss'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  // State variable to store the search query

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchSpotify = () => {
    const searchEndpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
      searchQuery
    )}`;

    // Access Token
    const accessToken = 'YOUR_ACCESS_TOKEN';

    fetch(searchEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data and extract the track information
        const tracks = data.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));

        // Do something with the tracks (e.g., store them in state or pass them to another component)
        console.log(tracks);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for a track..."
      />
      <button onClick={searchSpotify}>Search</button>
    </div>
  )
}

export default SearchBar
