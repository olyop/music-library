// Import React
import React from 'react'

// Import CSS
import './artists.css'

class Artist extends React.Component {
  
  constructor(props) {
    super()
    
    this.state = {
      obj: props.obj
    }
  }
  
  render() {
    
    const props = this.props,
					state = this.state

    return (
      <div className="grid-item artist"
				onClick={ obj => props.openArtistWindow(this.state.obj) }>
        <div className="artist-cover"
          style={{ backgroundImage: 'url(' + String(props.mainObj.info.webStorageLink + state.obj.artistId + '/group.jpg') + ')' }}>
        </div>
        <div className="artist-content">
					
					<div className="artist-logo"
						style={{ backgroundImage: 'url(' + props.mainObj.info.webStorageLink + state.obj.artistId + '/logo.jpg)' }}></div>
					
          <div className="artist-text">
						<h1>{state.obj.title}</h1>
						<p>
							<span>{state.obj.numAlbums} {state.obj.numAlbums === 1 ? 'album' : 'albums'}</span>
							<span> &#8211; </span>
							<span>{state.obj.numSongs} songs</span>
						</p>
					</div>
					
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
					openArtistWindow={props.openArtistWindow}
          obj={artist} />
      ))}
		</div>
	)
}

export default Artists