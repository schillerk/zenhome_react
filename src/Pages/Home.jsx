import React, { Component } from 'react';

import Icon from '../Components/Icon';
import Text from '../Components/Text';
import BigImage from '../Components/BigImage';
import TileText from '../Components/TileText';
import Button from '../Components/Button';

class Home extends Component {
  render() {
    return (
     <div className="page">
        <Text
          title="Impact-Driven Technology"
          text="We build software to integrate and analyze fragmented information systems at a national scale.<br />
            Our tools allow decision-makers to contextualize their data, catalyze meaningful breakthroughs in performance, and respond to humanitarian emergencies with unpredencented speed."
          big
        />
        <div className="maybe-center">
          <Button
            onClick={this.props.handleChange.bind(this, 'about')}
            text="LEARN MORE"
            fill
          />
          <Button
            onClick={this.props.handleChange.bind(this, 'careers')}
            text="JOIN THE TEAM"
          />
        </div>
        <BigImage
          title="Bring Data to Global&nbsp;Health"
          text="Uncover insights to catalyze major breakthroughs in health system performance."
          img="heat"
        ></BigImage>
        <div className="features">
          <div className="pure-g">
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="addusergroup" />
              <TileText
                title="Careers at Zenysis"
                text="Since roles are scoped by project ownership, you’ll have the chance and obligation to take responsibility for the impact of your work."
                link="See open roles."
                onClick={this.props.handleChange.bind(this, 'careers')}
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="hearto" />
              <TileText
                title="Our Culture and Values"
                text="We're commited to helping the world’s most vulnerable populations in areas with opportunities for outsized systems-level change."
                link="Read about our mission."
                onClick={this.props.handleChange.bind(this, 'about')}
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="API" />
              <TileText
                title="Platform Capabilities"
                text="Our products serve as the interoperability layer for all existing data, not the next competing standard."
                link="Explore our features."
                onClick={this.props.handleChange.bind(this, 'product')}
              />
            </div>
          </div>
        </div>
        <div className="center">
          <Button
            onClick={this.props.handleChange.bind(this, 'about')}
            text="LEARN MORE"
            fill
          >
          </Button>
          <Button
            onClick={this.props.handleChange.bind(this, 'careers')}
            text="JOIN THE TEAM"
          />
        </div>
      </div>
    )
  }
}

export default Home;