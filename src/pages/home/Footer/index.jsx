import React from 'react';
import './index.css';

const Footer = () => (
  <footer className="footer p:3@xs">
    <div className="container text-center text-xs">

      <p>
        Made with <span className="footer__love">♥</span> using React, Webpack, Cloudflare and AWS.
      </p>

      <p className="mt:1@xs">
        <a
          className="github-button"
          href="https://github.com/jameslnewell/jameslnewell.me"
          data-icon="octicon-repo-forked"
          aria-label="Fork jameslnewell.me on GitHub"
        >Fork</a>
      </p>

    </div>
  </footer>
);

export default Footer;
