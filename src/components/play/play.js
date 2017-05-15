// Import React
import React from 'react'

// Import components
import InputRange from 'react-input-range'
import Sound from 'react-sound'

// Import loading SVG
import LoadingSvg from '../../common/rolling.svg'

// Import CSS
import 'react-input-range/lib/css/index.css'
import './play.css'

class Play extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			isPlay: false,
			isLoading: false,
			volume: props.mainObj.info.play.startingVolume
		}
    
		this.handleSongLoading = this.handleSongLoading.bind(this)
		this.handleSongPlaying = this.handleSongPlaying.bind(this)
		this.onPlayClick = this.onPlayClick.bind(this)
		this.volumeMute = this.volumeMute.bind(this)
		this.volumeFull = this.volumeFull.bind(this)
	}
	
	handleSongLoading() {
		this.setState(prevState => ({
			isLoading: !prevState.isLoading
		}))
	}
	
	handleSongPlaying() {
		this.setState({ isLoading: false })
	}
	
	onPlayClick() {
		this.setState(prevState => ({
			isPlay: !prevState.isPlay
		}))
	}
	
	volumeMute() {
		this.setState({ volume: 0 })
	}
	
	volumeFull() {
		this.setState({ volume: 100 })
	}
	
	render() {
		
		const props = this.props
		
		let playJSX = this.state.isLoading ? (
      <img src={LoadingSvg} alt="Loading" onClick={this.onPlayClick} />
    ) : (
      <i className="material-icons play-play-button"
        onClick={this.onPlayClick}>{this.state.isPlay ? 'pause_circle_filled' : 'play_circle_filled'}</i>
    )
		
		return (
			<div className="play">
				
				<div className="play-section play-left">
					<img src={props.mainObj.info.webStorageLink + props.currentSong.artistId + '/' + props.currentSong.albumId + '/cover.jpg'} alt="Album" />
					<div className="play-content">
						<div>
							<h1>{props.currentSong.title}</h1>
							<p>{props.currentSong.artistName}</p>
						</div>
					</div>
				</div>
				
				<div className="play-section play-middle">
          
					<i className="material-icons"
            onClick={props.toggleRepeat}
						style={props.repeat ? { color: '#3F51B5' } : null}>repeat</i>
          
					<i className="material-icons"
            onClick={props.prevSong}>skip_previous</i>
					<div className="play-middle-play">{playJSX}</div>
          
					<i className="material-icons"
            onClick={props.nextSong}>skip_next</i>
          
					<i className="material-icons"
            onClick={props.toggleShuffle}
						style={props.shuffle ? { color: '#3F51B5' } : null}>shuffle</i>
          
				</div>
				
				<div className="play-section play-right">
					
					<i className="material-icons play-right-icon"
						onClick={this.volumeMute}>volume_mute</i>
					
					<InputRange maxValue={100}
        		minValue={0}
						step={1}
						value={Number(this.state.volume)}
						onChange={ volume => this.setState({ volume }) } />
					
					<i className="material-icons play-right-icon"
						onClick={this.volumeFull}>volume_up</i>
						
				</div>
				
				<Sound url={props.mainObj.info.webStorageLink + props.currentSong.artistId + '/' + props.currentSong.albumId + '/' + props.currentSong.songId + '.mp3'}
          playStatus={this.state.isPlay ? Sound.status.PLAYING : Sound.status.PAUSE}
          onFinishedPlaying={props.nextSong}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
					volume={this.state.volume} />
				
			</div>
		)
	}
}

export default Play