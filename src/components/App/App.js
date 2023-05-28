import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'
import Tracklist from '../Tracklist/Tracklist'
import Track from '../Track/Track'

import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    // Add more track objects as needed
  ]);
  
  // State variable to store search results

  // Rest of the component code

  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      {/* Render the individual track components */}
      {searchResults.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default App;
