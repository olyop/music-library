import React from 'react'
import NavHamburger from './nav-hamburger'

import './nav.css'

const Nav = ({ s, c }) => {
	const navStyle = { backgroundColor: c.p }
	return (
		<div
			className="nav"
			style={navStyle} >

			<div className="nav-section nav-left">
				<NavHamburger />
				<div className="nav-title">{s.navTitle}</div>
			</div>

			<div className="nav-section nav-middle">
				Middle
			</div>

			<div className="nav-section nav-right">Right</div>

		</div>
	)
}

export default Nav