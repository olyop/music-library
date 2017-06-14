import React from 'react'

import './home.css'

const Home = props => {
  
  const info = props.mainObj.info
  
  let homeStyle = {
    backgroundImage: 'url(' + info.webStorageLink + info.home.splashImgLink + ')'
  }
  
	return (
		<div className="home">
      <div className="home-background" style={homeStyle}></div>
		</div>
	)
}

export default Home