import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './side-bar/side-bar.js'
import Home from './pages/home'
import Artists from './pages/artists'
import Albums from './pages/albums'
import Songs from './pages/songs'
import './library.css'

const Library = props => {
	return (
		<Router>
			<div className="container-fluid library">
				<div className="row">
				
					{ props.isNav ? <SideBar info={props.info} /> : null }

					<div className={props.isNav ? 'col-md-10 content' : 'col-md-12 content'}>

						<Route exact
							path="/"
							render={ () => (
								
								<Home
									info={props.info}
									mainObj={props.mainObj} />
								
							)}/>

						<Route exact
							path="/artists"
							render={ () => (
								
								<Artists
									info={props.info}
									mainObj={props.mainObj} />
								
							)} />

						<Route exact
							path="/albums"
							render={ () => (
								
								<Albums
									info={props.info}
									mainObj={props.mainObj} />
								
							)} />

						<Route exact
							path="/songs"
							render={ () => (
								
								<Songs
									info={props.info}
									mainObj={props.mainObj} />
								
							)} />

					</div>
					
				</div>
			</div>
		</Router>
	)
}

export default Library