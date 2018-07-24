import React, { Component } from 'react';

import team from '../pictures/productivity-startup-team.jpg';
import form from '../pictures/form.png';
import map from '../pictures/map2.png';
import status from '../pictures/status2.png';
import line from '../pictures/line.png';

import Text from '../Components/Text';
import Overlay from '../Components/Overlay';
import Spacer from '../Components/Spacer'

class Product extends Component {
  render() {
    return (
      <div>
        <Text
          title="The Zenysis Data Platform"
          text="Working with data in disparate formats we build a single unified view to enable data analysis from any system in real-time."
          big
        />
        <Overlay
          title="Integrations"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          img={form}
        />
        <Spacer />
        <Overlay
          title="Analytics"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          reversed
          img={map}
        />
        <Spacer />
        <Overlay
          title="Data Quality"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          img={status}
        />
        <Spacer />
        <Overlay
          title="Artificial Intelligence"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          reversed
          img={line}
        />
        <Spacer />
        <Overlay
          title="Privacy, Security, and Compliance"
          text="Health is cool, and so is space, that's why we're working on both instead of sleeping."
          img={team}
        />
      </div>
    )
  }
}

export default Product;