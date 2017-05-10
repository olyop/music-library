// Import React
import React from 'react'

// Import components
import SearchItem from './search-item'

// Import helper functions
import { findMatches, isInputDangerous } from '../../helpers/search-helper'

// Import CSS
import './search.css'

// Component
const Search = props => { 
	
	// Verify search input
	if (isInputDangerous(props.inputVal)) {
		return (
			<div className="header-search-drop-down">
				<h3 style={{ color: 'red' }}>Bad input</h3>
			</div>
		)
	}
	
	// Normalize input
	const input = String(props.inputVal.toUpperCase().toLowerCase())
	
	// Declare
	let numOfMatches = 0,
			songsResults,
			albumsResults,
			artistsResults
		
	// Find matches
	const matchesSongs = findMatches(props.mainObj.songs, props.mainObj.length.songs, input)
	const matchesAlbums = findMatches(props.mainObj.albums, props.mainObj.length.albums, input)
	const matchesArtists = findMatches(props.mainObj.artists, props.mainObj.length.artists, input)

	// Check if no matches
	if (matchesSongs.length === 0) {
		songsResults = <h4>No matches</h4>
	}
	if (matchesAlbums.length === 0) {
		albumsResults = <h4>No matches</h4>
	}
	if (matchesArtists.length === 0) {
		artistsResults = <h4>No matches</h4>
	}
	
	// Map results
	songsResults = matchesSongs.map((song, index) => {
		numOfMatches++
		return (
			<SearchItem key={index}
				info={props.info}
				heading={song.title}
				iconText={'audiotrack'}
				img={song.albumCover}
				span1={song.artistName}
				span2={song.albumName} />
		)
	})
	albumsResults = matchesAlbums.map((album, index) => {
		numOfMatches++
		return (
			<SearchItem key={index}
				info={props.info}
				heading={album.title}
				iconText={'album'}
				img={album.cover}
				span1={album.artistName}
				span2={album.numSongs === 1 ? String(album.numSongs) + ' song' : String(album.numSongs) + ' songs'} />
		)
	})
	artistsResults = matchesArtists.map((artist, index) => {
		numOfMatches++
		return (
			<SearchItem key={index}
				info={props.info}
				heading={artist.title}
				iconText={'person'}
				img={artist.logo}
				span1={artist.numAlbums === 1 ? String(artist.numAlbums) + ' album' : String(artist.numAlbums) + ' albums'}
				span2={artist.numSongs === 1 ? String(artist.numSongs) + ' song' : String(artist.numSongs) + ' songs'} />
		)
	})
	
	// Heading style
	let style = { color: props.info.colors.p.f }
	
	return (
		<div className="header-search-drop-down">
			
			<h2>Showing <b style={style}>{numOfMatches}</b> search results for <b style={style}>{input}</b></h2>
			
			<div className="header-search-drop-down-inner">
				
				<h1 style={{ margin: '0', borderTop: '0' }}>Artists</h1>
				{artistsResults}

				<h1>Albums</h1>
				{albumsResults}

				<h1>Songs</h1>
				{songsResults}
			
			</div>
		</div>
	)
}

export default Search