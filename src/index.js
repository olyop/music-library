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
import colorsObj from './data/colors'

// Import Components
import Nav from './components/nav/nav'
import Library from './components/library'

// Index
const Index = ({ s, c }) => (
	<div className="index">
		
		<Nav s={s} c={c} />
		
		<Library s={s} c={c} />
		
	</div>
)

// Render to DOM
ReactDOM.render(
  <Index
		s={siteInfoObj}
		c={colorsObj}	
	/>,
  document.getElementById('root')
)