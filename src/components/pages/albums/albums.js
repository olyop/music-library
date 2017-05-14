// Import React
import React from 'react'

// Import CSS
import './albums.css'
import './albums-responsive.css'

const Albums = props => {
	
	// Sort Albums
	props.mainObj.albums.sort((a, b) => {
    if (a.title < b.title) return - 1
    if (a.title > b.title) return 1
    return 0
	})
  
  const albumList = props.mainObj.albums.map((album, index) => (
    <div key={album.albumId}
      className="album">
      <div className="album-inner">
        <img src={props.mainObj.info.webStorageLink + album.artistId + '/' + album.albumId + '/cover.jpg'} alt={album.title} />
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
  ))
	
	return (
		<div className="albums">
      {albumList}
		</div>
	)
}

export default Albums