import React from 'react'
import artistsObj from '../../data/library/artists'
import albumsObj from '../../data/library/albums'
import './albums.css'

const renderAlbums = (albums, artists) => {
	let length = albums.length
	return albums.map((album, index) => {

		let artist, i = 0

		for (i; i < length; i++) {
			let item = artists[i]
			if (item.artistId === album.artistId) {
				artist = item
				break
			}
		}

		return (
			<div
				className="album"
				key={index} >
				<div className="album-inner">
					<img src={album.cover} alt={album.cover} />
					<div className="album-content">
						<h1><span>{album.title}</span></h1>
						<p><span>{artist.name}</span></p>
					</div>
				</div>
			</div>
		)
	})
}

const Albums = () => {
	return (
		<div className="albums">
			{renderAlbums(albumsObj, artistsObj)}
		</div>
	)
}

export default Albums