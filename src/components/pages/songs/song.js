import React from 'react'

class Song extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { song: this.props.song }
	}
	
	render() {
		
		const props = this.props,
					state = this.state
		
		if (state.song.length.slice(0,1) === '0') {
			state.song.length = state.song.length.slice(1,6)
		}
		
		return (
			<tr className={props.currentSong.songId === state.song.songId ? 'song song-active' : 'song'}
				onClick={ changeSong => props.changeSong(state.song)}>
				<td className="song-cover">
					<img src={state.song.albumCover}
							alt={state.song.albumName} />
				</td>
				<td>{state.song.title}</td>
				<td className="song-length">
					<div>{state.song.length}</div>
				</td>
				<td>{state.song.artistName}</td>
				<td>{state.song.albumName}</td>
			</tr>
		)
	}
}

export default Song