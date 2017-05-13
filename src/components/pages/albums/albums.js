// Import React
import React from 'react'

// Import CSS
import './albums.css'
import './albums-responsive.css'

const Albums = props => {
	
	// Sort Albums
	props.mainObj.albums.sort((a, b) => {
    if (a.artistName < b.artistName) return - 1
    if (a.artistName > b.artistName) return 1
    return 0
	})
  
  const albumList = props.mainObj.albums.map((album, index) => (
    <div key={index}
      className="album">
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
  ))
	
	return (
		<div className="albums">
      {albumList}
		</div>
	)
}

export default Albums