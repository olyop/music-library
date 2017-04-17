import React from 'react'

const tableHeader = () => (
	<tr>
		<th>Title</th>
		<th>Artist</th>
		<th>Album</th>
	</tr>
)

const tableFooter = () => (
	<tr>
		<td colSpan="3">Footer</td>
	</tr>
)

export { tableHeader, tableFooter }