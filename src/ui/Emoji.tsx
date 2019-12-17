import React from 'react';

export interface EmojiProps {
  glyph: string;
  label?: string;
}

export const Emoji: React.FC<EmojiProps> = ({glyph, label, ...otherProps}) => (
  <span
    {...otherProps}
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? `false` : `true`}
  >
    {glyph}
  </span>
);
