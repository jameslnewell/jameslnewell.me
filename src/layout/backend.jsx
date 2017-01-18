import React from 'react';
import ReactDOM from 'react-dom/server';
import favicon from './favicon.png';

const ga = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-90471993-1', 'auto');
ga('send', 'pageview');
`;

const Layout = ({styles, scripts, children}) => (
  <html>
    <head>
      <meta charSet="utf-8"/> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      {styles.map(style => (
        <link key={style} rel="stylesheet" href={style}/>
      ))}
      <link rel="shortcut icon" href={favicon}/>
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{__html: ReactDOM.renderToString(children)}}/>
      {scripts.map(script => (
        <script key={script} src={script} defer/>
      ))}
      <script src="https://buttons.github.io/buttons.js" async defer/>
      <script dangerouslySetInnerHTML={{__html: ga}}/>
    </body>
  </html>
);

Layout.propTypes = {
  styles: React.PropTypes.array,
  scripts: React.PropTypes.array,
  children: React.PropTypes.node
};

export default Layout;
