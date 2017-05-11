import React from 'react'

import './header-hamburger.css'

class HeaderHamburger extends React.Component {
	render() {
    
		let props = this.props,
        string = props.isNav ? ' is-active' : ''
    
		return (
			<div
				className={'hamburger hamburger--' + props.mainObj.info.hamburgerType + ' js-hamburger header-hamburger' + string}
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