import React from 'react';
import {Margin} from 'styled-components-spacing';
import {Section, Text, ExternalLink} from 'site-ui';
import Repository from './Repository';

const CodeSection = () => (
  <Section id="open-source" title="Code">

    <Repository name="styled-components-breakpoint"/>
    <Repository name="styled-components-spacing"/>
    <Repository name="styled-components-grid"/>
    <Repository name="xhr-mock"/>
    <Repository name="tradie-v4"/>

    <Margin top={2}>
      <Text size="sm">
        <ExternalLink href="https://www.github.com.com/jameslnewell">
          View all my repositories on Github...
        </ExternalLink>
      </Text>
    </Margin>

  </Section>
);

export default CodeSection;
