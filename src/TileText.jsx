import React, { Component } from 'react';

class TileText extends Component {
	render() {
		const { title, text } = this.props;
		return (
			<div class="icon-text">
        <div class="icon-text-bold">
          {title}
        </div>
          {text}
      </div>
		);
	}
}

export default TileText;