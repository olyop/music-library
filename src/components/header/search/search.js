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
		
		const array = findMatches(props.mainObj.songs, props.mainObj.length.songs, input)
		
		if (array.length === 0) {
			return <h4>No matches</h4>
		}
		
		return array.map((song, index) => {
			
			// Find
			let artist = find(props.mainObj.artists, { artistId: song.artistId }),
					album = find(props.mainObj.albums, { albumId: song.albumId })
			
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
		
		const array = findMatches(props.mainObj.albums, props.mainObj.length.albums, input)
		
		if (array.length === 0) {
			return <h4>No matches</h4>
		}

		return array.map((album, index) => {
			
			// Find 
			let artist = find(props.mainObj.artists, { artistId: album.artistId })
			
			return (
				<SearchItem key={index}
					heading={album.title}
					img={album.cover}
					span1={artist.title}
					span2={album.numSongs === 1 ? String(album.numSongs) + ' song' : String(album.numSongs) + ' songs'} />
			)
		})
	}
	
	const renderSearchMatchArtists = () => {
		
		const array = findMatches(props.mainObj.artists, props.mainObj.length.artists, input)
		
		if (array.length === 0) {
			return <h4>No matches</h4>
		}
		
		return array.map((artist, index) => {
			return (
				<SearchItem key={index}
					heading={artist.title}
					img={artist.logo}
					span1={artist.numAlbums === 1 ? String(artist.numAlbums) + ' album' : String(artist.numAlbums) + ' albums'}
					span2={artist.numSongs === 1 ? String(artist.numSongs) + ' song' : String(artist.numSongs) + ' songs'} />
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