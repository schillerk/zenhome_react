import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Question extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      open: false,
    }
  }

  getKey() {
  	return `plusminus${this.props.answer.slice(0,15)}`
  }

  handleClick() {
  	this.setState({ open: !this.state.open });
  	const el = document.getElementsByClassName(this.getKey())[0];
		el.checked = !el.checked;
  }

  maybeRenderAnswer() {
		const { answer } = this.props;
  	return this.state.open && (
  		<div className="answer">
				{answer}
      </div>
		);
  }

	render() {
		const { question } = this.props;
		return (
			<div className="qa">
				<div onClick={this.handleClick.bind(this)} className="question">
        <input type="checkbox" id="plusminus" className={this.getKey()}></input>
				<button className="qa-toggle">
          <label htmlFor="plusminus">
					  <span></span>
					  <span></span>
				  </label>
				</button>
					{/*<span className="question-toggle">{this.state.open ? '-' : '+'}</span>*/}
					{question}
	      </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={10}
        >
		      {this.maybeRenderAnswer()}
        </ReactCSSTransitionGroup>
      </div>
		)
	}
}

export default Question;