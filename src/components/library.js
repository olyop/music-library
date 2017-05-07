import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './side-bar/side-bar'
import './library.css'

// Import Pages
import Home from './pages/home'
import Artists from './pages/artists'
import Albums from './pages/albums/albums'
import Songs from './pages/songs'

import Play from './play/play'

class Library extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			currentSong: props.mainObj.songs[Math.floor(Math.random() * props.mainObj.length.songs)]
		}
		
		this.changeSong = this.changeSong.bind(this)
	}
	
	changeSong(value) {
		this.setState({ currentSong: value })
	}
	
	render() {
		const props = this.props
		return (
			<Router>
				<div>

					<Play currentSong={this.state.currentSong} />

					<div className="container-fluid library">
						<div className="row">

							{ props.isNav ? <SideBar info={props.info} /> : null }

							<div className={props.isNav ? 'col-md-10 content' : 'col-md-12 content'}
								style={props.isNav ? { marginTop: '114px' } : { margin: '0' }}>

								<Route exact
									path="/"
									render={ () => (
										<Home
											info={props.info}
											mainObj={props.mainObj}
											currentSong={this.state.currentSong} />
									)} />

								<Route exact
									path="/artists"
									render={ () => (
										<Artists
											info={props.info}
											mainObj={props.mainObj}
											currentSong={this.state.currentSong} />
									)} />

								<Route exact
									path="/albums"
									render={ () => (
										<Albums
											info={props.info}
											mainObj={props.mainObj}
											currentSong={this.state.currentSong} />
									)} />

								<Route exact
									path="/songs"
									render={ () => (
										<Songs
											info={props.info}
											mainObj={props.mainObj}
											changeSong={this.changeSong}
											currentSong={this.state.currentSong} />
									)} />

							</div>

						</div>
					</div>

				</div>
			</Router>
		)
	}
}

export default Library