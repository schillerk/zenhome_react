import React, { Component } from 'react';

import anteneh from './pictures/anteneh.jpg';

import Icon from './Icon';
import Half from './Half';
import Text from './Text';
import BigImage from './BigImage';
import TileText from './TileText';

class Careers extends Component {
  render() {
    return (
      <div>
        <Text
          title="SLEEP LESS. ACHIEVE&nbspMORE."
          text="We've made extraordinary progress in our first year: our software is already helping governments meet the challenge of providing lifesaving healthcare to more than 100 million people.<br></br>
          Now we're looking for exceptional people who can help us reach the next billion and beyond."
        />
        <div className="images">
          <div className="pure-g">
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} />
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} />
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} />
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Careers;