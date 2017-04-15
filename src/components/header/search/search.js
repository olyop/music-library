import React from 'react'
import includes from 'lodash/includes'
import './search.css'

const Search = props => {
		
	// Check Input Value
	const input = String(props.inputVal.toLowerCase())

	// Render Search Matches
	const renderSearchMatchSongs = () => {

		let matchArray = [],
				a = 0
		
		// Find matching songs
		for (a; a < props.songsLength; a++) {
			let item = props.songsObj[a]

			const condition = includes(item.title.toLowerCase(), input)

			if (condition) { matchArray.push(item) }
		}

		let list = matchArray.map((song, index) => {
			
			let artist, album,
					b = 0,
					c = 0
			
			// Find artist
			for (b; b < props.artistsLength; b++) {
				let item = props.artistsObj[b]
				if (song.artistId === item.artistId) {
					artist = item
					break
				}
			}
			
			// Find album
			for (c; c < props.albumsLength; c++) {
				let item = props.albumsObj[c]
				if (song.albumId === item.albumId) {
					album = item
					break
				}
			}
			
			return (
				<div key={index}
					className="search-song">
					<img src={album.cover} alt={album.title} />
					<div className="search-song-inner">
						<p><span>{song.title}</span></p>
						<div>
							<span>{artist.name}</span> &#8211; <span>{album.title}</span>
						</div>
					</div>
				</div>
			)
		})
		
		return (
			<div>
				<h1>Songs</h1>
				{list}
			</div>
		)
	}
	
	const renderSearchMatchAlbums = () => {

		let matchArray = [],
				a = 0

		for (a; a < props.albumsLength; a++) {
			let item = props.albumsObj[a]

			const condition = includes(item.title.toLowerCase(), input)

			if (condition) {
				matchArray.push(item)
			}
		}

		let list = matchArray.map((match, index) => {
			return (
				<p key={index}>{match.title}</p>
			)
		})
		return (
			<div>
				<h1>Albums</h1>
				{list}
			</div>
		)
	}
	
	const renderSearchMatchArtists = () => {

		let matchArray = [],
				a = 0

		for (a; a < props.artistsLength; a++) {
			let item = props.artistsObj[a]

			const condition = includes(item.name.toLowerCase(), input)

			if (condition) {
				matchArray.push(item)
			}
		}

		let list = matchArray.map((match, index) => {
			return (
				<p key={index}>{match.name}</p>
			)
		})
		return (
			<div>
				<h1>Artists</h1>
				{list}
			</div>
		)
	}
	
	return (
		<div className="header-search-drop-down">
			
			{renderSearchMatchSongs()}
			{renderSearchMatchAlbums()}
			{renderSearchMatchArtists()}
			
		</div>
	)
}

export default Search