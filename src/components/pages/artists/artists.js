// Import React
import React from 'react'

// Import CSS
import './artists.css'

class Artist extends React.Component {
  render() {
    
    const props = this.props
    
    // Declare
    let artistAlbums = []

    // Find artist albums
    for (var i = 0; i < props.mainObj.length.albums; i++) {
      let item = props.mainObj.albums[i]
      if (props.artist.artistId === item.artistId) {
        artistAlbums.push(item)
      }
    }

    // Find songs for each album
    for (var i = 0; i < artistAlbums.length; i++) {
      let album = artistAlbums[i]
      let albumSongs = []
      for (var x = 0; x < props.mainObj.length.songs; x++) {
        let song = props.mainObj.songs[x]
        if (album.albumId === song.albumId) {
          albumSongs.push(song)
        }
      }
      artistAlbums[i].albumSongs = albumSongs
    }

    let list = artistAlbums.map((album) => {

      let mapSongs = album.albumSongs.map((song) => (
        <p key={song.songId}><b>{song.title}</b> - {song.songId}</p>
      ))

      return (
        <div>
          <div key={album.albumId} style={{ marginBottom: '10px' }}>
            <h4>{album.title}</h4>
            <p>{album.albumId}</p>
          </div>
          {mapSongs}
          <br />
        </div>
      )
    })

    return (
      <div className="artist">
        <div className="artist-inner">
          <h3 style={{ fontWeight: '800', textAlign: 'center' }}>{props.artist.title}</h3>
          <p>{props.artist.artistId}</p>
          <hr />
          <div>
            {list}
          </div>
          <hr />
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
          artist={artist} />
      ))}
		</div>
	)
}

export default Artists