import React from 'react'
import './albums.css'
import './albums-responsive.css'

const Albums = props => {
	
	let albumsList = props.mainObj.albums.map((album, index) => {
		return (
			<div
				className="album"
				key={index}>
				<div className="album-inner">
					<img src={album.cover} alt={album.cover} />
					<div className="album-content">
						<div className="album-more">
							<i className="material-icons">more_vert</i>
						</div>
						<div className="album-more-menu">
							<p>More</p>
						</div>
						<h1><span>{album.title}</span></h1>
						<p><span>{album.artistName}</span></p>
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