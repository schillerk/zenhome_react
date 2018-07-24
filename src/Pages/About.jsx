import React, { Component } from 'react';

import jess from '../pictures/jess.png'
import chandra from '../pictures/chandra.png'
import jaime from '../pictures/jaime.png'
import doug from '../pictures/doug.png'

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
          title="Tech for Global&nbsp;Good"
          text="We build the software that governments and international organizations need to confront some of the biggest challenges facing humanity.<br />
          Our software helps them rapidly strengthen the delivery of essential public services, respond to large-scale humanitarian emergencies, and tackle complex challenges with unprecedented precision and speed."
          big
        />
        <div className="images">
          <div className="pure-g">
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={jess} alt='img'/>
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={chandra} alt='img'/>
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={jaime} alt='img'/>
            </div>
            <div className="pure-u-md-1-2 pure-u-lg-1-4">
              <img className="pure-img" src={doug} alt='img'/>
            </div>
          </div>
        </div>
        <Text
          title="Mission Driven From Design to Execution"
          text="From NGOs to Federal Ministries, our clients rely on our services to provide first-in-class solutions to the most critical problems they face."
          shouldCenter
        />
        <div className="features">
          <div className="pure-g">
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="integrations" />
              <TileText
                title="Product Excellence"
                text="Our engineers work on a case-by-case basis to integrate data from existing health information systems into a unified view of an entire nation's health sector."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="analytics" />
              <TileText
                title="Rigorous M&E"
                text="Our visualization and transformation tools levelrage time-series, geospatial and statistical insights to empower health analysts."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="teams" />
              <TileText
                title="Impact Focus"
                text="We invest seriously in building sustainable capacity at every stage of implementation, and always scope deployments with the long-term goal of full local ownership."
              />
            </div>
          </div>
        </div>
        <Spacer line />
        <Text
          title="World Class Team"
          text="From NGOs to Federal Ministries, our clients rely on our services to provide first-in-class solutions to the most critical problems they face."
          shouldCenter
        />
        <div className="features">
          <div className="pure-g">
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="integrations" />
              <TileText
                title="Cross-Functional"
                text="Our engineers work on a case-by-case basis to integrate data from existing health information systems into a unified view of an entire nation's health sector."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="analytics" />
              <TileText
                title="Technical Leadership"
                text="Our visualization and transformation tools levelrage time-series, geospatial and statistical insights to empower health analysts."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="teams" />
              <TileText
                title="Domain Expertise"
                text="We invest seriously in building sustainable capacity at every stage of implementation, and always scope deployments with the long-term goal of full local ownership."
              />
            </div>
          </div>
        </div>
        <Spacer line />
        <Text
          title="Life at Zenysis"
          text="From NGOs to Federal Ministries, our clients rely on our services to provide first-in-class solutions to the most critical problems they face."
          shouldCenter
        />
        <div className="features">
          <div className="pure-g">
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="integrations" />
              <TileText
                title="International Offices"
                text="Our engineers work on a case-by-case basis to integrate data from existing health information systems into a unified view of an entire nation's health sector."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="analytics" />
              <TileText
                title="Startup Perks wihout Startup Bullshit"
                text="Our visualization and transformation tools levelrage time-series, geospatial and statistical insights to empower health analysts."
              />
            </div>
            <div className="feature-col pure-u-lg-1-3">
              <Icon img="teams" />
              <TileText
                title="Mentorship and Development"
                text="We invest seriously in building sustainable capacity at every stage of implementation, and always scope deployments with the long-term goal of full local ownership."
              />
            </div>
          </div>
        </div>
        <Spacer line />
        <Text
          title="Join the Team"
          text="From NGOs to Federal Ministries, our clients rely on our services to provide first-in-class solutions to the most critical problems they face."
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
