import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <span>
        <div className="footer">
          <div className="pure-g footer-inner">
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                About
                <div className="footer-col-links">
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Partnerships</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Solutions</a></p>
                  <p><a href="https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%2218000926%22%5D">Team</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Implementation</a></p>
                </div>
              </div>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Products
                <div className="footer-col-links">
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Interactive Analytics</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Predictive Modeling</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Interoperability</a></p>
                </div>
              </div>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Life at Zenysis
                <div className="footer-col-links">
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Careers</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Diversity and Inclusion</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Open Roles</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Interviewing</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Students</a></p>
                </div>
              </div>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Contact
                <div className="footer-col-links">
                  <p>San Francisco, CA</p>
                  <p><a href="mailto:info@zenysis.com">info@zenysis.com</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Linkedin</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="legal-inner">
          © Copyright 2018 Zenysis Technologies
          <a className="logo" href="index.html">
            ZENYSIS
          </a>
        </div>
      </span>
    );
  }
}

export default Footer;