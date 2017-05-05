import React from 'react'
import { TableHeader, TableFooter } from '../helpers/songs-helper'
import './songs.css'

class Song extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { song: this.props.song }
	}
	
	render() {
		
		return (
			<tr className={this.props.currentSong.songId === this.state.song.songId ? 'song song-active' : 'song'}
				onClick={ value => this.props.changeSong(this.state.song) }>
				<td className="song-cover">
					<img src={this.state.song.albumCover}
							alt={this.state.song.albumName} />
				</td>
				<td>{this.state.song.title}</td>
				<td className="song-length">{this.state.song.length}</td>
				<td>{this.state.song.artistName}</td>
				<td>{this.state.song.albumName}</td>
			</tr>
		)
	}
}

const Songs = props => {
	
	// Sort Songs
	props.mainObj.songs.sort(function(a, b){
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    return 0
	})
	
	return (
		<div className="songs">
			<table>
				<thead>
					<TableHeader info={props.info} />
				</thead>
				<tbody>
					{props.mainObj.songs.map((song, index) => (
						<Song key={index}
							changeSong={props.changeSong}
							currentSong={props.currentSong}
							song={song} />
					))}
				</tbody>
				<tfoot>
					<TableFooter text={props.mainObj.length.songs}/>
				</tfoot>
			</table>
		</div>
	)
}

export default Songs