// Import React
import React from 'react'

// Import components
import SearchItem from './search-item'

// Import helper functions
import { findMatches, isInputDangerous } from '../helpers/search-helper'

// Import CSS
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
	
	// Normalize input
	const input = String(props.inputVal.toUpperCase().toLowerCase())
		
	// Find matches
	const matchesSongs = findMatches(props.mainObj.songs, props.mainObj.length.songs, input)
	const matchesAlbums = findMatches(props.mainObj.albums, props.mainObj.length.albums, input)
	const matchesArtists = findMatches(props.mainObj.artists, props.mainObj.length.artists, input)
  
  // Find number of matches
  const numOfMatches = matchesSongs.length + matchesAlbums.length + matchesArtists.length
	
	// Map results
	const songsResults = matches => {
    if (matches.length === 0) {
      return <h4>No matches</h4>
    }
    return matches.map((song, index) => (
      <SearchItem key={index}
        onClick={props.playSong}
        obj={song}
        iconText={'audiotrack'}
        heading={song.title}
        img={song.albumCover}
        span1={song.artistName}
        span2={song.albumName} />
    ))
  }
  
	const albumsResults = matches => {
    if (matches.length === 0) {
      return <h4>No matches</h4>
    }
    return matches.map((album, index) => (
      <SearchItem key={index}
        onClick={props.playAlbum}
        obj={album}
        iconText={'album'}
        heading={album.title}
        img={album.cover}
        span1={album.artistName}
        span2={album.numSongs === 1 ? String(album.numSongs) + ' song' : String(album.numSongs) + ' songs'} />
    ))
  }
  
	const artistsResults = matches => {
    if (matches.length === 0) {
      return <h4>No matches</h4>
    }
    return matches.map((artist, index) => (
      <SearchItem key={index}
        onClick={props.playArtist}
        obj={artist}
        iconText={'person'}
        heading={artist.title}
        img={artist.logo}
        span1={artist.numAlbums === 1 ? String(artist.numAlbums) + ' album' : String(artist.numAlbums) + ' albums'}
        span2={artist.numSongs === 1 ? String(artist.numSongs) + ' song' : String(artist.numSongs) + ' songs'} />
    ))
  }
	
	// Heading style
	let style = { color: props.mainObj.info.colors.p.f }
	
	return (
		<div className="search-drop-down">
			
			<h2>Showing <b style={style}>{numOfMatches}</b> search results for <b style={style}>{input}</b></h2>
			
			<div className="search-drop-down-inner">
				
				<h1 style={{ margin: '0', borderTop: '0' }}>Artists</h1>
				{artistsResults(matchesArtists)}

				<h1>Albums</h1>
				{albumsResults(matchesAlbums)}

				<h1>Songs</h1>
				{songsResults(matchesSongs)}
			
			</div>
		</div>
	)
}

export default Search