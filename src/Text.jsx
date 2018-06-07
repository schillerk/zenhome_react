import React, { Component } from 'react';

class Text extends Component {
	render() {
    const {title, text, attribution, paragraphClass, big} = this.props;
		return this.props.shouldCenter ? (
	    <div className="title-wrap-centered">
        {big ? <h2 className="big-title">{title}</h2> :
          <h3 className="big-title">{title}</h3>}
        <h5 className={`${paragraphClass ? paragraphClass : 'paragraph'}`}>{text}</h5>
        <h6 className="attribution">{attribution}</h6>
      </div>
		) : (
			<div className="title-wrap">
        {big ? <h2>{title}</h2> : <h3>{title}</h3>}
        <h5 className={`${paragraphClass ? paragraphClass : 'paragraph'}`}>
          {text.replace('<br />', "\u000A\u000A")}
        </h5>
      </div>
    )
	}
}

export default Text;