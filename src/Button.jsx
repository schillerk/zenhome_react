import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { link, extraClass, text, fill} = this.props;
		return (
			<a href={link} className={`btn ${fill ? 'btn-fill' : ''} ${extraClass}`}>
				{text}
      </a>
		)
	}
}

export default Button;