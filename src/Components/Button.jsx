import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { extraClass, text, fill, onClick } = this.props;
		return (
			<div onClick={onClick} className={`btn ${fill ? 'btn-fill' : ''} ${extraClass}`}>
				{text}
      </div>
		)
	}
}

export default Button;