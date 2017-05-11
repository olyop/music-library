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
import Search from './components/search/search'

// Import Functions
import { calcLibraryData } from './components/helpers/index-helper'
import find from 'lodash/find'

// Define Main Database Object
const mainObj = {
  info: siteInfoData,
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
		
		this.state = {
      isNav: this.props.info.isNav,
      inputVal: '',
      currentSong: find(props.mainObj.songs, { songId: 107 })
    }
    
		this.toggleNav = this.toggleNav.bind(this)
		this.closeNav = this.closeNav.bind(this)
    
    this.handleInputChange = this.handleInputChange.bind(this)
		this.clearInput = this.clearInput.bind(this)
    
    this.changeSong = this.changeSong.bind(this)
	}
  
  
	
	toggleNav() {
    this.setState(prevState => ({
      isNav: !prevState.isNav
    }))
  }
	
	closeNav() {
		this.setState({ isNav: false })
	}
  
  handleInputChange(event) {
    this.setState({ inputVal: event.target.value })
		this.closeNav()
  }
  
  clearInput() {
		this.setState({ inputVal: '' })
	}
  
  changeSong(currentSong) {
		this.setState({ currentSong })
	}
	
	render() {
    
		let props = this.props,
        isInputEmpty = this.state.inputVal === ''
    
    console.log(this.state.currentSong)
    
		return (
			<div className="index">

				<Header
					mainObj={props.mainObj}
          isInputEmpty={isInputEmpty}
          inputVal={this.state.inputVal}
          handleInputChange={this.handleInputChange}
          clearInput={this.clearInput}
					toggleNav={this.toggleNav}
					closeNav={this.closeNav}
					isNav={this.state.isNav} />

				<Library
					mainObj={props.mainObj}
					isNav={this.state.isNav}
          currentSong={this.state.currentSong}
          changeSong={this.changeSong} />
        
        {isInputEmpty ? null : <Search
                                 mainObj={props.mainObj}
                                 inputVal={this.state.inputVal}
                                 currentSong={this.state.currentSong}
                                 changeSong={this.changeSong} /> }

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