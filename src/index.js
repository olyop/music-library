// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import Info
import siteInfoData from './data/site-info'

// Import Library Database
import songsData from './data/library/songs'
import albumsData from './data/library/albums'
import artistsData from './data/library/artists'

// Import Components
import Header from './components/header/header'
import Library from './components/library'

// Import Functions
import { calcLibraryData } from './components/helpers/index-helper'

// Define Main Database Object
const mainObj = {
	songs: songsData,
	albums: albumsData,
	artists: artistsData,
	length: {
		songs: songsData.length,
		albums: albumsData.length,
		artists: artistsData.length
	}
}

// Index Component
class Index extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { isNav: this.props.info.isNav }
		
		this.toggleNav = this.toggleNav.bind(this)
		this.closeNav = this.closeNav.bind(this)
	}
	
	toggleNav() {
    this.setState(prevState => ({
      isNav: !prevState.isNav
    }))
  }
	
	closeNav() {
		this.setState({ isNav: false })
	}
	
	render() {
		let props = this.props
		return (
			<div className="index">

				<Header
					info={props.info}
					mainObj={props.mainObj}
					toggleNav={this.toggleNav}
					closeNav={this.closeNav}
					isNav={this.state.isNav} />

				<Library
					info={props.info}
					mainObj={props.mainObj}
					isNav={this.state.isNav} />

			</div>
		)	
	}
}

// Render site to the DOM
ReactDOM.render(
  <Index
		info={siteInfoData}
		mainObj={calcLibraryData(mainObj)} />,
  document.getElementById('root')
)