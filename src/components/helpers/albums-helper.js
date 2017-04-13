import React from 'react'

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
					<div className="album-text">
						<h3>{album.title}</h3>
						<h4>{artist.name}</h4>
					</div>
				</div>
			</div>
		)
	})
}

export default renderAlbums