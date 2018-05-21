import React, { Component } from 'react';

import earth from './pictures/earth.jpg';

class Half extends Component {
	render() {
		const {title, text} = this.props;
		return (
			<div class="pure-g">
				<div class="pure-u-md-1-1 pure-u-lg-1-2">
					<img class="pure-img" src={earth} />
				</div>
				<div class="pure-u-md-1-1 pure-u-lg-1-2">
					<div>{title}</div>
					<div>{text}</div>
				</div>
			</div>
		);
	}
}

export default Half;