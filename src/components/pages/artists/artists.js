// Import React
import React from 'react'

// Import CSS
import './artists.css'

class Artist extends React.Component {
  
  constructor(props) {
    super()
    
    this.state = {
      artist: props.obj
    }
  }
  
  render() {
    
    const props = this.props

    return (
      <div className="grid-item artist">
        <div className="artist-cover"
          style={{ backgroundImage: 'url(' + String(props.mainObj.info.webStorageLink + props.obj.artistId + '/group.jpg') + ')' }}>
        </div>
        <div className="artist-content">
          <h1>{props.obj.title}</h1>
          <p>
            <span>{props.obj.numAlbums} {props.obj.numAlbums === 1 ? 'album' : 'albums'}</span>
            <span> &#8211; </span>
            <span>{props.obj.numSongs} songs</span>
          </p>
        </div>
      </div>
    )
  }
}

const Artists = props => {
	
	// Sort artists by title
	props.mainObj.artists.sort((a, b) => {
    if (a.title < b.title) return - 1
    if (a.title > b.title) return 1
    return 0
	})
	
	return (
		<div className="artists">
			{props.mainObj.artists.map( (artist, index) => (
        <Artist key={artist.artistId}
          mainObj={props.mainObj}
          obj={artist} />
      ))}
		</div>
	)
}

export default Artists