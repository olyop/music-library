import React from 'react'
import { tableHeader, tableFooter } from '../helpers/songs-helper'
import './songs.css'

const Songs = props => {
	
	const songsList = props.mainObj.songs.map((song, index) => (
		<tr key={index}
			className="song">
			<td>{song.title}</td>
			<td>{song.artistName}</td>
			<td>{song.albumName}</td>
		</tr>
	))
	
	return (
		<div className="songs">
			<table>
				<thead>{tableHeader}</thead>
				<tbody>{songsList}</tbody>
				<tfoot>{tableFooter}</tfoot>
			</table>
		</div>
	)
}

export default Songs