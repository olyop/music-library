// Import React
import React from 'react'

// Import CSS
import './artist-window.css'

class ArtistWindow extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			obj: props.artist
		}
	}
	
	render() {
		
		const props = this.props,
					state = this.state
		
		let groupstyle = {
			backgroundImage: 'url(' + props.mainObj.info.webStorageLink + state.obj.artistId + '/group.jpg)'
		}
		
		let logoStyle = {
			backgroundImage: 'url(' + props.mainObj.info.webStorageLink + state.obj.artistId + '/logo.jpg)'
		}
		
		return (
			<div className="window artist-window">
				
				<div className="artist-window-cover" style={groupstyle}></div>
				
				<div className="artist-window-logo" style={logoStyle}
					onClick={props.closeArtistWindow}></div>
				
				<div className="container artist-window-content">
					<div className='row'>
						<div className="col-md-12">
						
							<h1>{state.obj.title}</h1>
					
							<div className="artist-window-sub-heading">

								<h2 className="artist-window-sub-heading-sides">Year Formed: {state.obj.yearFormed}</h2>
								<h2>Origin: 	{state.obj.origin}</h2>
								<div className="artist-window-sub-heading-sides">
									<a href={state.obj.website} title={state.obj.title + ', website.'} target="_blank">
										<i className="material-icons">open_in_new</i>
										Website
									</a>
								</div>

							</div>

							<p>
								{state.obj.briefDesc + ' '} 
								<a href={state.obj.wikipedia} target="_blank">Wikipedia</a>
							</p>
							
						</div>
					</div>
				</div>
				
			</div>
		)
	}	
}

export default ArtistWindow