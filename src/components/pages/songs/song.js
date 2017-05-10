import React from 'react'

class Song extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { song: this.props.song }
	}
	
	render() {
		return (
			<tr className={this.props.currentSong.songId === this.state.song.songId ? 'song song-active' : 'song'}
				onClick={ changeSong => this.props.changeSong(this.state.song)}>
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

export default Song