import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Swimming', text: 'Competitive swimmer for 8+ years, competed and placed at provincial level'},
  { number: 'Diversity', text: 'Chapter founder of Superposition, a non-profit dedicated to inspire girls in STEM', },
  { number: 'Volunteering', text: 'Involved with initiatives such as Relay for Life and local food banks', },
  { number: 'Reading', text: 'Read 100+ books in 2021', }
];

const Acomplishments = () => (
  <Section>
    <br />
    <SectionTitle>My Passions</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <br />
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <br />
    <br />
  </Section>
);

export default Acomplishments;
