import React, { Component } from 'react';

class Text extends Component {
  maybeRenderLink() {
    const { link } = this.props;
    if (link) {
      return (
        <span>
          <br />
          <div className="h7">{link}</div>
        </span>
      );
    }
  }

	render() {
    const { title, text, attribution, paragraphClass, big, small } = this.props;
		return this.props.shouldCenter ? (
	    <div className="title-wrap-centered">
        {big ? <h1 className="big-title">{title}</h1> :
          <h2 className={`big-title ${small ? 'small-title' : ''}`}>{title}</h2>}
        <h5 className={`${paragraphClass ? paragraphClass : 'paragraph'}`}>
          {text.replace('<br />', "\u000A\u000A")}
        </h5>
        <h6 className="attribution">{attribution}</h6>
      </div>
		) : (
			<div className="title-wrap">
        {big ? <h1>{title}</h1> : <h2 className={`${small ? 'small-title' : ''}`}>{title}</h2>}
        <h5 className={`${paragraphClass ? paragraphClass : 'paragraph'}`}>
          {text.replace('<br />', "\u000A\u000A")}
        </h5>
        {this.maybeRenderLink()}
      </div>
    )
	}
}

export default Text;