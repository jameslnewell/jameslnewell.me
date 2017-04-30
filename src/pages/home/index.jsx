import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import 'smoothscroll';
import styled, {injectGlobal} from 'styled-components';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import CodeSection from './CodeSection';
import Footer from './Footer';

/* eslint-disable no-unused-expressions */
injectGlobal`

  /* START: reset styles */

  html, body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  /* END: reset styles */

  /* START: global styles */

  body {
    color: #444;
    font-family:
      Trebuchet MS,
      Lucida Grande,
      Lucida Sans Unicode,
      Lucida Sans,
      Tahoma,
      sans-serif
    ;
    background-color: #ddd;
  }

  /* END: global styles */

`;
/* eslint-enable no-unused-expressions */

const MainContent = styled.div`
  overflow: hidden;
  background-color: #fff;
`;

const Home = () => (
  <div>
    <Helmet>
      <title>
        An 🇦🇺 Software Engineer curently specialising in Frontend Development at 
        @Atlassian &mdash; James Newell
      </title>
      <meta name="description" content="James Newell &mdash; An 🇦🇺 Software Engineer curently specialising in Frontend Development at @Atlassian."/>
    </Helmet>
    <AboutSection/>
    <MainContent>
      <WorkSection/>
      <CodeSection/>
    </MainContent>
    <Footer/>
  </div>
);

Home.getPath = () => 'index.html';

if (__CLIENT__) {
  ReactDOM.render(
    <Home/>,
    document.getElementById('app')
  );
}

export default Home;
