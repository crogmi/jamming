import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = { searchResults: [
        {
          name: 'name1', 
          album: 'album1', 
          artist: 'artist1', 
          id:1
        }, 
        {
          name: 'name2', 
          album: 'album2', 
          artist: 'artist2', 
          id:2
        }, 
        {
          name: 'name3', 
          album: 'album3', 
          artist: 'artist3', 
          id:3
        }
      ],
      playlistName: 'playlist-name',
      playlistTracks: [
        {
          name: 'name4',
          album: 'album4',
          artist: 'artist4',
          id: 4
        },
        {
          name: 'name5',
          album: 'album5',
          artist: 'artist5',
          id: 5
        }
      ]};

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
    }

    addTrack(track) {
      let addedPlaylist = this.state.playlistTracks;
      
      if (addedPlaylist.find(x => x.id === track.id)) {
        return;
      } else {
        addedPlaylist.push(track);
      }
      this.setState({ playlistTracks: addedPlaylist });
    }

    removeTrack(track) {
      const removedPlaylist = this.state.playlistTracks.filter(x => x.id !== track.id);
      this.setState({ playlistTracks: removedPlaylist });
    }

    updatePlaylistName(name) {
      this.setState({ playlistName: name});
    }

    savePlaylist() {
      alert('this method is linked to the button correctly');
      const trackURIs = this.playlistTracks.map(x => x.uri);
    }

    search(term) {
      console.log(term);
    }

    render () {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/* <!-- Add a SearchBar component --> */}
            <SearchBar onSearch={ this.search } />
            <div className="App-playlist">
              {/* <!-- Add a SearchResults component -->
              <!-- Add a Playlist component --> */}
              <SearchResults searchResults={ this.state.searchResults } 
                             onAdd={ this.addTrack } />
              <Playlist playlistname={ this.state.playlistName } 
                        playlistTracks={ this.state.playlistTracks }
                        onRemove={ this.removeTrack } 
                        onNameChange={ this.updatePlaylistName }
                        onSave={ this.savePlaylist } />
            </div>
          </div>
        </div>
      );
    }  
}

export default App;
