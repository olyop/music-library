import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './side-bar/side-bar.js'
import Content from './content.js'
import './library.css'

const Library = ({ s, c }) => {
	return (
		<Router>
			<div className="container-fluid library">
				<div className="row">
				
					<SideBar s={s} c={c} />

					<Content s={s} c={c} />
					
				</div>
			</div>
		</Router>
	)
}

export default Library