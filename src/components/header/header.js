import React from 'react'
import HeaderHamburger from './header-hamburger'
import './header.css'

const Header = ({ info, toggleNav, isNav }) => {
	const headerStyle = { backgroundColor: info.colors.p.f }
	return (
		<div
			className="header"
			style={headerStyle}>

			<div className="header-section header-left">
				
				<HeaderHamburger
					info={info}
					toggleNav={toggleNav}
					isNav={isNav} />
				
				<div className="header-title">{info.header.title}</div>
				
			</div>

			<div className="header-section header-middle">
				Middle
			</div>

			<div className="header-section header-right">
				Right
			</div>

		</div>
	)
}

export default Header