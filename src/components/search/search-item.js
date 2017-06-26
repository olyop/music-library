import React from 'react'
import Highlighter from 'react-highlight-words'

class SearchItem extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = { obj: props.obj }
  }
  
  render() {
    
    const props = this.props
    
    return (
      <div className="search-item">
        <div className="search-item-icon"
          onClick={ () => props.playEvent(props.playEventParam) }>
          <i className="material-icons search-item-icon-type">{props.iconText}</i>
          <i className="material-icons search-item-play">play_circle_filled</i>
        </div>
				
        <div className="search-img"
          title={props.heading}
					style={{ backgroundImage: 'url(' + props.img + ')' }}>
					
        </div>
        <div className="search-item-inner">
          <p>
            <span title={props.heading}
              onClick={ () => props.headingEvent(props.headingEventParam) }>
            
              <Highlighter
                highlightClassName='search-item-highlighted'
                searchWords={[ props.input ]}
                textToHighlight={props.heading} />
              
            </span>
          </p>
          <div>
            <span title={props.span1}
              className="search-item-span-main"
              onClick={ props.span1Event === undefined ? false : () => props.span1Event(props.span1EventParam) }>
              {props.span1}</span>
            {' '}&#8211;{' '}
            <span title={props.span2}
              onClick={ props.span1Event === undefined ? false : () => props.span2Event(props.span2EventParam) }>{props.span2}</span>
          </div>
        </div>
      </div>
    )
  }
  
}

export default SearchItem