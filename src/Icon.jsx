import React, { Component } from 'react';

class Icon extends Component {
	render() {
		const {img} = this.props;
		return (
			<div className="icon-wrap">
        <div className={`icon ${img}`}></div>
      </div>
		)
	}
}

export default Icon;