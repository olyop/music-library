import React from 'react'

class SearchItem extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = { obj: props.obj }
  }
  
  render() {
    let props = this.props
    return (
      <div className="search-item"
        onClick={ obj => props.onClick(this.state.obj) }>
        <div className="search-item-icon">
          <i className="material-icons search-item-icon-type">{props.iconText}</i>
          <i className="material-icons search-item-play">play_circle_filled</i>
        </div>
        <div className="search-img">
          <img src={props.img}
            title={props.heading}
            alt={props.heading} />
        </div>
        <div className="search-item-inner">
          <p><span title={props.heading}>{props.heading}</span></p>
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