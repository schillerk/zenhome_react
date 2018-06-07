import React, { Component } from 'react';

import anteneh from './pictures/anteneh.jpg';

import Text from './Text';
import Overlay from './Overlay';
import Icon from './Icon';
import TileText from './TileText';
import Button from './Button';

class Careers extends Component {
  render() {
    return (
      <div>
        <Text
          title="SLEEP LESS. ACHIEVE&nbsp;MORE."
          text="We've made extraordinary progress in our first year: our software is already helping governments meet the challenge of providing lifesaving healthcare to more than 100 million people.<br />
          Now we're looking for exceptional people who can help us reach the next billion and beyond."
          big
        />
        <div className="images">
          <div className="pure-g">
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} alt='img'/>
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} alt='img'/>
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} alt='img'/>
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={anteneh} alt='img'/>
            </div>
          </div>
          <Overlay
            title="Leaders in space health"
            text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          />
          <Overlay
            title="Leaders in space health"
            text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
            reversed
          />
          <Overlay
            title="Leaders in space health"
            text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          />
          <Text
            title="Grow at the rate of Growth"
            text="This piece, however, will focus on compilers. The job of a compiler is to take source code and translate it into a target code with the same meaning."
            shouldCenter
          />
          <div className="features">
            <div className="pure-g">
              <div className="feature-col pure-u-lg-1-3">
                <Icon img="integrations" />
                <TileText
                  title="Custom Integrations"
                  text="Our engineers work on a case-by-case basis to integrate data from existing health information systems into a unified view of an entire nation's health sector."
                />
              </div>
              <div className="feature-col pure-u-lg-1-3">
                <Icon img="analytics" />
                <TileText
                  title="Powerful Analytics"
                  text="Our visualization and transformation tools levelrage time-series, geospatial and statistical insights to empower health analysts."
                />
              </div>
              <div className="feature-col pure-u-lg-1-3">
                <Icon img="teams" />
                <TileText
                  title="Embedded Teams"
                  text="We invest seriously in building sustainable capacity at every stage of implementation, and always scope deployments with the long-term goal of full local ownership."
                />
              </div>
            </div>
            <div className="center">
              <Button text="LEARN MORE" fill/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Careers;