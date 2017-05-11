// Import React
import React from 'react'

// Import components
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './side-bar/side-bar'

// Import CSS
import './library.css'

// Import pages
import Home from './pages/home'
import Artists from './pages/artists/artists'
import Albums from './pages/albums/albums'
import Songs from './pages/songs/songs'

// Import play bar
import Play from './play/play'

class Library extends React.Component {
	render() {
		const props = this.props
		return (
			<Router>
				<div>
					
					{/* Play Bar */}
					<Play
						mainObj={props.mainObj}
						currentSong={props.currentSong} />

					<div className="container-fluid library">
						<div className="row"
							style={{ backgroundColor: '#F5F5F5' }}>

							{ props.isNav ? <SideBar mainObj={props.mainObj} /> : null }

							<div className={props.isNav ? 'col-md-10 content' : 'col-md-12 content'}
								style={props.isNav ? { marginTop: '114px' } : { margin: '0' }}>

								{/* Home Page */}
								<Route exact
									path="/"
									render={ () => (
										<Home
											info={props.info}
											mainObj={props.mainObj}
											currentSong={props.currentSong} />
									)} />
								
								{/* Artists Page */}
								<Route exact
									path="/artists"
									render={ () => (
										<Artists
											info={props.info}
											mainObj={props.mainObj}
											currentSong={props.currentSong} />
									)} />
								
								{/* Albums Page */}
								<Route exact
									path="/albums"
									render={ () => (
										<Albums
											info={props.info}
											mainObj={props.mainObj}
											currentSong={props.currentSong} />
									)} />
								
								{/* Songs Page */}
								<Route exact
									path="/songs"
									render={ () => (
										<Songs
											info={props.info}
											mainObj={props.mainObj}
											playSong={props.playSong}
											currentSong={props.currentSong} />
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