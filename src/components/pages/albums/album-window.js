import React from 'react'
import './album-window.css'

class AlbumWindowSong extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			obj: props.obj
		}
	}
	
	render() {
		
		const props = this.props,
					state = this.state
		
		
		let listClass = this.props.currentSong === this.state.obj ? 'active' : null
		
		return (
			<li onClick={ obj => props.playSong(state.obj) } className={listClass}>
				<div>
					<div className="album-window-song-title">
						<i className="material-icons">audiotrack</i>
						<span className="album-window-song-list-text">
							{state.obj.trackNum}
						</span>
						<span className="album-window-song-list-text">
							{state.obj.title}
						</span>
					</div>
					<span className="album-window-song-list-text">{state.obj.length}</span>
				</div>
			</li>
		)
	}
}

const AlbumWindow = props => {
	
	let albumSongs = []
	
	// Find album songs
	for (var i = 0; i < props.mainObj.length.songs; i++) {
		const item = props.mainObj.songs[i]
		if (props.album.albumId === item.albumId) {
			albumSongs.push(item)
		}
	}
	
	albumSongs.sort((a, b) => a.trackNum - b.trackNum)
	
	// Determine if track number is equal to 1
	const albumTrackNum = props.album.numSongs === 1 ? '' : 's'
	
	return (
		<div className="window album-window">
			<div className="container-fluid">
				<div className="row">
					
					<div className="col-md-3 album-window-side">
            <div className="album-window-cover">
               <img alt={props.album.title}
                src={props.mainObj.info.webStorageLink + props.album.artistId + '/' + props.album.albumId + '/cover.jpg'} />
            </div>
					</div>
					
					<div className="col-md-9 album-window-side album-window-info">
						
						<h1>
							<span>{props.album.title}</span>
							<i className="material-icons"
								onClick={props.closeAlbumWindow}>close</i>
						</h1>
            
						<h2>
              <span>{props.album.artistName}</span> &#8211; {props.album.year} &#8211; {props.album.numSongs} track{albumTrackNum}
            </h2>
						
						<div className="album-window-song-list">
							<ul>
								{albumSongs.map((song, index) => (
									<AlbumWindowSong key={index}
										playSong={props.playSong}
										currentSong={props.currentSong}
										playAlbum={props.playAlbum} 
										obj={song} />
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