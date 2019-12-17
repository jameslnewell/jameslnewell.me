import React from 'react';
import {Helmet} from 'react-helmet';
import {Reset} from '../../ui';
import favicon from './img/favicon.png';

const bio = `An 🇦🇺 Software Engineer passionate about empowering teams to deliver more efficiently, with more confidence and to a higher degree of quality.`;

export interface RootProps {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({children}: RootProps) => (
  <>
    <Helmet titleTemplate="James Newell   %s">
      <html lang="en-au" />
      <title>{bio}</title>
      <meta title="description" content={bio} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <link rel="canonical" href="https://jameslnewell.dev/" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_ID}');
      `,
        }}
      />
    </Helmet>
    <Reset />
    {children}
  </>
);
