// Import React
import React from 'react'

// Import Components
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './side-bar/side-bar'
import find from 'lodash/find'

// Import CSS
import './library.css'

// Import Pages
import Home from './pages/home'
import Artists from './pages/artists/artists'
import Albums from './pages/albums/albums'
import Songs from './pages/songs/songs'

// Import Play
import Play from './play/play'

class Library extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			currentSong: find(props.mainObj.songs, { songId: 107 })
		}
		
		this.changeSong = this.changeSong.bind(this)
	}
	
	changeSong(currentSong) {
		this.setState({ currentSong })
	}
	
	render() {
		const props = this.props
		return (
			<Router>
				<div>
					
					{/* Play Bar */}
					<Play
						info={props.info}
						currentSong={this.state.currentSong} />

					<div className="container-fluid library">
						<div className="row">

							{ props.isNav ? <SideBar info={props.info} /> : null }

							<div className={props.isNav ? 'col-md-10 content' : 'col-md-12 content'}
								style={props.isNav ? { marginTop: '114px' } : { margin: '0' }}>

								{/* Home Page */}
								<Route exact
									path="/"
									render={ () => (
										<Home
											info={props.info}
											mainObj={props.mainObj}
											currentSong={this.state.currentSong} />
									)} />
								
								{/* Artists Page */}
								<Route exact
									path="/artists"
									render={ () => (
										<Artists
											info={props.info}
											mainObj={props.mainObj}
											currentSong={this.state.currentSong} />
									)} />
								
								{/* Albums Page */}
								<Route exact
									path="/albums"
									render={ () => (
										<Albums
											info={props.info}
											mainObj={props.mainObj}
											currentSong={this.state.currentSong} />
									)} />
								
								{/* Songs Page */}
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