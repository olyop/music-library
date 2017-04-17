import React from 'react'

const Artists = props => {
	return (
		<div>
			<h1>Artists</h1>
			<div>{JSON.stringify(props.mainObj)}</div>
		</div>
	)
}

export default Artists