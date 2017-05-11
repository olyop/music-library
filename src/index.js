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
    
    this.playSong = this.playSong.bind(this)
    this.playAlbum = this.playAlbum.bind(this)
    this.playArtist = this.playArtist.bind(this)
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
  
  playSong(song) {
		this.setState({ currentSong: song })
	}
  
  playAlbum(album) {
    
    let albumSongs = []
    
    // Find songs in album
    for (var i = 0; i < this.props.mainObj.length.songs; i++) {
      const item = this.props.mainObj.songs[i]
      if (item.albumId === album.albumId) {
        albumSongs.push(item)
      }
    }
    
    this.setState({ currentSong: albumSongs[Math.floor(Math.random() * albumSongs.length)] })
  }
  
  playArtist(artist) {
    
    let artistSongs = []
    
    // Find songs for artist
    for (var i = 0; i < this.props.mainObj.length.songs; i++) {
      const item = this.props.mainObj.songs[i]
      if (item.artistId === artist.artistId) {
        artistSongs.push(item)
      }
    }
    
    this.setState({ currentSong: artistSongs[Math.floor(Math.random() * artistSongs.length)] })
  }
	
	render() {
    
		let props = this.props,
        isInputEmpty = this.state.inputVal === ''
    
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
          playSong={this.playSong}
          playAlbum={this.playAlbum}
          playArtist={this.playArtist} />
        
        {isInputEmpty ? null : (
          
        <Search
          mainObj={props.mainObj}
          inputVal={this.state.inputVal}
          currentSong={this.state.currentSong}
          playSong={this.playSong}
          playAlbum={this.playAlbum}
          playArtist={this.playArtist} />
          
        )}

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