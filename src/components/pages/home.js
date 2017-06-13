import React from 'react'

const Pretty = props => {
  
  let preStyle = {
    display: 'block',
    padding: '10px 30px',
    margin: '0',
    overflow: 'hidden',
    backgroundColor: '#fff',
    border: 'none'
  }

  return (
    <div>
      <pre style={preStyle}>
        {JSON.stringify(props.data, null, 2) }
      </pre>
    </div>
  )
}

const Home = props => {
	return (
		<div style={{ margin: '5px', backgroundColor: '#fff' }}>
			<h1 style={{ padding: '10px' }}>Home</h1>
			<Pretty data={props.mainObj} />
		</div>
	)
}

export default Home