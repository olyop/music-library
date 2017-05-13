import React from 'react'
import Song from './song'
import { TableHeader, TableFooter } from '../../helpers/songs-helper'
import './songs.css'

const Songs = props => {
	
	// Sort songs by album
	props.mainObj.songs.sort(function(a, b){
    if (a.albumName < b.albumName) return - 1
    if (a.albumName > b.albumName) return 1
    return 0
	})
	
	return (
		<div className="songs">
			<table>
				
				<TableHeader mainObj={props.mainObj} />
				
				<tbody>
					{props.mainObj.songs.map((song, index) => (
						<Song key={index}
							playSong={props.playSong}
							currentSong={props.currentSong}
							song={song} />
					))}
				</tbody>
				
				<TableFooter text={props.mainObj.length.songs}/>
				
			</table>
		</div>
	)
}

export default Songs