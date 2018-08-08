import React, { Component } from 'react';

class Icon extends Component {
	render() {
		const { img } = this.props;
		return (
			<div className="icon-wrap">
        <i class={`icon anticon icon-${img}`}></i>
      </div>
		)
	}
}

export default Icon;