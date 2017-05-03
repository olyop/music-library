import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import './play.css'

class Play extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			isPlay: false,
			volume: 0
		}
		
		this.onPlayClick = this.onPlayClick.bind(this)
		this.volumeMute = this.volumeMute.bind(this)
		this.volumeFull = this.volumeFull.bind(this)
	}
	
	onPlayClick() {
		this.setState(prevState => ({
			isPlay: !prevState.isPlay
		}))
	}
	
	volumeMute() { this.setState({ volume: 0 }) }
	volumeFull() { this.setState({ volume: 20 }) }
	
	render() {
		const props = this.props
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
					<i className="material-icons play-play-button"
						onClick={this.onPlayClick}>
						{this.state.isPlay ? 'pause_circle_filled' : 'play_circle_filled'}
					</i>
					<i className="material-icons">skip_next</i>
					<i className="material-icons">shuffle</i>
				</div>
				
				<div className="play-section play-right">
					
					<i className="material-icons play-right-icon"
						onClick={this.volumeMute} >
						volume_mute</i>
					
					<InputRange
        		maxValue={20}
        		minValue={0}
						step={1}
						value={Number(this.state.volume)}
						onChange={volume => this.setState({ volume })} />
					
					<i className="material-icons play-right-icon"
						onClick={this.volumeFull} >
						volume_up</i>
						
				</div>
				
			</div>
		)
	}
}

export default Play