import React from 'react'

const SearchItem = ({ info, heading, iconText, img, span1, span2 }) => (
	<div className="search-item">
		<div className="search-item-icon">
			<i className="material-icons search-item-icon-type">{iconText}</i>
			<i className="material-icons search-item-play">play_circle_filled</i>
		</div>
		<div className="search-img">
			<img src={img}
				title={heading}
				alt={heading} />
		</div>
		<div className="search-item-inner">
			<p>
				<span title={heading}>{heading}</span>
			</p>
			<div>
				<span title={span1} className="search-item-span-main">{span1}</span> &#8211; <span title={span2}>{span2}</span>
			</div>
		</div>
	</div>
)

export default SearchItem