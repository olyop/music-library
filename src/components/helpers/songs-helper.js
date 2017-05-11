import React from 'react'

const TableHeader = props => {
	const style = {
		backgroundColor: props.mainObj.info.colors.p.f,
		border: '1px solid ' + props.mainObj.info.colors.p.f
	}
	return (
		<thead>
			<tr>
				<th style={style}
					className="song-cover">
					<div className="song-icon"><i className="material-icons">image</i></div>
				</th>
				<th style={style}>Title</th>
				<th style={style}
					className="song-length">
					<div className="song-icon"><i className="material-icons">access_time</i></div>
				</th>
				<th style={style}>Artist</th>
				<th style={style}>Album</th>
			</tr>
		</thead>
	)
}

const TableFooter = props => (
	<tfoot>
		<tr>
			<td colSpan="5"><b>{props.text}</b> songs.</td>
		</tr>
	</tfoot>
)

export { TableHeader, TableFooter }