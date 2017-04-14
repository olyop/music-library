import React from 'react'
import NavHamburger from './nav-hamburger'

import './nav.css'

const Nav = ({ info, toggleNav, isNav }) => {
	const navStyle = { backgroundColor: info.colors.p.f }
	return (
		<div
			className="nav"
			style={navStyle} >

			<div className="nav-section nav-left">
				<NavHamburger
					info={info}
					toggleNav={toggleNav}
					isNav={isNav} />
				<div className="nav-title">{info.navTitle}</div>
			</div>

			<div className="nav-section nav-middle">
				Middle
			</div>

			<div className="nav-section nav-right">Right</div>

		</div>
	)
}

export default Nav