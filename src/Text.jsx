import React, { Component } from 'react';

class Text extends Component {
	render() {
    const {title, text, attribution} = this.props;
		return this.props.shouldCenter ? (
	    <div className="title-wrap-centered">
        <h2 className="big-title">{title}</h2>
        <h5 className="paragraph">{text}</h5>
        <h6 className="attribution">{attribution}</h6>
      </div>
		) : (
			<div className="title-wrap">
        <h2>{title}</h2>
        <h5 className="paragraph">{text}</h5>
      </div>
    )
	}
}

export default Text;