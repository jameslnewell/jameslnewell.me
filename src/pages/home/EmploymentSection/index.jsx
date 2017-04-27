import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import {Margin, Padding} from 'styled-components-spacing';
import Container from '../../../components/Container';
import Text from '../../../components/Text';
import atlassianLogo from './img/atlassian-logo.svg';
import nibLogo from './img/nib-logo.svg';
import deitLogo from './img/deit-logo.svg';

//TODO: create an ExternalLink with target and rel
//TODO: create a styled link

const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

const Job = props => {
  const {logo, title, organisation, startedAt, finishedAt, children} = props;
  return (
    <Margin top={2}>
      <Grid verticalAlign="center" wrap={false}>
        <Grid.Unit width={'min'}>
          <Margin vertical={3} right={3}>
            <Logo src={logo} alt={`${title} @ ${organisation}`} title={`${title} @ ${organisation}`}/>
          </Margin>
        </Grid.Unit>
        <Grid.Unit width={'max'}>
          <h3>{title}</h3>
          <h4>{organisation}</h4>
          <Text size="sm">{startedAt} &mdash; {finishedAt}</Text>
          <Text size="sm">
            {children}
          </Text>
        </Grid.Unit>
      </Grid>
    </Margin>
  );
};

Job.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired,
  startedAt: PropTypes.string.isRequired,
  finishedAt: PropTypes.string.isRequired,
  children: PropTypes.node
};

const WorkSection = () => (
  <section id="employment">
    <Padding all={4}>
      <Container>
        <h2>Employment</h2>

        <Job
          logo={atlassianLogo}
          title="Senior Developer"
          organisation="Atlassian"
          startedAt="2017"
          finishedAt="present"
        />

        <Job
          logo={nibLogo}
          title="Senior Frontend Developer"
          organisation="nib health funds"
          startedAt="2015"
          finishedAt="2017"
        />
         
        <Job
          logo={nibLogo}
          title="Frontend Developer"
          organisation="nib health funds"
          startedAt="2014"
          finishedAt="2015"
        />

        <Job
          logo={deitLogo}
          title="Owner and Developer"
          organisation="Digital Edge IT"
          startedAt="2006"
          finishedAt="2015"
        />

        <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jameslnewell">View my full employment history on LinkedIn...</a></p>
      </Container>
    </Padding>
  </section>
);

export default WorkSection;
