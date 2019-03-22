import * as React from 'react';
import Head from 'next/head';
import {Reset} from '../../ui';
import favicon from './img/favicon.png';

export interface RootProps {
  children: React.ReactNode;
}

export const Root = ({children}: RootProps) => (
  <>
    <Head>
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
    </Head>
    <Reset />
    {children}
  </>
);
