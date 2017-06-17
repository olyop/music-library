// Import React
import React from 'react'

// Import Components
import HeaderHamburger from './hamburger/header-hamburger'

// Import CSS
import './header.css'

// Component
const Header = props => {

  // Declare
  let headerStyle = { backgroundColor: props.mainObj.info.colors.p.f },
      inputStyle = { backgroundColor: props.mainObj.info.colors.p.e },
      close

  // Check whether to show search icon
  if (props.isInputEmpty) {
    close = null
  } else {
    close = (
      <i className="material-icons header-icon header-search-close"
        onClick={props.clearInput}>close</i>
    )
  }

  return (
    <div
      className="header"
      style={headerStyle}>
      <div className="header-section header-left">

        <HeaderHamburger
          mainObj={props.mainObj}
          toggleNav={props.toggleNav}
          isNav={props.isNav} />

        <div className="header-title">
          <a href='/'>
            <img src={props.mainObj.info.webStorageLink + 'site-logo.png'} alt="Logo" />
          </a>
        </div>

      </div>
      <div className="header-section header-middle">

        <i className="material-icons header-icon header-search-icon">search</i>

        <input
          onChange={ event => props.handleInputChange(event) }
          value={props.inputVal}
          style={inputStyle}
          placeholder={props.mainObj.info.header.searchPlaceholder} />

        {close}

      </div>

      <div className="header-section header-right">
        
        <img src={props.mainObj.info.webStorageLink + 'default-profile-photo.png'} alt="Profile" />
        
        <div className="header-profile-info">
          <h1>Username</h1>
          <a href="">Sign Out</a>
        </div>
        
      </div>

    </div>
  )
}



export default Header