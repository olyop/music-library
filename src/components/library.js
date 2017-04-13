import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './side-bar/side-bar.js'
import Home from './pages/home'
import Artists from './pages/artists'
import Albums from './pages/albums'
import Songs from './pages/songs'
import './library.css'

const Library = ({ info, isNav }) => {
	return (
		<Router>
			<div className="container-fluid library">
				<div className="row">
				
					{ isNav ? <SideBar info={info} /> : null }

					<div className={isNav ? 'col-sm-10 content' : 'col-sm-12 content'}>

						<Route exact
							path="/"
							render={ () => <Home info={info} /> } />

						<Route exact
							path="/artists"
							render={ () => <Artists info={info} /> } />

						<Route exact
							path="/albums"
							render={ () => <Albums info={info} /> } />

						<Route exact
							path="/songs"
							render={ () => <Songs info={info} /> } />

					</div>
					
				</div>
			</div>
		</Router>
	)
}

export default Library