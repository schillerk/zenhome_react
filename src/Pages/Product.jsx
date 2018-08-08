import React, { Component } from 'react';

import team from '../pictures/productivity-startup-team.jpg';
import form from '../pictures/form.png';
import map from '../pictures/map2.png';
import status from '../pictures/status2.png';
import line from '../pictures/line.png';

import Text from '../Components/Text';
import Overlay from '../Components/Overlay';
import Spacer from '../Components/Spacer';
import Button from '../Components/Button';

class Product extends Component {
  render() {
    return (
     <div className="page">
        <Text
          title="The Zenysis Data Platform"
          text="Working with data in disparate formats we build a single unified view to enable data analysis from any system in real-time."
          big
        />
        <Overlay
          title="Analytics"
          text="Our visualization and transformation tools leverage time-series, geospatial and statistical insights to enable flexible analysis for any type of problem."
          reversed
          img={map}
        />
        <Spacer />
        <Overlay
          title="Integrations"
          text="Our engineers work on a case-by-case basis to integrate data from existing information systems into a unified view of an entire sector."
          img={form}
        />
        <Spacer />
        <Overlay
          title="Artificial Intelligence"
          text="Automated pipelines analyze millions of incoming data points for hidden relationships and alert decision makers about emerging threats to public health."
          reversed
          img={line}
        />
        <Overlay
          title="Data Quality"
          text="Specialized tools enable users to identify statistical abnormalities, patch mission values, and de-duplicate records to improve reporting."
          img={status}
        />
        <Spacer />
        {/*<Spacer />*/}
{/*        <Overlay
          title="Privacy, Security, and Compliance"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          link="Download our regulatory white paper"
          img={team}
        />*/}
        <Text
          title="Create the Next Generation of our Platform"
          text="Come build products, relationships and tools to transform the next decade of development."
          shouldCenter
        />
        <div className="center">
          <Button text="CAREERS AT ZENYSIS" fill onClick={this.props.handleChange.bind(this, 'careers')} />
        </div>
      </div>
    )
  }
}

export default Product;