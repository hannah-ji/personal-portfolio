import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Hannah Ji
      </SectionTitle>
      <SectionText>
        I am a second year computer science student studying at the University of Waterloo. 
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;