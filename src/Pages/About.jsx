import React, { Component } from 'react';

import Text from '../Components/Text';
import Icon from '../Components/Icon';
import TileText from '../Components/TileText';
import Button from '../Components/Button';
import Spacer from '../Components/Spacer'

class About extends Component {
  render() {
    return (
     <div className="page">
        <Text
          title="Build for Global&nbsp;Good"
          text="We create the software that governments and international organizations need to confront the biggest challenges facing humanity.<br />
          Our software enables them to strengthen the delivery of essential public services, respond to humanitarian emergencies, and tackle complex challenges with unprecedented precision and speed."
          big
        />
        <div className="images">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
              <div id="ian" className="portrait" alt='img'/>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
              <div id="ellen" className="portrait" alt='img'/>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
              <div id="pablo" className="portrait" alt='img'/>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-1-4">
              <div id="quentin" className="portrait" alt='img'/>
            </div>
          </div>
        </div>
        <Text
          title="Impact Focused From Design to Execution"
          text="We don’t launch projects for their own sake, or build features just to show off. Self-evaluation is at the heart of everything we do."
          shouldCenter
        />
        <div className="features">
          <div className="pure-g">
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="tool" />
              <TileText
                title="Product Excellence"
                text="We understand that addressing user needs requires more than building a tool. Intuitive interfaces and top-tier user research are necessities, not nice to haves."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="dotchart" />
              <TileText
                title="Technology for Human Empowerment"
                text="Our visualization and transformation tools leverage time-series, geospatial and statistical insights to enable flexible analysis for any type of problem."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="find" />
              <TileText
                title="Mission Motivated"
                text="We invest seriously in building sustainable capacity at every stage of implementation, and always scope deployments with the long term goal of full local ownership."
              />
            </div>
          </div>
        </div>
        <Spacer line />
        <Text
          title="World Class Team"
          text="Solving the hardest problems requires thinking across domains ranging from engineering to economic development, and excelling in all of them."
          shouldCenter
        />
        <div className="features">
          <div className="pure-g">
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="link" />
              <TileText
                title="Cross-Functionality"
                text="Our project managers have technical backgrounds and our engineers work directly with clients. Roles aren’t narrowly defined, and ownership is always expansive."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="codesquareo" />
              <TileText
                title="Technical Leadership"
                text="We see code as a means to an end, but that doesn’t mean neglecting systems architecture or R&D. We’re at the forefront of our technical domains, and invest seriously in internal infrastructure and tooling."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="medicinebox" />
              <TileText
                title="Domain Expertise"
                text="Since the problems we tackle extend far beyond the digital realm, we've brought on advisors, leaders and partner organizations with decades of experience thinking through everything from logistics to epidemiology."
              />
            </div>
          </div>
        </div>
        <Spacer line />
        <Text
          title="Life at Zenysis"
          text="We move at a speed compatible with employee happiness and try our best not to break anything. Less of a sprint and more of a brisk saunter."
          shouldCenter
        />
        <div className="features">
          <div className="pure-g">
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="earth" />
              <TileText
                title="Diversity and Inclusion"
                text="As a global company working with vulnerable populations, diversity of identity and experience is both a business and moral imperative. We have a long way to go, but we’re working to get there."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="home" />
              <TileText
                title="Lives Outside the Office"
                text="We don’t use “passion” as code for “80 hour work week”. Because we’re building a company for long-term impact, we’ve chosen to be proactive about ensuring a healthy work/life balance."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="rest" />
              <TileText
                title="Sensible Indulgence"
                text="We don’t have bean bags, ping pong or beer on tap, but offer top-line health coverage, noise canceling headphones, and whatever else is essential to doing your best job."
              />
            </div>
          </div>
        </div>
        <Spacer line />
        <Text
          title="Join the Team"
          text="Come build products, relationships and tools to transform the next decade of development."
          shouldCenter
        />
        <div className="center">
          <Button text="OPEN ROLES" fill onClick={this.props.handleChange.bind(this, 'careers')} />
        </div>
      </div>
    )
  }
}

export default About;
