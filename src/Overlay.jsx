import React, { Component } from 'react';

import earth from './pictures/earth.jpg';
import Text from './Text';

class Overlay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullWidth: window.innerWidth < 1024,
		};
		this.handleResize = this.handleResize.bind(this);
	}

	componentWillMount() {
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize" , this.handleResize);
	}

	handleResize() {
		if (this.state.fullWidth !== (window.innerWidth < 1024)) {
			this.setState({
				fullWidth: window.innerWidth < 1024,
			});
		}
	}

	renderImage(classes) {
		return (
			<div className={`pure-u-md-1-1 pure-u-lg-2-3 overlay-half-img ${classes}`}>
				<img className="pure-img" src={earth} alt="earth"/>
			</div>
		)
	}

	renderText(classes) {
		const {title, text, reversed} = this.props;
		return (
			<div className={`pure-u-md-1-1 pure-u-lg-1-3 overlay-half-text
					${classes} ${reversed ? 'overlay-half-text-reversed' : ''}`}>
				<Text paragraphClass={'overlay-half-paragraph'} title={title} text={text} />
			</div>
		)
	}

	renderContent() {
		const { fullWidth } = this.state;

		const fullClass = fullWidth ? 'half-full' : '';

		const {reversed} = this.props;
		if (reversed && !fullWidth) {
			return (
				<div>
					{this.renderText(`overlay-half-first ${fullClass}`)}
					{this.renderImage(`overlay-half-second ${fullClass}`)}
				</div>
			)
		}
		return (
			<div>
				{this.renderImage(`overlay-half-first ${fullClass}`)}
				{this.renderText(`overlay-half-second ${fullClass}`)}
			</div>
		)
	}

	render() {
		return (
			<div className="overlay-half">
				{this.renderContent()}
			</div>
		);
	}
}

export default Overlay;