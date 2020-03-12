import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-size: 175%;
  vertical-align: middle;
`;

export interface EmojiProps {
  size?: number;
  glyph: string;
  label: string;
}

export const Emoji: React.FC<EmojiProps> = ({glyph, label}) => (
  <Span role="img" aria-label={label}>
    {glyph}
  </Span>
);
