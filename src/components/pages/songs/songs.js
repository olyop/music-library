import React from 'react'
import { TableHeader, TableFooter } from '../../helpers/songs-helper'
import checkSongLength from '../../helpers/songs-helper'
import './songs.css'

class Song extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { song: this.props.song }
	}
	
	render() {
		
		const props = this.props,
					state = this.state
		
		const songLength = checkSongLength(state.song.length)
		
		return (
			<tr className={props.currentSong.songId === state.song.songId ? 'song song-active' : 'song'}
				onClick={ song => props.playSong(state.song) }>
				<td className="song-cover">
					<img src={props.mainObj.info.webStorageLink + state.song.artistId + '/' + state.song.albumId + '/cover.jpg'}
							alt={state.song.albumName} />
				</td>
				<td>{state.song.title}</td>
				<td className="song-length">
					<div>{songLength}</div>
				</td>
				<td>{state.song.artistName}</td>
				<td>{state.song.albumName}</td>
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
						<Song key={index}
              mainObj={props.mainObj}
							playSong={props.playSong}
							currentSong={props.currentSong}
							song={song} />
					))}
				</tbody>
				
				<TableFooter text={props.mainObj.length.songs}/>
				
			</table>
		</div>
	)
}

export default Songs