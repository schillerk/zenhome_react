import React, { Component } from 'react';

class BigImage extends Component {
	render() {
    const {title, text, img} = this.props;
		return (
			<div className="image-wrap">
        <div className={`image ${img}`}></div>
        <div className="heat-text">
          <span>{title}</span>
          <div className="heat-subtext">{text}</div>
        </div>
      </div>
		);
	}
}

export default BigImage;