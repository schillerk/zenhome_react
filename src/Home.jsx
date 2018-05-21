import React, { Component } from 'react';

import Icon from './Icon';
import Text from './Text';
import BigImage from './BigImage';
import TileText from './TileText';

class Home extends Component {
  render() {
    return (
     <span>
        <Text
          title="IMPACT DRIVEN TECHNOLOGY"
          text="We build software that integrate and analyze fragmented health information systems.<br></br>
            Our tools empower decision-makers to contextualize their data, catalyze meaningful breakthroughs in performance, and respond to national-scale humanitarian emergencies with unpredencented speed."
        />
        <div className="maybe-center">
          <vue-button
            link="background.html"
            classing="btn-fill"
            text="CONTACT US">
          </vue-button>
          <vue-button
            link="background.html"
            text="LEARN MORE">
          </vue-button>
        </div>
        <BigImage
          title="BRING DATA TO GLOBAL&nbsp;HEALTH"
          text="Uncover insights to catalyze major breakthroughs in health system performance."
          img="heat"
        ></BigImage>
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
        </div>
        <div className="center">
          <vue-button
            link="background.html"
            classing="btn-fill"
            text="CONTACT US">
          </vue-button>
          <vue-button
            link="background.html"
            text="LEARN MORE">
          </vue-button>
        </div>
      </span>
    )
  }
}

export default Home;