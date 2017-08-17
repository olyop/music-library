import React from 'react'

import './home.css'

const Home = props => {
  
  const info = props.mainObj.info
  
  let homeStyle = {
    backgroundImage: 'url(' + info.webStorageLink + info.home.splashImgLink + ')'
  }
  
	return (
		<div className="home">
      <div className="home-background" style={homeStyle}>
        <div className="home-title">
          <img src={props.mainObj.info.webStorageLink + 'site-logo.png'} alt="Logo" />
          <p>Musicloud - An Online Music Player <br />(platform/system showcase)</p>
        </div>
      </div>
		</div>
	)
}

export default Home