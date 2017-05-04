import React from 'react'

const TableHeader = props => {
	const style = {
		backgroundColor: props.info.colors.p.f,
		border: '1px solid ' + props.info.colors.p.f
	}
	return (
		<tr>
			<th style={style}
				className="song-cover">Cover</th>
			<th style={style}>Title</th>
			<th style={style}
				className="song-length">
				<div className="song-length-inner"><i className="material-icons">access_time</i></div>
			</th>
			<th style={style}>Artist</th>
			<th style={style}>Album</th>
		</tr>
	)
}

const TableFooter = props => (
	<tr>
		<td colSpan="5"><b>{props.text}</b> songs.</td>
	</tr>
)

export { TableHeader, TableFooter }