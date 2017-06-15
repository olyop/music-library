import React from 'react'

import './error.css'

const Error = ({ heading, subtitle, listTitle, list }) => {
	
	let mapList = list.map( (item, index) => <li key={index}>{item}</li> )
	
	return (
		<div className="error-msg">
			<div className="error-msg-icon">
				<i className="material-icons">error</i>
			</div>
			<h1>{heading}</h1>
			<h2>{subtitle}</h2>
			<h3>{listTitle}</h3>
			<ul>{mapList}</ul>
		</div>
	)
}

export default Error
