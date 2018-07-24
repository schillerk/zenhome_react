import React, { Component } from 'react';

class TileText extends Component {
	render() {
		const { title, text } = this.props;
		return (
			<div className="icon-text">
        <div className="icon-text-bold">
          {title}
        </div>
          {text}
      </div>
		);
	}
}

export default TileText;