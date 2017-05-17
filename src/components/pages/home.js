import React from 'react'

const Home = props => {
	
	window.scrollTo(0,0)
	
	return (
		<div>
			<h1>Home</h1>
			<div>{JSON.stringify(props.mainObj)}</div>
		</div>
	)
}

export default Home