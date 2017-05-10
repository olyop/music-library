// Import React
import React from 'react'

// Import CSS
import './artists.css'

const Artists = props => {
	
	// Sort Artists
	props.mainObj.artists.sort((a, b) => {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    return 0
	})
	
	return (
		<div className="artists">
			
			{props.mainObj.artists.map((artist, index) => (
				<div className="artist"
					key={index}>
					<div className="artist-inner">
						<h3>{artist.title}</h3>
					</div>
				</div>
			))}
			
		</div>
	)
}

export default Artists