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
		
		const props = this.props
		
    // Declare
		let style = { color: props.mainObj.info.colors.p.f }
		
		// Verify search input
		if (isInputDangerous(props.inputVal)) {
			return (
				<div className="window search-drop-down">
					<h3 style={{ color: 'red' }}>Bad input</h3>
				</div>
			)
		}

		// Normalize input
		const input = String(this.props.inputVal.toUpperCase().toLowerCase())

		// Find matches
		const matchesSongs = findMatches(props.mainObj.songs, props.mainObj.length.songs, input)
		const matchesAlbums = findMatches(props.mainObj.albums, props.mainObj.length.albums, input)
		const matchesArtists = findMatches(props.mainObj.artists, props.mainObj.length.artists, input)

		// Find number of matches
		const numOfMatches = matchesSongs.length + matchesAlbums.length + matchesArtists.length

		return (
			<div className="window search-drop-down">

				<h2>Showing <b style={style}>{numOfMatches}</b> search results for <b style={style}>{input}</b></h2>

				<div className="search-drop-down-inner">

					<h1 style={{ margin: '0', borderTop: '0' }}>Artists</h1>
          {matchesArtists.length === 0 ? <h4>No matches</h4> : null}
					{matchesArtists.map((artist, index) => (
            <SearchItem key={artist.artistId}
              playEvent={props.playArtist}
              playEventParam={artist}
              headingEvent={props.openArtistWindow}
              headingEventParam={artist.artistId}
              obj={artist}
              input={input}
              iconText={'person'}
              heading={artist.title}
              img={props.mainObj.info.webStorageLink + artist.artistId + '/logo.jpg'}
              span1={artist.numAlbums === 1 ? String(artist.numAlbums) + ' album' : String(artist.numAlbums) + ' albums'}
              span2={artist.numSongs === 1 ? String(artist.numSongs) + ' song' : String(artist.numSongs) + ' songs'} />
          ))}

					<h1>Albums</h1>
          {matchesAlbums.length === 0 ? <h4>No matches</h4> : null}
					{matchesAlbums.map((album, index) => (
            <SearchItem key={album.albumId}
              playEvent={props.playAlbum}
              playEventParam={album}
              headingEvent={props.openAlbumWindow}
              headingEventParam={album.albumId}
              span1Event={props.openArtistWindow}
              span1EventParam={album.artistId}
              obj={album}
              input={input}
              iconText={'album'}
              heading={album.title}
              img={props.mainObj.info.webStorageLink + album.artistId + '/' + album.albumId + '/cover.jpg'}
              span1={album.artistName}
              span2={album.numSongs === 1 ? String(album.numSongs) + ' song' : String(album.numSongs) + ' songs'} />
          ))}

					<h1>Songs</h1>
          {matchesSongs.length === 0 ? <h4>No matches</h4> : null}
					{matchesSongs.map((song, index) => (
            <SearchItem key={song.songId}
              playEvent={props.playSong}
              playEventParam={song}
              headingEvent={props.playSong}
              headingEventParam={song}
              span1Event={props.openArtistWindow}
              span1EventParam={song.artistId}
              span2Event={props.openAlbumWindow}
              span2EventParam={song.albumId}
              obj={song}
              input={input}
              iconText={'audiotrack'}
              heading={song.title}
              img={props.mainObj.info.webStorageLink + song.artistId + '/' + song.albumId + '/cover.jpg'}
              span1={song.artistName}
              span2={song.albumName} />
          ))}

				</div>
			</div>
		)
	}
}

export default Search