import React from 'react'

import './nav-hamburger.css'

class NavHamburger extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			isActive: false
		}
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }
	
	render() {
		let string = this.state.isActive ? ' is-active' : ''
		return (
			<div
				className={'hamburger hamburger--3dy js-hamburger nav-hamburger' + string}
				onClick={this.handleClick}
			>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
		)
	}
}

export default NavHamburger