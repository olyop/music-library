import React from 'react'

import './nav-hamburger.css'

class NavHamburger extends React.Component {
	render() {
		let string = this.props.isNav ? ' is-active' : ''
		return (
			<div
				className={'hamburger hamburger--' + this.props.info.hamburgerType + ' js-hamburger nav-hamburger' + string}
				onClick={this.props.toggleNav}
			>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
		)
	}
}

export default NavHamburger