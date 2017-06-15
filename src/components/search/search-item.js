import React from 'react'
import Highlighter from 'react-highlight-words'

class SearchItem extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = { obj: props.obj }
  }
  
  render() {
    let props = this.props
    return (
      <div className="search-item"
        onClick={ obj => props.event(this.state.obj) }>
        <div className="search-item-icon">
          <i className="material-icons search-item-icon-type">{props.iconText}</i>
          <i className="material-icons search-item-play">play_circle_filled</i>
        </div>
				
        <div className="search-img"
          title={props.heading}
					style={{ backgroundImage: 'url(' + props.img + ')' }}>
					
        </div>
        <div className="search-item-inner">
          <p>
            <span title={props.heading}>
            
              <Highlighter
                highlightClassName='search-item-highlighted'
                searchWords={[ props.input ]}
                textToHighlight={props.heading} />
              
            </span>
          </p>
          <div>
            <span title={props.span1}
              className="search-item-span-main">
              {props.span1} </span>
            &#8211;
            <span title={props.span2}> {props.span2}</span>
          </div>
        </div>
      </div>
    )
  }
  
}

export default SearchItem