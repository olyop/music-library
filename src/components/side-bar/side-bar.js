import React from 'react'
import { NavLink } from 'react-router-dom'
import { navListConfig } from '../helpers/side-bar-helper'
import './side-bar.css'

const SideBar = props => {
	
	const renderNavList = navListConfig.map((item, index) => (
		<li key={index}>
			
			<NavLink
				activeClassName="nav-side-bar-active"
				exact={item.exact}
				to={item.to}>
				<i className="material-icons">{item.icon}</i>
				{item.text}
			</NavLink>
			
		</li>
	));
	
	return (
		<div className="col-md-2 nav-side-bar">
			<ul>{renderNavList}</ul>
		</div>
	)
}

export default SideBar