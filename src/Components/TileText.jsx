import React, { Component } from 'react';

class TileText extends Component {
	render() {
		const { title, text } = this.props;
		return (
			<div className="icon-text">
        <h5 className="icon-text-bold">
          {title}
        </h5>
				<h5>{text}</h5>
      </div>
		);
	}
}

export default TileText;