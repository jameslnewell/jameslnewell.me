import React from 'react';
import {Helmet} from 'react-helmet';
import {Reset} from '../../ui';
import favicon from '!file-loader!./img/favicon.png';
import james from '!file-loader!../../images/james.jpg';

// FIXME: make URL dynamic
const url = 'https://jameslnewell.dev/';
const bio = `An 🇦🇺 Software Engineer passionate about empowering teams to deliver more efficiently, with more confidence and to a higher degree of quality.`;

export const Root: React.FC = ({children}) => (
  <>
    <Helmet titleTemplate="James Newell   %s">
      <html lang="en-au" />
      <title>{bio}</title>
      <meta name="description" content={bio} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:title" content="James Newell &mdash; Software Engineer" />
      <meta name="og:description" content={bio} />
      <meta name="og:image" content={james} />
      <meta name="og:url" content={url} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <link rel="canonical" href={url} />
    </Helmet>
    <Reset />
    {children}
  </>
);
