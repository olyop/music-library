import React from 'react'
import { TableHeader, TableFooter } from '../helpers/songs-helper'
import './songs.css'

const Songs = props => {
	
	const songsList = props.mainObj.songs.map((song, index) => {	
		return (
			<tr key={index}
				className="song">
				<td>{song.title}</td>
				<td>{song.artistName}</td>
				<td>{song.albumName}</td>
			</tr>
		)
	})
	
	return (
		<div className="songs">
			<table>
				<thead>
					<TableHeader info={props.info}/>
				</thead>
				<tbody>
					{songsList}
				</tbody>
				<tfoot>
					<TableFooter text={props.mainObj.length.songs}/>
				</tfoot>
			</table>
		</div>
	)
}

export default Songs