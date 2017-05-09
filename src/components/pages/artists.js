import React from 'react'

const Artists = props => {
	
	// Sort Artists
	props.mainObj.artists.sort((a, b) => {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    return 0
	})
	
	return (
		<div>
			<h1>Artists</h1>
			<div>{props.mainObj.artists.map((artist, index) => <div index={index}>{artist.title} - {artist.artistId}</div>)}</div>
		</div>
	)
}

export default Artists