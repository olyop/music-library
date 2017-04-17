import React from 'react'

const Songs = props => {
	return (
		<div>
			<h1>Songs</h1>
			<div>{JSON.stringify(props.mainObj)}</div>
		</div>
	)
}

export default Songs