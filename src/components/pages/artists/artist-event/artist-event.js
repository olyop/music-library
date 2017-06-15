// Import React
import React from 'react'

import './artist-event.css'
import Request from 'react-http-request'
import Error from '../../../common/error'
import Loading from '../../../common/loading'

const ArtistEvent = props => {
	
	return (			
		<Request url={props.mainObj.info.bandsInTownApiLinks.start + 'GreenDay' + props.mainObj.info.bandsInTownApiLinks.end}>
			{
				({error, result, loading}) => {
					if (loading) {
						return (

							<Loading />

						)
					} else if (error) {
						return (

							<Error
								heading={'Cannot connect to API server'}
								subtitle={ String(error) } 
								listTitle="Please read this list to diagnose the problem"
								list={[
									'Connection to the server may be blocked by your provider or administrator',
									'Please check your internet connection'
								]} />

						)
					} else {
						console.log(result.body)
						return (
							<div className="artist-events">

								<div className="artist-events-bandsintown-logo">
									<a href={props.mainObj.info.bandsInTown.website}
										target="_blank">
										<img src={props.mainObj.info.bandsInTown.logoLink} alt="Bandsintown Logo"/>
									</a>
								</div>
								
								<div className="artist-events-list">
									
									{result.body.map((event, index) => (
										<div className="artist-events-event"
											key={index}>
											
											<div className="artist-event-event-left">
												<h4>{event.venue.name}</h4>
												<p>{event.venue.city + ', ' + event.venue.country}</p>
											</div>
											
											<div className="artist-event-event-right">{event.datetime.slice(0,10)}</div>
											
										</div>
									))}
									
								</div>
								
							</div>
						)
					}
				}
			}
		</Request>
	)
}

export default ArtistEvent