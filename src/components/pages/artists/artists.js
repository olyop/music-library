// Import React
import React from 'react'

// Import CSS
import './artists.css'

class Artist extends React.Component {
  render() {
    
    const props = this.props
    
    // Declare
    let artistAlbums = [],
        a= 0, b = 0, c = 0

    // Find artist albums
    for (a; a < props.mainObj.length.albums; a++) {
      let item = props.mainObj.albums[a]
      if (props.artist.artistId === item.artistId) {
        artistAlbums.push(item)
      }
    }

    // Find songs for each album
    for (b; b < artistAlbums.length; b++) {
      let album = artistAlbums[b]
      let albumSongs = []
      for (c; c < props.mainObj.length.songs; c++) {
        let song = props.mainObj.songs[c]
        if (album.albumId === song.albumId) {
          albumSongs.push(song)
        }
      }
      artistAlbums[b].albumSongs = albumSongs
    }

    let list = artistAlbums.map((album) => {

      let mapSongs = album.albumSongs.map((song) => (
        <p key={song.songId}><b>{song.title}</b> - {song.songId}</p>
      ))

      return (
        <div key={album.albumId}>
          <div style={{ marginBottom: '10px' }}>
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