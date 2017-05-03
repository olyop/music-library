import React from 'react'
import InputRange from 'react-input-range';
import './play.css'

class Play extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { isPlay: false }
		this.onPlayClick = this.onPlayClick.bind(this)
	}
	
	onPlayClick() {
		this.setState(prevState => ({
			isPlay: !prevState.isPlay
		}))
	}
	
	render() {
		return (
			<div className="play">
				
				<div className="play-section play-left">
					<img src="./img/album-covers/thriller.png" alt="Album" />
					<div className="play-content">
						<div>
							<h1>Thriller</h1>
							<p>Micheal Jackson</p>
						</div>
					</div>
				</div>
				
				<div className="play-section play-middle">
					<i className="material-icons">repeat</i>
					<i className="material-icons">skip_previous</i>
					<i className="material-icons play-play-button"
						onClick={this.onPlayClick}>
						{this.state.isPlay ? 'play_circle_filled' : 'pause_circle_filled'}
					</i>
					<i className="material-icons">skip_next</i>
					<i className="material-icons">shuffle</i>
				</div>
				
				<div className="play-section play-right">
					
					<i className="material-icons">volume_mute</i>
					
					<InputRange
        		maxValue={20}
        		minValue={0}
						step="1"
						value={this.state.value}
						onChange={value => this.setState({ value })} />
					
					<i className="material-icons">volume_up</i>
						
				</div>
				
			</div>
		)
	}
}

export default Play