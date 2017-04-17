import React from 'react'
import SearchItem from './search-item'
import { findMatches, isInputDangerous } from '../../helpers/search-helper'
import './search.css'

const Search = props => { 
	
	// Verify search input
	if (isInputDangerous(props.inputVal)) {
		return (
			<div className="header-search-drop-down">
				<h3 style={{ color: 'red' }}>Bad input</h3>
			</div>
		)
	}
	
	// Normalize Input
	const input = String(props.inputVal.toUpperCase().toLowerCase())

	// Render search matches for songs
	const renderSearchMatchSongs = () => {
		
		// Find matches
		const matches = findMatches(props.mainObj.songs, props.mainObj.length.songs, input)
		
		// Check if no matches
		if (matches.length === 0) {
			return <h4>No matches</h4>
		}
		
		return matches.map((song, index) => (
			<SearchItem key={index}
				info={props.info}
				heading={song.title}
				iconText={'audiotrack'}
				img={song.albumCover}
				span1={song.artistName}
				span2={song.albumName} />
		))
	}
	
	// Render search matches for albums
	const renderSearchMatchAlbums = () => {
		
		// Find matches
		const matches = findMatches(props.mainObj.albums, props.mainObj.length.albums, input)
		
		// Check if no matches
		if (matches.length === 0) {
			return <h4>No matches</h4>
		}

		return matches.map((album, index) => (
			<SearchItem key={index}
				info={props.info}
				heading={album.title}
				iconText={'album'}
				img={album.cover}
				span1={album.artistName}
				span2={album.numSongs === 1 ? String(album.numSongs) + ' song' : String(album.numSongs) + ' songs'} />
		))
	}
	
	// Render search matches for artists
	const renderSearchMatchArtists = () => {
		
		// Find matches
		const matches = findMatches(props.mainObj.artists, props.mainObj.length.artists, input)
		
		// Check if no matches
		if (matches.length === 0) {
			return <h4>No matches</h4>
		}
		
		return matches.map((artist, index) => (
			<SearchItem key={index}
				info={props.info}
				heading={artist.title}
				iconText={'person'}
				img={artist.logo}
				span1={artist.numAlbums === 1 ? String(artist.numAlbums) + ' album' : String(artist.numAlbums) + ' albums'}
				span2={artist.numSongs === 1 ? String(artist.numSongs) + ' song' : String(artist.numSongs) + ' songs'} />
		))
	}
	
	return (
		<div className="header-search-drop-down">
			<h2>Showing search results for <b>{input}</b></h2>
			<div className="header-search-drop-down-inner">
				
				<h1 style={{ margin: '0', borderTop: '0' }}>Artists</h1>
				{renderSearchMatchArtists()}

				<h1>Albums</h1>
				{renderSearchMatchAlbums()}

				<h1>Songs</h1>
				{renderSearchMatchSongs()}
			
			</div>
		</div>
	)
}

export default Search