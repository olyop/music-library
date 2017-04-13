import React from 'react'
import { NavLink } from 'react-router-dom'

import './side-bar.css'

const SideBar = ({ s }) => (
	<div className="col-sm-2 nav-side-bar">
		<p>{s.sideBar.heading}</p>
		<ul>
			<li>
				<NavLink activeClassName="active" exact to="/">Home</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" to="/artists">Artists</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" to="/albums">Albums</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" to="/songs">Songs</NavLink>
			</li>
		</ul>
	</div>
)

export default SideBar