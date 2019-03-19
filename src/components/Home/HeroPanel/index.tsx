// tslint:disable: no-reference
/// <reference path="styled-components/cssprop" />
import * as React from 'react';
import {Margin, mt} from 'styled-components-spacing';
import {OuterWrapper, InnerWrapper, Avatar, Name, Summary, Emoji, SocialLink} from './index.style';
import me from './img/me.jpg';
import meAt2x from './img/me@2x.jpg';
import Twitter from './img/twitter-logo.svg';
import Github from './img/github-logo.svg';
import LinkedIn from './img/linkedin-logo.svg';

export const HeroPanel = () => (
  <OuterWrapper>
    <InnerWrapper>
      <Avatar alt="James smiling" src={me} srcSet={`${meAt2x} 2x, ${me}`} />

      <Name css={mt(3)}>James Newell</Name>

      <Summary css={mt(2)}>
        <p>
          An <Emoji>🇦🇺</Emoji> <strong>Software Engineer</strong> passionate about{' '}
          <strong>empowering teams</strong> to deliver <em>more efficiently</em>, with{' '}
          <em>more confidence</em> and to a <em>higher degree of quality</em>.
        </p>
      </Summary>

      <Margin top={4}>
        <SocialLink href="https://twitter.com/jameslnewell" title="Follow me on Twitter">
          <Twitter width="28px" />
        </SocialLink>
        <SocialLink href="https://github.com/jameslnewell" title="Follow me on Github">
          <Github width="28px" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/jameslnewell" title="Follow me on LinkedIn">
          <LinkedIn width="28px" />
        </SocialLink>
      </Margin>
    </InnerWrapper>
  </OuterWrapper>
);