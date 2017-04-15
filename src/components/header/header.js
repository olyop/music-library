import React from 'react'
import HeaderHamburger from './header-hamburger'
import songsObj from '../../data/library/songs'
import artistsObj from '../../data/library/artists'
import albumsObj from '../../data/library/albums'
import Search from './search/search'
import './header.css'

class Header extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { inputVal: '' }
		this.handleInputChange = this.handleInputChange.bind(this)
		this.clearInput = this.clearInput.bind(this)
	}
	
	handleInputChange(event) {
    this.setState({ inputVal: event.target.value })
  }
	
	clearInput() {
		this.setState({ inputVal: '' })
	}
	
	render() {
		
		const props = this.props,
					headerStyle = { backgroundColor: props.info.colors.p.f },
					inputStyle = { backgroundColor: props.info.colors.p.e }
		
		let	songsLength = songsObj.length,
				albumsLength = albumsObj.length,
				artistsLength = artistsObj.length
		
		let isInputEmpty = this.state.inputVal === '',
				close, dropDown
		
		if (isInputEmpty) {
			close = null
		} else {
			close = (
				<i className="material-icons header-icon header-search-close"
					onClick={this.clearInput}>close</i>
			)
		}
		
		if (isInputEmpty) {
			dropDown = null
		} else {
			dropDown = (
				<Search
					inputVal={this.state.inputVal}
					songsObj={songsObj}
					albumsObj={albumsObj}
					artistsObj={artistsObj}
					songsLength={songsLength}
					albumsLength={albumsLength}
					artistsLength={artistsLength} />
			)
		}

		return (
			<div
				className="header"
				style={headerStyle}>

				<div className="header-section header-left">

					<HeaderHamburger
						info={props.info}
						toggleNav={props.toggleNav}
						isNav={props.isNav} />

					<div className="header-title"><a href='/'>{props.info.header.title}</a></div>

				</div>

				<div className="header-section header-middle">

					<i className="material-icons header-icon header-search-icon">search</i>

					<input
						onChange={this.handleInputChange}
						value={this.state.inputVal}
						style={inputStyle}
						placeholder={props.info.header.searchPlaceholder} />
					
					{ close }

					<i className="material-icons header-icon header-search-drop-down-arrow">arrow_drop_down</i>
					
					{ dropDown }

				</div>

				<div className="header-section header-right">
					Right
				</div>

			</div>
		)
	}
	
}



export default Header