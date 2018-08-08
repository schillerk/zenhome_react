import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <span>
        <div className="footer">
          <div className="pure-g footer-inner">
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Zenysis
                <div className="footer-col-links">
                  <p><a onClick={this.props.handleChange.bind(this, 'home')}>Home</a></p>
                  <p><a onClick={this.props.handleChange.bind(this, 'about')}>About</a></p>
                  <p><a onClick={this.props.handleChange.bind(this, 'careers')}>Careers</a></p>
                  <p><a onClick={this.props.handleChange.bind(this, 'product')}>Product</a></p>
                </div>
              </div>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Open Roles
                <div className="footer-col-links">
                  <p><a href="https://hire.withgoogle.com/public/jobs/zenysiscom/view/P_AAAAAACAAADG6zVIjR4eVM">Country Director</a></p>
                  <p><a href="https://hire.withgoogle.com/public/jobs/zenysiscom/view/P_AAAAAACAAADF-WHmhdY5_Z">Software Engineer</a></p>
                  <p><a href="https://hire.withgoogle.com/public/jobs/zenysiscom/view/P_AAAAAACAAADD5NEnmc9PIn">Senior Software Engineer</a></p>
                </div>
              </div>
            </div>
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="footer-col-text">
                Products
                <div className="footer-col-links">
                  <p><a onClick={this.props.handleChange.bind(this, 'product')}>Analytics</a></p>
                  <p><a onClick={this.props.handleChange.bind(this, 'product')}>Integrations</a></p>
                  <p><a onClick={this.props.handleChange.bind(this, 'product')}>Artificial Intelligence</a></p>
                  <p><a onClick={this.props.handleChange.bind(this, 'product')}>Data Quality</a></p>
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