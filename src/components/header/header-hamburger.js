import React from 'react'

import './header-hamburger.css'

class HeaderHamburger extends React.Component {
	render() {
		const props = this.props
		let string = props.isNav ? ' is-active' : ''
		return (
			<div
				className={'hamburger hamburger--' + props.info.hamburgerType + ' js-hamburger header-hamburger' + string}
				onClick={props.toggleNav}
			>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
		)
	}
}

export default HeaderHamburger