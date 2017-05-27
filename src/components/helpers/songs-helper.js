import React from 'react'

const TableHeader = props => (
  <thead>
    <tr>
      <th className="song-cover">
        <div className="song-icon"><i className="material-icons">image</i></div>
      </th>
      <th>Title</th>
      <th className="song-length">
        <div className="song-icon"><i className="material-icons">access_time</i></div>
      </th>
      <th>Artist</th>
      <th>Album</th>
    </tr>
  </thead>
)

const TableFooter = props => (
	<tfoot>
		<tr>
			<td colSpan="5"><b>{props.text}</b> songs.</td>
		</tr>
	</tfoot>
)

export { TableHeader, TableFooter }