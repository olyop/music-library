import React from 'react'
import InputRange from 'react-input-range'
import Sound from 'react-sound'
import LoadingSvg from '../../common/rolling.svg'
import 'react-input-range/lib/css/index.css'
import './play.css'

class Play extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			isPlay: false,
			isLoading: false,
			volume: 50
		}
		
		this.handleSongLoading = this.handleSongLoading.bind(this)
		this.handleSongPlaying = this.handleSongPlaying.bind(this)
		this.onPlayClick = this.onPlayClick.bind(this)
		this.volumeMute = this.volumeMute.bind(this)
		this.volumeFull = this.volumeFull.bind(this)
	}
	
	handleSongLoading() {
		this.setState({ isLoading: true })
	}
	
	handleSongPlaying() {
		this.setState({ isLoading: false })
	}
	
	onPlayClick() {
		this.setState(prevState => ({
			isPlay: !prevState.isPlay
		}))
	}
	
	volumeMute() { this.setState({ volume: 0 }) }
	volumeFull() { this.setState({ volume: 100 }) }
	
	render() {
		
		const props = this.props
		
		let playJSX = (
			<i className="material-icons play-play-button"
				onClick={this.onPlayClick}>{this.state.isPlay ? 'pause_circle_filled' : 'play_circle_filled'}</i>
		)
		
		if (this.state.isLoading) {
			playJSX = <img src={LoadingSvg} alt="Loading" onClick={this.onPlayClick} />
		}
		
		return (
			<div className="play">
				
				<div className="play-section play-left">
					<img src={props.currentSong.albumCover} alt="Album" />
					<div className="play-content">
						<div>
							<h1>{props.currentSong.title}</h1>
							<p>{props.currentSong.artistName}</p>
						</div>
					</div>
				</div>
				
				<div className="play-section play-middle">
					<i className="material-icons">repeat</i>
					<i className="material-icons">skip_previous</i>
					
					<div className="play-middle-play">
						{playJSX}
					</div>
					
					<i className="material-icons">skip_next</i>
					<i className="material-icons">shuffle</i>
				</div>
				
				<div className="play-section play-right">
					
					<i className="material-icons play-right-icon"
						onClick={this.volumeMute}>volume_mute</i>
					
					<InputRange
        		maxValue={100}
        		minValue={0}
						step={1}
						value={Number(this.state.volume)}
						onChange={volume => this.setState({ volume })} />
					
					<i className="material-icons play-right-icon"
						onClick={this.volumeFull}>volume_up</i>
						
				</div>
				
				<Sound
					url="./song-files/song.mp3"
					volume={this.state.volume}
					onLoading={this.handleSongLoading} 
					onPlaying={this.handleSongPlaying}
					playStatus={this.state.isPlay ? Sound.status.PLAYING : Sound.status.PAUSE} />
				
			</div>
		)
	}
}

export default Play