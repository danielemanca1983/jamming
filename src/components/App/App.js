import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'
import Tracklist from '../Tracklist/Tracklist'
import Track from '../Track/Track'
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
    </div>
  );
}

export default App;
