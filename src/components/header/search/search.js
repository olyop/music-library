import React from 'react'
import includes from 'lodash/includes'
import find from 'lodash/find'
import SearchItem from './search-item'
import './search.css'

const findMatches = (array, arrayLength, input) => {
	let filteredArray = []
	for (var i = 0; i < arrayLength; i++) {
		let item = array[i]
		const condition = includes(item.title.toLowerCase(), input)
		if (condition) {
			filteredArray.push(item)
		}
	}
	return filteredArray
}

const Search = props => {
		
	// Check Input Value
	const input = String(props.inputVal.toLowerCase())

	// Render Search Matches
	const renderSearchMatchSongs = () => {
		
		const array = findMatches(props.songsObj, props.songsLength, input)
		
		if (array.length === 0) {
			return <h4>No matches</h4>
		}
		
		return array.map((song, index) => {
			
			// Find
			let artist = find(props.artistsObj, { artistId: song.artistId }),
					album = find(props.albumsObj, { albumId: song.albumId })
			
			return (
				<SearchItem key={index}
					heading={song.title}
					img={album.cover}
					span1={artist.title}
					span2={album.title} />
			)
		})
	}
	
	const renderSearchMatchAlbums = () => {
		
		const array = findMatches(props.albumsObj, props.albumsLength, input)
		
		if (array.length === 0) {
			return <h4>No matches</h4>
		}

		return array.map((album, index) => {
			
			// Find 
			let artist = find(props.artistsObj, { artistId: album.artistId }),
					songs = [];
			
			for (var i = 0; i < props.songsLength; i++) {
				let item = props.songsObj[i]
				if (item.albumId === album.albumId) {
					songs.push(item)
				}
			}
			
			return (
				<SearchItem key={index}
					heading={album.title}
					img={album.cover}
					span1={artist.title}
					span2={songs.length === 1 ? String(songs.length) + ' song' : String(songs.length) + ' songs'} />
			)
		})
	}
	
	const renderSearchMatchArtists = () => {
		
		const array = findMatches(props.artistsObj, props.artistsLength, input)
		
		if (array.length === 0) {
			return <h4>No matches</h4>
		}
		
		return array.map((artist, index) => {
			
			let a = 0, b = 0
			
			let albums = [],
					songs = []
			
			for (a; a < props.albumsLength; a++) {
				let item = props.albumsObj[a]
				if (item.artistId === artist.artistId) {
					albums.push(item)
				}
			}
			
			for (b; b < props.songsLength; b++) {
				let item = props.songsObj[b]
				if (item.artistId === artist.artistId) {
					songs.push(item)
				}
			}
			
			return (
				<SearchItem key={index}
					heading={artist.title}
					img={artist.logo}
					span1={albums.length === 1 ? String(albums.length) + ' album' : String(albums.length) + ' albums'}
					span2={songs.length === 1 ? String(songs.length) + ' song' : String(songs.length) + ' songs'} />
			)
		})
	}
	
	return (
		<div className="header-search-drop-down">
			
			<h1 style={{ margin: '0' }}>Artists</h1>
			{renderSearchMatchArtists()}
			
			<h1>Albums</h1>
			{renderSearchMatchAlbums()}
			
			<h1>Songs</h1>
			{renderSearchMatchSongs()}
			
		</div>
	)
}

export default Search