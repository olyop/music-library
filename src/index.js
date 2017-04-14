// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import Data
import siteInfoObj from './data/site-info'

// Import Components
import Header from './components/header/header'
import Library from './components/library'

// Index Component
class Index extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { isNav: this.props.info.isNav }
		
		this.toggleNav = this.toggleNav.bind(this)
	}
	
	toggleNav() {
    this.setState(prevState => ({
      isNav: !prevState.isNav
    }))
  }
	
	render() {
		let info = this.props.info
		return (
			<div className="index">

				<Header
					info={info}
					toggleNav={this.toggleNav}
					isNav={this.state.isNav} />

				<Library
					info={info}
					isNav={this.state.isNav} />

			</div>
		)	
	}
}

// Render whole site to the DOM
ReactDOM.render(
  <Index
		info={siteInfoObj}
	/>,
  document.getElementById('root')
)