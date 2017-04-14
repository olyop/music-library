import React from 'react'
import { NavLink } from 'react-router-dom'
import './side-bar.css'

const SideBar = ({ info }) => {
	
	let pStyle = {
		backgroundColor: info.colors.h.f,
		color: '#fff'
	}
	
	let config = [
		{
			text: 'Home',
			icon: 'home',
			exact: true,
			to: '/home'
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
	
	const renderList = config.map((item, index) => (
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
		<div className="col-sm-2 nav-side-bar">
			<p style={pStyle}>{info.sideBar.heading}</p>
			<ul>
				{renderList}
			</ul>
		</div>
	)
}

export default SideBar