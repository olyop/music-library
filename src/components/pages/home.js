import React from 'react'

class Pretty extends React.Component {
  
  render() {
    
    let preStyle = {
      display: 'block',
      padding: '10px 30px',
      margin: '0',
      padding: '20px',
      overflow: 'scroll',
      backgroundColor: '#fff',
      border: 'none'
    }
    
    return (
      <div style={this.style}>
        <pre style={preStyle}>
          {JSON.stringify(this.props.data, null, 2) }
        </pre>
      </div>
    )
  }
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