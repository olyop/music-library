import React from 'react'
import sortBy from 'lodash/sortBy'
import './album-window.css'

const AlbumWindow = props => {
	
	let albumSongs = []
	
	// Find album songs
	for (var i = 0; i < props.mainObj.length.songs; i++) {
		const item = props.mainObj.songs[i]
		if (props.album.albumId === item.albumId) {
			albumSongs.push(item)
		}
	}
	
	// Sort album songs by trackNum
	sortBy(albumSongs, 'trackNum')
	
	return (
		<div onClick={props.closeAlbumWindow}
			className="window album-window">
			<div className="container-fluid">
				<div className="row">
					
					<div className="col-md-4 album-window-side album-window-cover">
						<img alt={props.album.title}
							src={props.mainObj.info.webStorageLink + props.album.artistId + '/' + props.album.albumId + '/cover.jpg'} />
					</div>
					
					<div className="col-md-8 album-window-side album-window-info">
						
						<h1>{props.album.title}</h1>
						<h2>{props.album.artistName}</h2>
						
						<div className="album-window-song-list">
							<ul>
								{albumSongs.map((song, index) => (
									<li key={index}>
										<div>
											<i className="material-icons">audiotrack</i>
											<span className="album-window-song-list-text">{song.trackNum}</span>
											<span className="album-window-song-list-text">{song.title}</span>
											<span className="album-window-song-list-text">{song.length}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
						
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default AlbumWindow