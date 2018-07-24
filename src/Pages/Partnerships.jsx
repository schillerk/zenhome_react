import React, { Component } from 'react';

import team from '../pictures/productivity-startup-team.jpg';
import form from '../pictures/form.png';
import map from '../pictures/map2.png';
import status from '../pictures/status2.png';
import line from '../pictures/line.png';

import BigImage from '../Components/BigImage';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Overlay from '../Components/Overlay';
import Spacer from '../Components/Spacer'

import folders from '../pictures/folders.jpg';
import buildings from '../pictures/picture2-vibrance4.jpg';

class Partnerships extends Component {
  render() {
    return (
     <div className="page">
        <Text
          title="Working Together"
          text="We engage our users as equal partners in the implementation process by taking the time to deeply understand their challenges, jointly explore solutions, and rapidly prototying our products with our users in the real world."
          big
        />
        <div className="maybe-center">
          <Button
            link="background.html"
            text="GET IN TOUCH"
            fill
          />
          <Button
            link="background.html"
            text="READ THE FAQ"
          />
        </div>
        <BigImage img="unga"></BigImage>
        <Text
          title="A History of Success"
          text="Zenysis is already being deployed to help countries and NGOs harness the power of software to save lives, improve the quality of life of millions of citizens, and ensure that no populations are invisible to decision makers."
          shouldCenter
        />
        <Overlay
          title="Ethiopian Ministry of Health"
          text="Within months, we successly integrated over 10 vital health systems, allowing health analysts to leverage out platform to optimize the Nationwide Immunization Program."
          reversed
          img={buildings}
          link="Download the full case study"
        />
        <Spacer />
        <Spacer />
        <Overlay
          title="Networking HIV & AIDS Community of Southern Africa"
          text="Integrating programatic and financial data across 15 sub-recipients, we gave M&E specialists the tools they needed to better measure efficacay and improve beneficiary outcomes."
          img={folders}
          link="Download the case study"
        />
        <Text
          title="Want to Learn More?"
          text=""
          shouldCenter
        />
        <Spacer anti />
        <div className="center">
          <Button
            link="background.html"
            text="GET IN TOUCH"
            fill
          >
          </Button>
          <Button
            link="background.html"
            text="READ THE FAQ"
          />
        </div>
      </div>
    )
  }
}

export default Partnerships;