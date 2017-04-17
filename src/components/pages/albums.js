import React from 'react'
import find from 'lodash/find'
import './albums.css'

const Albums = props => {
	
	let albumsList = props.mainObj.albums.map((album, index) => {
		let artist = find(props.mainObj.artists, { artistId: album.artistId })
		return (
			<div
				className="album"
				key={index}>
				<div className="album-inner">
					<img src={album.cover} alt={album.cover} />
					<div className="album-content">
						<h1><span>{album.title}</span></h1>
						<p><span>{artist.title}</span></p>
					</div>
				</div>
			</div>
		)
	})
	
	return (
		<div className="albums">
			{albumsList}
		</div>
	)
}

export default Albums