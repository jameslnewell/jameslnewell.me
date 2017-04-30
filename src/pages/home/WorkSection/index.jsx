import React from 'react';
import {Margin} from 'styled-components-spacing';
import {Section, Text, ExternalLink} from 'site-ui';
import Role from './Role';
import atlassianLogo from './img/atlassian-logo.svg';
import nibLogo from './img/nib-logo.svg';
import deitLogo from './img/deit-logo.svg';

const WorkSection = () => (
  <Section id="employment" title="Employment">
    
    <Role
      logo={atlassianLogo}
      title="Senior Developer"
      organisation="Atlassian"
      startedAt="2017"
      finishedAt="present"
    />

    <Role
      logo={nibLogo}
      title="Senior Frontend Developer"
      organisation="nib health funds"
      startedAt="2015"
      finishedAt="2017"
    />
      
    <Role
      logo={nibLogo}
      title="Frontend Developer"
      organisation="nib health funds"
      startedAt="2014"
      finishedAt="2015"
    />

    <Role
      logo={deitLogo}
      title="Owner and Developer"
      organisation="Digital Edge IT"
      startedAt="2006"
      finishedAt="2015"
    />

    <Margin top={2}>
      <Text size="sm">
        <ExternalLink href="https://www.linkedin.com/in/jameslnewell">
          View my full employment history on LinkedIn...
        </ExternalLink>
      </Text>
    </Margin>

  </Section>
);

export default WorkSection;
