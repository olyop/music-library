import React from 'react'

const Home = props => {
	return (
		<div>
			<h1>Home</h1>
			<div>{JSON.stringify(props.mainObj)}</div>
		</div>
	)
}

export default Home