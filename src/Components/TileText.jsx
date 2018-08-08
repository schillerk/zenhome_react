import React, { Component } from 'react';

class TileText extends Component {
	render() {
		const { title, text, link } = this.props;
		return (
			<div className="icon-text">
        <h5 className="icon-text-bold">
          {title}
        </h5>
				<h5>{text}</h5>
        <br />
        <div onClick={this.props.onClick} className="h7" href="">{link}</div>
      </div>
		);
	}
}

export default TileText;