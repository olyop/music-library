import React from 'react'
import artistsObj from '../../data/library/artists'
import albumsObj from '../../data/library/albums'
import find from 'lodash/find'
import './albums.css'

const Albums = () => {
	
	let renderedAlbumsList = albumsObj.map((album, index) => {

		let artist = find(artistsObj, { artistId: album.artistId })

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
			{renderedAlbumsList}
		</div>
	)
}

export default Albums