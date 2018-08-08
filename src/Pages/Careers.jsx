import React, { Component } from 'react';

import team from '../pictures/team.jpg';
import work from '../pictures/work.jpg';
import chess from '../pictures/chess.jpg';

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
          text="Since 2016, our software has empowered governments around the world to provide lifesaving healthcare, upgrade infrastructure, and track everything from malaria outbreaks to trends in maternal health.<br />
          In our first couple years, we've already reached populations over 100 million, help us reach the next billion and beyond."
          big
        />
        <div className="maybe-center">
          <Button text="OPEN ROLES" fill onClick={() => {
            document.querySelector('.open-roles').scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>
        <div className="images">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <div id="nina" className="portrait" alt='img'/>
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <div id="vinh" className="portrait" alt='img'/>
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <div id="claire" className="portrait" alt='img'/>
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <div id="stephen" className="portrait" alt='img'/>
            </div>
          </div>
        </div>
        <Overlay
          title="Engineering Excellence"
          text="We build solutions to the world’s messiest problems, and embrace complexity at every step. When systems falter, we're rigorous about ensuring that they fail sensibly, with appropriate documentation, and in isolated test environments."
          reversed
          img={work}
        />
        <Spacer />
        <Overlay
          title="Business Strategy and Partnerships"
          text="In order to create lasting good, we’re equally dedicated to developing the long-term operational capacity required to succeed at scale."
          img={chess}
        />
        <Spacer />
        <Overlay
          title="Human-Centred Product Design"
          text="Our product development is most effective at the intersection of user needs and technological innovation. We strive for understanding, but push clients to engage with possibilities outside their realm of experience."
          reversed
          img={team}
        />
        <Spacer margin='-170px' />
        <span className="open-roles">
          <Text
            title="Open Roles"
            text="We know you're more than your resume, but it's a good place to start.<br />Don't see a good fit? Email jobs@zenysis.com and let us know."
            shouldCenter
          />
        </span>
        <div className="bebop-jobs-wrap">
          <div className="bebop-jobs"></div>
        </div>
      </div>
    )
  }
}

export default Careers;