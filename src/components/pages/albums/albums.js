// Import React
import React from 'react'

// Import CSS
import './albums.css'
import './albums-responsive.css'

class Album extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			obj: this.props.obj
		}
	}
	
	render(){
		const props = this.props
		return (
			<div key={props.obj.albumId}
				onClick={ obj => props.openAlbumWindow(this.state.obj) }
				className="album">
				<div className="album-cover">
					<img alt={props.obj.title} className="album-cover-img"
						src={props.mainObj.info.webStorageLink + props.obj.artistId + '/' + props.obj.albumId + '/cover.jpg'} />
				</div>
				<div className="album-content">
					<h1><span>{props.obj.title}</span></h1>
					<p><span>{props.obj.artistName}</span></p>
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
				<Album key={index}
					mainObj={props.mainObj}
					obj={album}
					openAlbumWindow={props.openAlbumWindow} />
			))}
		</div>
	)
}

export default Albums