// Import React
import React from 'react'

// Import CSS
import './albums.css'

class Album extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			obj: props.obj
		}
	}
	
	render(){
		
		const props = this.props,
					state = this.state
		
		return (
			<div key={state.obj.albumId}
				className="grid-item album">
				<div className="album-cover"
					onClick={ obj => props.openAlbumWindow(state.obj.albumId) }>
					<img alt={state.obj.title} className="album-cover-img"
						src={props.mainObj.info.webStorageLink + state.obj.artistId + '/' + props.obj.albumId + '/cover.jpg'} />
				</div>
				<div className="album-content">
					<h1 onClick={ obj => props.openAlbumWindow(state.obj.albumId) }><span>{props.obj.title}</span></h1>
					<p onClick={ obj => props.openArtistWindow(state.obj.artistId) }>
						<span>{state.obj.artistName}</span>
					</p>
				</div>
			</div>
		)
	}
}

const Albums = props => {
	
	// Sort Albums
	props.mainObj.albums.sort((a, b) => {
    if (a.title < b.title) return - 1
    if (a.title > b.title) return 1
    return 0
	})
	
	return (
		<div className="albums">
      {props.mainObj.albums.map((album, index) => (
				<Album key={album.albumId}
					mainObj={props.mainObj}
					obj={album}
					openArtistWindow={props.openArtistWindow}
					openAlbumWindow={props.openAlbumWindow} />
			))}
		</div>
	)
}

export default Albums