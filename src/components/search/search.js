// Import React
import React from 'react'

// Import components
import SearchItem from './search-item'

// Import helper functions
import { findMatches, isInputDangerous } from '../helpers/search-helper'

// Import CSS
import './search.css'

class Search extends React.Component {
	render() {
		
    // Declare
		let style = { color: this.props.mainObj.info.colors.p.f }
		
		// Verify search input
		if (isInputDangerous(this.props.inputVal)) {
			return (
				<div className="header-search-drop-down">
					<h3 style={{ color: 'red' }}>Bad input</h3>
				</div>
			)
		}

		// Normalize input
		const input = String(this.props.inputVal.toUpperCase().toLowerCase())

		// Find matches
		const matchesSongs = findMatches(this.props.mainObj.songs, this.props.mainObj.length.songs, input)
		const matchesAlbums = findMatches(this.props.mainObj.albums, this.props.mainObj.length.albums, input)
		const matchesArtists = findMatches(this.props.mainObj.artists, this.props.mainObj.length.artists, input)

		// Find number of matches
		const numOfMatches = matchesSongs.length + matchesAlbums.length + matchesArtists.length

		return (
			<div className="search-drop-down">

				<h2>Showing <b style={style}>{numOfMatches}</b> search results for <b style={style}>{input}</b></h2>

				<div className="search-drop-down-inner">

					<h1 style={{ margin: '0', borderTop: '0' }}>Artists</h1>
          {matchesArtists.length === 0 ? <h4>No matches</h4> : null}
					{matchesArtists.map((artist, index) => (
            <SearchItem key={artist.artistId}
              event={this.props.playArtist}
              obj={artist}
              input={input}
              iconText={'person'}
              heading={artist.title}
              img={artist.logo}
              span1={artist.numAlbums === 1 ? String(artist.numAlbums) + ' album' : String(artist.numAlbums) + ' albums'}
              span2={artist.numSongs === 1 ? String(artist.numSongs) + ' song' : String(artist.numSongs) + ' songs'} />
          ))}

					<h1>Albums</h1>
          {matchesAlbums.length === 0 ? <h4>No matches</h4> : null}
					{matchesAlbums.map((album, index) => (
            <SearchItem key={album.albumId}
              event={this.props.playAlbum}
              obj={album}
              input={input}
              iconText={'album'}
              heading={album.title}
              img={album.cover}
              span1={album.artistName}
              span2={album.numSongs === 1 ? String(album.numSongs) + ' song' : String(album.numSongs) + ' songs'} />
          ))}

					<h1>Songs</h1>
          {matchesSongs.length === 0 ? <h4>No matches</h4> : null}
					{matchesSongs.map((song, index) => (
            <SearchItem key={song.songId}
              event={this.props.playSong}
              obj={song}
              input={input}
              iconText={'audiotrack'}
              heading={song.title}
              img={song.albumCover}
              span1={song.artistName}
              span2={song.albumName} />
          ))}

				</div>
			</div>
		)
	}
}

export default Search