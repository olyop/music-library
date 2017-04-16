import React from 'react'

const SearchItem = ({ heading, img, span1, span2 }) => (
	<div className="search-item">
		<img src={img}
			title={heading}
			alt={heading} />
		<div className="search-item-inner">
			<p><span title={heading}>{heading}</span></p>
			<div>
				<span title={span1}>{span1}</span> &#8211; <span title={span2}>{span2}</span>
			</div>
		</div>
	</div>
)

export default SearchItem