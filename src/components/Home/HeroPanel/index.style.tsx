import React from 'react';
import styled from 'styled-components';
import {darken} from 'polished';
import {m, p} from 'styled-components-spacing';
import {container, text, TextAlignment, Emoji} from '../../../ui';

const amountToDarkenByOnHover = 0.5;

export const OuterWrapper = styled.header`
  ${p(4)}

  // align the child element in the center of the screen
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  min-height: 100vh;

  background-color: #fbfbfb;
`;

export const InnerWrapper = styled.div`
  ${container()}
  ${text({align: TextAlignment.CENTER})}
`;

const avatarSize = 200;
const baseFontSize = 16;

export const Avatar = styled.img`
  display: inline-block;
  width: ${avatarSize / baseFontSize}em;
  height: ${avatarSize / baseFontSize}em;
  border-radius: ${avatarSize / 2 / baseFontSize}em;
`;

export const Name = styled.h1``;

export const Summary = styled.div`
  margin: auto;
  max-width: 30em;
  line-height: 1.25rem;
`;

export const FlagEmoji = styled(Emoji)`
  font-size: 1.75rem;
  vertical-align: middle;
`;

export const Link = styled.a`
  color: #bbb;
  transition: color 0.25s;
  text-decoration: none;
  vertical-align: bottom;
  &:hover {
    color: ${darken(amountToDarkenByOnHover, '#bbb')};
  }
`;

export const Logo = styled.img`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  fill: red;
  color: red;
  background-color: red;
  filter: invert();
`;

export interface SocialLinkProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({title, href, children}) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    title={title}
    css={`
      ${m(1)} fill: currentColor;
    `}
  >
    {children}
  </Link>
);
