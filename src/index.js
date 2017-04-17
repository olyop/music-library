// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import Data
import siteInfoData from './data/site-info'
import songsData from './data/library/songs'
import albumsData from './data/library/albums'
import artistsData from './data/library/artists'

// Import Components
import Header from './components/header/header'
import Library from './components/library'

// Import Functions
import { calcLibraryData } from './components/helpers/index-helper'

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
	}
	
	toggleNav() {
    this.setState(prevState => ({
      isNav: !prevState.isNav
    }))
  }
	
	render() {
		let props = this.props
		return (
			<div className="index">

				<Header
					info={props.info}
					mainObj={props.mainObj}
					toggleNav={this.toggleNav}
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