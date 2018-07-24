import React, { Component } from 'react';

import Text from '../Components/Text';
import Icon from '../Components/Icon';
import TileText from '../Components/TileText';
import Button from '../Components/Button';
import Spacer from '../Components/Spacer'
import BigImage from '../Components/BigImage';
import Question from '../Components/Question';

class Faq extends Component {
  render() {
    return (
      <div>
        <Text
          title="Frequently Asked Questions"
          text="We've done our best to curate answers to some of the top opportunities, concerns and questions we receive. If you don't see your question below, get in touch with info@zenysis.com and we'll get back to you as soon as we can."
          big
        />
        <BigImage img="sf"></BigImage>
        <Question
         question="What is Zenysis?"
         answer="Based in San Francisco, Zenysis builds software that solves even the biggest data problems. It takes information from fragmented systems and puts it on one unifying platform. Then, using Zenysis’s array of analytical tools, you can determine how to allocate resources most effectively. Zenysis’s goal is to help entities affect every aspect of the development curve, to help them work on issues that improves lives in communities across the globe."
        />
        <Question
         question="What is the business model?"
         answer="Zenysis is a software company. We don’t charge for the substantial human resources - software engineers, data scientists, project managers, trainers - we invest in each project, providing upfront cost certainty."
        />
        <Question
         question="How does Zenysis software work with other systems?"
         answer="Zenysis works with your existing structured digital information system. No need to change or replace existing systems. No switching costs. Our software acts as a unifying layer, providing a global view and analysis of your data on one platform."
        />
        <Question
         question="Is Zenysis secure?"
         answer="Yes. We have strict access controls and monitoring, bank-level SSL encryption for data in transit, DDOS protection, scraping protection and more, to ensure total control of your data."
        />
        <Question
         question="Who can partner with Zenysis?"
         answer="Governments and other entities can work with Zenysis, whether they are individual agencies, corporations or foundations. Our software is capable of providing help for humanitarian response, economic development, and private companies."
        />
        <Question
         question="How do people learn how to use Zenysis?"
         answer="Our project managers, software engineers and data scientists train users how to use the platform, and we train technical staff how to independently maintain it after implementation is complete. Zenysis doesn’t own the platform; you do."
        />
        <Question
         question="Can Zenysis work with DHIS2?"
         answer="Yes. We have lots of experience integrating DHIS2 with data from other systems, so it can be on one platform."
        />
        <Question
         question="Is Zenysis hiring?"
         answer="Zenysis is always looking for talented, motivated people. We are dedicated to making the world a better place, and we’ve got top-tier investors backing us. If you’re looking to make a global impact, join our founding team and grow with us, email us at jobs@zenysis.com"
        />
      </div>
    )
  }
}

export default Faq;
