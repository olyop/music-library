import React from 'react'

const Artists = props => {
	return (
		<div>
			<h1>Artists</h1>
			<div>{props.mainObj.artists.map((artist, index) => <div index={index}>{artist.title}</div>)}</div>
		</div>
	)
}

export default Artists