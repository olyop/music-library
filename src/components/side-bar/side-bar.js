import React from 'react'
import { NavLink } from 'react-router-dom'
import { navListConfig } from '../helpers/side-bar-helper'
import './side-bar.css'

const SideBar = props => {
	
	let headingStyle = {
		backgroundColor: props.mainObj.info.colors.h.f,
		color: '#fff'
	}
	
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
			<h1 style={headingStyle}>{props.mainObj.info.sideBar.heading.pages}</h1>
			<ul>{renderNavList}</ul>
		</div>
	)
}

export default SideBar