import React from 'react'

// Import functions
import { TableHeader, TableFooter } from '../../helpers/songs-helper'

// Import CSS
import './songs.css'

class Song extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { obj: this.props.obj }
	}
	
	render() {
		
		const props = this.props,
					state = this.state
    
    // Check if current song
    const checkCurrentSong = props.currentSong.songId === state.obj.songId
		
		return (
			<tr className={checkCurrentSong ? 'song song-active' : 'song'}
				onClick={ song => props.playSong(state.obj) }>
				<td className="song-cover">
					<img src={props.mainObj.info.webStorageLink + state.obj.artistId + '/' + state.obj.albumId + '/cover.jpg'}
							alt={state.obj.albumName} />
				</td>
				<td className="song-title">{state.obj.title}</td>
				<td className="song-length">
					<div>{state.obj.length}</div>
				</td>
				<td>{state.obj.artistName}</td>
				<td>{state.obj.albumName}</td>
			</tr>
		)
	}
}

const Songs = props => {
	
	// Sort songs by album
	props.mainObj.songs.sort(function(a, b){
    if (a.title < b.title) return - 1
    if (a.title > b.title) return 1
    return 0
	})
	
	return (
		<div className="songs">
			<table>
				
				<TableHeader mainObj={props.mainObj} />
				
				<tbody>
					{props.mainObj.songs.map((song, index) => (
						<Song key={song.songId}
              mainObj={props.mainObj}
							playSong={props.playSong}
							currentSong={props.currentSong}
							obj={song} />
					))}
				</tbody>
				
				<TableFooter text={props.mainObj.length.songs}/>
				
			</table>
		</div>
	)
}

export default Songs