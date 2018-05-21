import React, { Component } from 'react';

import Icon from './Icon';
import Text from './Text';
import Half from './Half';
import BigImage from './BigImage';
import TileText from './TileText';

class Diversity extends Component {
  render() {
    return (
      <div>
        <Text
          text="Dear All, It is very, very important that you login to Zenefits before EOD on Friday to proceed with open enrollment for dental and vision only. Disregard the medical option for now (the medical plan will be changed and that open enrollment for medical will occur in the next few weeks)."
          attribution="– Jonathan Stambolis, CEO"
          shouldCenter
        />
        <Half
          title="Building the future of space travel"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
        />
        <div class="features">
          <div class="pure-g">
            <div class="feature-col pure-u-lg-1-3">
              <tile-text
                title="Campus Recruiting"
                text="Our engineers work on a case-by-case basis to integrate data from existing health information systems into a unified view of an entire nation's health sector."
              ></tile-text>
            </div>
            <div class="feature-col pure-u-lg-1-3">
              <tile-text
                title="Powerful Analytics"
                text="Our visualization and transformation tools levelrage time-series, geospatial and statistical insights to empower health analysts."
              ></tile-text>
            </div>
            <div class="feature-col pure-u-lg-1-3">
              <tile-text
                title="Embedded Teams"
                text="We invest seriously in building sustainable capacity at every stage of implementation, and always scope deployments with the long-term goal of full local ownership."
              ></tile-text>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Diversity;