import React from 'react'
import { Route } from 'react-router-dom'
import './content.css'

import Home from './pages/home'
import Artists from './pages/artists'
import Albums from './pages/albums'
import Songs from './pages/songs'

const Content = ({ s, c }) => (
	<div className="col-sm-10 content">
		
		<Route exact
			path="/"
			render={ () => <Home s={s} c={c} /> } />
		
		<Route exact
			path="/artists"
			render={ () => <Artists s={s} c={c} /> } />
		
		<Route exact
			path="/albums"
			render={ () => <Albums s={s} c={c} /> } />
		
		<Route exact
			path="/songs"
			render={ () => <Songs s={s} c={c} /> } />
		
	</div>
);

export default Content