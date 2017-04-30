import React from 'react';
import styled from 'styled-components';
import {Margin, Padding} from 'styled-components-spacing';
import {Container, Text} from 'site-ui';

const Section = styled.footer`
  border-top: 4px dashed #bbb;
`;

const Emoji = styled.span`
  color: #e44444;
  font-size: 1.1em;
  vertical-align: middle;
`;

const Footer = () => (
  <Section>
    <Padding all={3}>
      <Container>
        <Text align="center" size="xs">

          <p>
            Made with <Emoji>♥</Emoji> using <Emoji title="styled-components">💅</Emoji>, React, Webpack, Cloudflare and AWS.
          </p>

          <Margin top={1}>
            <a
              className="github-button"
              href="https://github.com/jameslnewell/jameslnewell.me"
              data-icon="octicon-repo-forked"
              aria-label="Fork jameslnewell.me on GitHub"
            >Fork</a>
          </Margin>

        </Text>
      </Container>
    </Padding>
  </Section>
);

export default Footer;
