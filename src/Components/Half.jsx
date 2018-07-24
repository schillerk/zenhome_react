import React, { Component } from 'react';

import earth from '../pictures/earth.jpg';
import Text from './Text';

class Half extends Component {
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
			<div className={`pure-u-md-1-1 pure-u-lg-1-2 ${classes}`}>
				<img className="pure-img" src={earth} alt="earth"/>
			</div>
		)
	}

	renderText(classes) {
		const {title, text} = this.props;
		return (
			<div className={`pure-u-md-1-1 pure-u-lg-1-2 half-text ${classes}`}>
				<Text shouldCenter title={title} text={text} />
			</div>
		)
	}

	renderContent() {
		const { fullWidth } = this.state;
		const extraClass = fullWidth ? 'half-full' : '';
		const {reversed} = this.props;

		if (reversed && !fullWidth) {
			return (
				<div>
					{this.renderText(`half-first ${extraClass}`)}
					{this.renderImage(`half-second ${extraClass}`)}
				</div>
			)
		}
		return (
			<div>
				{this.renderImage(`half-first ${extraClass}`)}
				{this.renderText(`half-second ${extraClass}`)}
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