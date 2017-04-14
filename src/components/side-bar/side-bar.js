import React from 'react'
import { NavLink } from 'react-router-dom'
import './side-bar.css'

const SideBar = ({ info }) => {
	
	let headingStyle = {
		backgroundColor: info.colors.h.f,
		color: '#fff'
	}
	
	let config = [
		{
			text: 'Home',
			icon: 'home',
			exact: true,
			to: '/'
		},
		{
			text: 'Artists',
			icon: 'person',
			exact: true,
			to: '/artists'
		},
		{
			text: 'Albums',
			icon: 'album',
			exact: true,
			to: '/albums'
		},
		{
			text: 'Songs',
			icon: 'audiotrack',
			exact: true,
			to: '/songs'
		}
	];
	
	const renderNavList = config.map((item, index) => (
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
			<h1 style={headingStyle}>{info.sideBar.heading.pages}</h1>
			<ul>
				{renderNavList}
			</ul>
			<h1 style={headingStyle}>{info.sideBar.heading.playlists}</h1>
		</div>
	)
}

export default SideBar