import React, { Component } from 'react';

import earth from './pictures/earth.jpg';
import Text from './Text';

class Half extends Component {
	renderImage(sideClass) {
		return (
			<div className={`pure-u-md-1-1 pure-u-lg-1-2 ${sideClass}`}>
				<img className="pure-img" src={earth} />
		</div>
		)
	}

	renderText(sideClass) {
		const {title, text} = this.props;
		return (
			<div className={`pure-u-md-1-1 pure-u-lg-1-2 ${sideClass} half-text`}>
				<Text shouldCenter title={title} text={text} />
			</div>
		)
	}

	renderContent() {
		const {reversed} = this.props;
		if (reversed) {
			return (
				<div>
					{this.renderText('half-first')}
					{this.renderImage('half-second')}
				</div>
			)
		}
		return (
			<div>
				{this.renderImage('half-first')}
				{this.renderText('half-second')}
			</div>
		)
	}

	render() {
		return (
			<div className="pure-g half">
				{this.renderContent()}
			</div>
		);
	}
}

export default Half;