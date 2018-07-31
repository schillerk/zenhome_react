import React, { Component } from 'react';

import jess from '../pictures/jess.png'
import chandra from '../pictures/chandra.png'
import jaime from '../pictures/jaime.png'
import doug from '../pictures/doug.png'
import team from '../pictures/productivity-startup-team.jpg';

import Text from '../Components/Text';
import Overlay from '../Components/Overlay';
import Spacer from '../Components/Spacer'
import Button from '../Components/Button';

import smoothscroll from 'smoothscroll-polyfill';

class Careers extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://hire.withgoogle.com:443/s/embed/jobs.js?company=zenysiscom";
    script.async = true;
    script.id = 'bebop-embed-loader';
    document.body.appendChild(script);

    smoothscroll.polyfill();
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
        <div className="maybe-center">
          <Button text="OPEN ROLES" fill onClick={() => {
            document.querySelector('.open-roles').scrollIntoView({ behavior: 'smooth' });
;
          }} />
        </div>
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
          text="Product specs never survive contact with the real world, but we can still be rigorous about ensuring that our systems fail sensibly, with appropriate documentation, and in isolated test environments. We build solutions to the world’s messiest problems, and embrace complexity at every step."
          img={team}
        />
        <Spacer />
        <Overlay
          title="Human-Centred Product Design"
          text="Our product development is most effective at the intersection of users’ needs and technological innovation. We strive to understand our user’s most pressing needs, while pushing them to engage with possibilities far outside their realm of comfort and experience."
          reversed
          img={team}
        />
        <Spacer />
        <Overlay
          title="Sustainable Business Development"
          text="Our mission is altruistic at its core, but our plan for getting there is ruthlessly pragmatic. In order to create lasting good, we’re equally dedicated to developing the long-term strategic and operational capacity required to succeed at scale."
          img={team}
        />
        <Spacer anti />
        <span className="open-roles">
          <Text
            title="Open Roles"
            text="We know you're more than your resume, but it's a good place to start.<br />Don't see a good fit? Email jobs@zenysis.com and let us know."
            shouldCenter
          />
        </span>
        <div className="bebop-jobs"></div>
      </div>
    )
  }
}

export default Careers;