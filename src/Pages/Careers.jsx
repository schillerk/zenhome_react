import React, { Component } from 'react';

import jess from '../pictures/jess.png'
import chandra from '../pictures/chandra.png'
import jaime from '../pictures/jaime.png'
import doug from '../pictures/doug.png'
import team from '../pictures/productivity-startup-team.jpg';

import Text from '../Components/Text';
import Overlay from '../Components/Overlay';
import Spacer from '../Components/Spacer'

class Careers extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://hire.withgoogle.com:443/s/embed/jobs.js?company=zenysiscom";
    script.async = true;
    script.id = 'bebop-embed-loader';
    document.body.appendChild(script);
  }

  render() {
    return (
     <div className="page">
        <Text
          title="Careers at Zenysis"
          text="We've made extraordinary progress in our first year: our software is already helping governments meet the challenge of providing lifesaving healthcare to more than 100 million people.<br />
          Now we're looking for exceptional people who can help us reach the next billion and beyond."
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
        <Overlay
          title="Engineering Excellence"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          img={team}
        />
        <Spacer />
        <Overlay
          title="Human-Centred Product Design"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          reversed
          img={team}
        />
        <Spacer />
        <Overlay
          title="Sustainable Business Development"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          img={team}
        />
        <Spacer />
        <Text
          title="Find Your Fit"
          text="We know you're more than your resume, but it's a good place to start."
          shouldCenter
        />
        <div className="bebop-jobs"></div>
        <Spacer anti />
      </div>
    )
  }
}

export default Careers;