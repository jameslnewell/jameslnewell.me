import * as React from 'react';
import Head from 'next/head';
import {Root} from '../components/Root';
import {HeroPanel} from '../components/Home/HeroPanel';

const description = 'An 🇦🇺 Software Engineer passionate about...';

export default () => {
  return (
    <>
      <Head>
        <title>James Newell &mdash; {description}</title>
        <meta name="description" content={description} />
      </Head>
      <Root>
        <HeroPanel />
      </Root>
    </>
  );
};
