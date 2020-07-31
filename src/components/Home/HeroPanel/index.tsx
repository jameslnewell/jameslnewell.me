// tslint:disable: no-reference
/// <reference types="styled-components/cssprop" />
import React from 'react';
import {Margin, mt} from 'styled-components-spacing';
import {graphql, useStaticQuery} from 'gatsby';
// import {HeroPanelQuery} from '../../../types/graphql';
import {
  OuterWrapper,
  InnerWrapper,
  Avatar,
  Name,
  Summary,
  FlagEmoji,
  SocialLink,
} from './index.style';
import Twitter from './img/twitter-logo.svg';
import Github from './img/github-logo.svg';
import LinkedIn from './img/linkedin-logo.svg';

const query = graphql`
  query HeroPanel {
    file(relativePath: {eq: "james.jpg"}) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;

export const HeroPanel: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.HeroPanelQuery>(query);
  return (
    <OuterWrapper>
      <InnerWrapper>
        <picture>
          <source
            type="image/webp"
            srcSet={data.file?.childImageSharp?.fixed?.srcSetWebp || undefined}
          />
          <source srcSet={data.file?.childImageSharp?.fixed?.srcSet} />
          <Avatar
            src={data.file?.childImageSharp?.fixed?.src}
            width={data.file?.childImageSharp?.fixed?.width}
            height={data.file?.childImageSharp?.fixed?.height}
            loading="lazy"
            alt="James smiling"
          />
        </picture>

        <Name css={mt(3)}>James Newell</Name>

        <Summary css={mt(2)}>
          <p>
            An <FlagEmoji glyph="🇦🇺" label="Australian" /> <strong>Software Engineer</strong>{' '}
            passionate about <strong>empowering teams</strong> to deliver <em>more efficiently</em>,
            with <em>more confidence</em> and to a <em>higher degree of quality</em>.
          </p>
        </Summary>

        <Margin top={4}>
          <SocialLink href="https://github.com/jameslnewell" title="Follow me on Github">
            <Github width="28px" />
          </SocialLink>
          <SocialLink href="https://twitter.com/jameslnewell" title="Follow me on Twitter">
            <Twitter width="28px" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/jameslnewell" title="Follow me on LinkedIn">
            <LinkedIn width="28px" />
          </SocialLink>
        </Margin>
      </InnerWrapper>
    </OuterWrapper>
  );
};
