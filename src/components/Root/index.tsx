import React from 'react';
import {Helmet} from 'react-helmet';
import {Reset} from '../../ui';
import favicon from '!file-loader!./img/favicon.png';

const bio = `An 🇦🇺 Software Engineer passionate about empowering teams to deliver more efficiently, with more confidence and to a higher degree of quality.`;

export const Root: React.FC = ({children}) => (
  <>
    <Helmet titleTemplate="James Newell   %s">
      <html lang="en-au" />
      <title>{bio}</title>
      <meta name="description" content={bio} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <link rel="canonical" href="https://jameslnewell.dev/" />
    </Helmet>
    <Reset />
    {children}
    {/* fix 100vh scroll issue on iOS */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.onresize = function() {
          document.body.height = window.innerHeight;
        }
        window.onresize();
        `,
      }}
    />
  </>
);
