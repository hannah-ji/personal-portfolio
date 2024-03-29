import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies and am eager to learn more!
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"/>
        < br />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            <>
              Python <br />
              C <br />
              JavaScript <br />
              TypesScript <br />
              HTML <br />
              CSS <br /> 
              Racket

            </>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <br />
        <ListContainer>
          <ListTitle>Frameworks and Libraries</ListTitle>
          <ListParagraph>
            React <br />
            Firebase <br />
            Pandas <br />
            Apache Spark <br />
            spaCy <br />
            Selenium <br />
            BeautifulSoup <br />
            Ant Design <br />
            Pygame
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem"/>
        <br />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Visual Studio Code <br />
            GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
  );

export default Technologies;
