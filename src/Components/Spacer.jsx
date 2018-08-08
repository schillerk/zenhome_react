import React, { Component } from 'react';

class Spacer extends Component {
	render() {
		const { anti, line, margin } = this.props;
		if (margin) {
			return (
				<div className="spacer" style={{marginTop: margin}}></div>
			)
		}
		if (anti) {
			return (
				<div className="spacer-anti"></div>
			)
		}
		return line ? (
			<span>
				<div className="spacer-line"></div>
				<div className="spacer-line spacer-line--border"></div>
			</span>
		) : (
			<div className={`spacer ${this.props.line ? 'spacer__line' : ''}`}></div>
		);
	}
}

export default Spacer;