// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import info
import siteInfoData from './database/site-info'

// Import library database
import songsData from './database/library/songs-database'
import albumsData from './database/library/albums-database'
import artistsData from './database/library/artists-database'

// Import components
import Header from './components/header/header'
import Library from './components/library'
import Search from './components/search/search'
import AlbumWindow from './components/pages/albums/album-window'
import ArtistWindow from './components/pages/artists/artist-window'

// Import functions
import { calcLibraryData, findSongsAlbum, randomItemFromArray } from './components/helpers/index-helper'
import find from 'lodash/find'
import sortBy from 'lodash/sortBy'

// Define database object
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
      isNav: this.props.mainObj.info.isNav,
      inputVal: '',
      currentSong: 0,
			repeat: false,
			shuffle: false,
			albumWindow: false,
			artistWindow: false
    }
    
		this.toggleNav = this.toggleNav.bind(this)
		this.closeNav = this.closeNav.bind(this)
    
    this.handleInputChange = this.handleInputChange.bind(this)
		this.clearInput = this.clearInput.bind(this)
    
    this.playSong = this.playSong.bind(this)
		this.playFirstSong = this.playFirstSong.bind(this)
    this.playAlbum = this.playAlbum.bind(this)
    this.playArtist = this.playArtist.bind(this)
    this.prevSong = this.prevSong.bind(this)
    this.nextSong = this.nextSong.bind(this)
    this.toggleRepeat = this.toggleRepeat.bind(this)
		this.toggleShuffle = this.toggleShuffle.bind(this)
		
		this.openAlbumWindow = this.openAlbumWindow.bind(this)
		this.closeAlbumWindow = this.closeAlbumWindow.bind(this)
		
		this.openArtistWindow = this.openArtistWindow.bind(this)
		this.closeArtistWindow = this.closeArtistWindow.bind(this)
	}
  
	toggleNav() {
    this.setState(prevState => ({
      isNav: !prevState.isNav
    }))
  }
	
	closeNav() {
		this.setState({ isNav: false })
	}
  
  clearInput() {
    this.setState({ inputVal: '' })
  }
  
  handleInputChange(event) {
    this.setState({ inputVal: event.target.value })
		this.closeNav()
  }
  
  playSong(song) {
		this.setState({ currentSong: song })
	}
	
	playFirstSong() {
		this.setState({ currentSong: randomItemFromArray(this.props.mainObj.songs, this.props.mainObj.length.songs) })
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
    
    this.setState({ currentSong: find(albumSongs, { trackNum: 1 }) })
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
  
  prevSong() {
		
		if (this.state.repeat) {
			return this.setState({ currentSong: this.state.currentSong })
		}
		
		if (this.state.shuffle) {
			return this.setState({ currentSong: randomItemFromArray(this.props.mainObj.songs, this.props.mainObj.length.songs) })
		}
    
    const currentSong = this.state.currentSong
    
    // Find songs in album
    let currentSongAlbumSongs = sortBy(findSongsAlbum(currentSong, this.props.mainObj), [ a => a.trackNum ])
    
    // Find next track in album
    if (currentSong.trackNum === 1) {
			if (this.state.shuffle) {
				this.setState({ currentSong: randomItemFromArray(this.props.mainObj.songs, this.props.mainObj.length.songs) })
			} else {
				this.setState({ currentSong: 0 })
			}
    } else {
      this.setState({ currentSong: currentSongAlbumSongs[currentSong.trackNum - 2] })
    }
  }
  
  nextSong() {
		
		if (this.state.repeat) {
			return this.setState({ currentSong: this.state.currentSong })
		}
		
		if (this.state.shuffle) {
			return this.setState({ currentSong: randomItemFromArray(this.props.mainObj.songs, this.props.mainObj.length.songs) })
		}
		
    const currentSong = this.state.currentSong
    
    // Find songs in album  
    let currentSongAlbumSongs = sortBy(findSongsAlbum(currentSong, this.props.mainObj), [ a => a.trackNum ])
    
    // Find next track in album
    if (currentSongAlbumSongs[currentSong.trackNum] === undefined) {
			if (this.state.shuffle) {
				this.setState({ currentSong: randomItemFromArray(this.props.mainObj.songs, this.props.mainObj.length.songs) })
			} else {
				this.setState({ currentSong: 0 })
			}
    } else {
			this.setState({ currentSong: find(currentSongAlbumSongs, { trackNum: currentSong.trackNum + 1 }) })
    }
  }
	
	toggleRepeat() {
		this.setState(prevState => ({
      repeat: !prevState.repeat
    }))
  }
  
  toggleShuffle() {
		this.setState(prevState => ({
      shuffle: !prevState.shuffle
    }))
  }
	
	openAlbumWindow(id) {
		
		let album
		
		for (var i = 0; i < this.props.mainObj.length.albums; i++) {
			const item = this.props.mainObj.albums[i]
			if (id === item.albumId) {
				album = item
			}
		}
		
		this.setState({ albumWindow: album })
	}
	
	closeAlbumWindow() {
		this.setState({ albumWindow: false })
	}
	
	openArtistWindow(id) {
		
		let artist
		
		for (var i = 0; i < this.props.mainObj.length.artists; i++) {
			const item = this.props.mainObj.artists[i]
			if (id === item.artistId) {
				artist = item
			}
		}
		
		this.setState({ artistWindow: artist })
	}
	
	closeArtistWindow() {
		this.setState({ artistWindow: false })
	}
	
	render() {
    
		let props = this.props,
        isInputEmpty = this.state.inputVal === ''
    
		return (
			<div className="index">

				<Header mainObj={props.mainObj}
					title={this.state.title}
          isInputEmpty={isInputEmpty}
          inputVal={this.state.inputVal}
          handleInputChange={this.handleInputChange}
          clearInput={this.clearInput}
					toggleNav={this.toggleNav}
					closeNav={this.closeNav}
					isNav={this.state.isNav} />

				<Library mainObj={props.mainObj}
					isNav={this.state.isNav}
          currentSong={this.state.currentSong}
					repeat={this.state.repeat}
					shuffle={this.state.shuffle}
          playSong={this.playSong}
					playFirstSong={this.playFirstSong}
          playAlbum={this.playAlbum}
          playArtist={this.playArtist}
          prevSong={this.prevSong}
          nextSong={this.nextSong}
					toggleRepeat={this.toggleRepeat}
          toggleShuffle={this.toggleShuffle}
					openAlbumWindow={this.openAlbumWindow}
					openArtistWindow={this.openArtistWindow} />
        
        {isInputEmpty ? null : (
          
        <Search mainObj={props.mainObj}
          inputVal={this.state.inputVal}
          currentSong={this.state.currentSong}
          playSong={this.playSong}
          playAlbum={this.playAlbum}
          playArtist={this.playArtist} />
          
        )}
				
				{this.state.albumWindow === false ? null : (
				
				<AlbumWindow mainObj={props.mainObj}
					album={this.state.albumWindow}
					currentSong={this.state.currentSong}
					playSong={this.playSong}
					playAlbum={this.playAlbum}
					closeAlbumWindow={this.closeAlbumWindow} />
					
				)}
				
				{this.state.artistWindow === false ? null : (
				
				<ArtistWindow mainObj={props.mainObj}
					artist={this.state.artistWindow}
					currentSong={this.state.currentSong}
					playSong={this.playSong}
					playAlbum={this.playAlbum}
					closeArtistWindow={this.closeArtistWindow} />
					
				)}

			</div>
		)	
	}
}

// Render site to the DOM
ReactDOM.render(
  <Index mainObj={calcLibraryData(mainObj)} />,
  document.getElementById('root')
)