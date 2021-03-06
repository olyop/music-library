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
				  
					<Play mainObj={props.mainObj}
            playFirstSong={props.playFirstSong}
            prevSong={props.prevSong}
            nextSong={props.nextSong}
            toggleRepeat={props.toggleRepeat}
            toggleShuffle={props.toggleShuffle}
            repeat={props.repeat}
            shuffle={props.shuffle}
						openArtistWindow={props.openArtistWindow}
						openAlbumWindow={props.openAlbumWindow}
            currentSong={props.currentSong} />

					<div className="container-fluid library">
						<div className="row"
							style={{ backgroundColor: '#F5F5F5' }}>

							{ props.isNav ? <SideBar mainObj={props.mainObj} /> : null }

							<div className={props.isNav ? 'col-md-10 content' : 'col-md-12 content'}
								style={props.isNav ? { marginTop: '48px' } : { margin: '0' }}>
                
								<Route exact
									path="/"
									render={ () => (
                    
										<Home info={props.info}
											mainObj={props.mainObj}
											currentSong={props.currentSong} /> )} />
								
								<Route exact
									path="/artists"
									render={ () => (
                    
										<Artists info={props.info}
											mainObj={props.mainObj}
											currentSong={props.currentSong}
											openArtistWindow={props.openArtistWindow} /> )} />
								
								<Route exact
									path="/albums"
									render={ () => (
                    
										<Albums info={props.info}
											mainObj={props.mainObj}
											currentSong={props.currentSong}
											openArtistWindow={props.openArtistWindow}
											openAlbumWindow={props.openAlbumWindow} /> )} />
								
								<Route exact
									path="/songs"
									render={ () => (
                    
										<Songs info={props.info}
											mainObj={props.mainObj}
											playSong={props.playSong}
											openArtistWindow={props.openArtistWindow}
											openAlbumWindow={props.openAlbumWindow} 
											currentSong={props.currentSong} /> )} />

							</div>

						</div>
					</div>

				</div>
			</Router>
		)
	}
}

export default Library