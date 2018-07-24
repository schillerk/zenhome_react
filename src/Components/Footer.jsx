import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <span>
        <div className="footer">
          <div className="pure-g footer-inner">
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Company
                <div className="footer-col-links">
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">About</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Careers</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Diversity and Inclusion</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Open Roles</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Internships</a></p>
                </div>
              </div>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Work With Us
                <div className="footer-col-links">
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Work with Us</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Case Studies</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">FAQ</a></p>
                </div>
              </div>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Products
                <div className="footer-col-links">
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Integrations</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Analytics</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Data Quality</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Artificial Intelligence</a></p>
                  <p><a href="https://www.linkedin.com/company/zenysis-technologies/">Privacy, Security and Compliance</a></p>
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
          <a className="logo">
            ZENYSIS
          </a>
        </div>
      </span>
    );
  }
}

export default Footer;