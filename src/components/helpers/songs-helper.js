import React from 'react'

const TableHeader = props => {
	const style = {
		backgroundColor: props.info.colors.p.f,
		border: '1px solid ' + props.info.colors.p.f
	}
	return (
		<tr>
			<th style={style}>Title</th>
			<th style={style}>Artist</th>
			<th style={style}>Album</th>
		</tr>
	)
}

const TableFooter = props => (
	<tr>
		<td colSpan="3">{props.text}</td>
	</tr>
)

export { TableHeader, TableFooter }