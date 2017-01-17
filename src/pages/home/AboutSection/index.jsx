import React from 'react';
import smoothscroll from 'smoothscroll';
import './index.css';

const onScroll = event => {
  event.preventDefault();

  //scroll down the page
  const hash = event.target.hash;
  const target = document.getElementById(hash.substring(1));
  smoothscroll(target, 250, () => window.location.hash = hash);

  //track the event
  if (ga) {
    ga('send', 'event', 'about-me', 'scroll');
  }
  
};

const AboutSection = () => (
  <section className="about-me p:4@xs">
    <div className="container text-center">
      <div className="about-me__image"/>
      <h1 className="about-me__name mt:3@xs">James Newell</h1>
      <p className="about-me__summary mt:2@xs">
        An <span className="about-me__country">🇦🇺</span> <strong>Software Engineer</strong>,
        currently specialising in <strong>Frontend Development</strong> at <a className="about-me__employer" href="https://twitter.com/nibhealthfunds" target="blank" rel="noopener noreferrer" title="Follow @nibheathfunds on Twitter">@nibhealthfunds</a>.
      </p>

      <p className="mt:3@xs text-center">
        <a className="about-me__community p:1@xs" target="_blank" rel="noopener noreferrer" href="https://twitter.com/jameslnewell" title="Follow me on Twitter">
          <svg height="16" viewBox="272 189.028 480 390.025" enableBackground="new 272 189.028 480 390.025" style={{fill: 'currentColor'}}>
            <path d="M422.95,579.053c181.133,0,280.205-150.067,280.205-280.205c0-4.262,0-8.505-0.288-12.729
              c19.273-13.941,35.911-31.202,49.133-50.976c-17.974,7.964-37.04,13.187-56.563,15.494c20.559-12.308,35.945-31.665,43.296-54.47
              c-19.331,11.471-40.48,19.555-62.534,23.904c-37.296-39.658-99.68-41.573-139.337-4.276c-25.576,24.053-36.429,59.894-28.49,94.094
              c-79.183-3.97-152.957-41.37-202.963-102.893c-26.139,44.998-12.788,102.563,30.489,131.463
              c-15.672-0.465-31.002-4.692-44.697-12.327c0,0.403,0,0.826,0,1.248c0.013,46.879,33.058,87.255,79.008,96.538
              c-14.499,3.954-29.71,4.532-44.467,1.689c12.901,40.117,49.874,67.599,92.006,68.391c-34.872,27.406-77.951,42.284-122.304,42.239
              c-7.835-0.015-15.664-0.489-23.443-1.42c45.036,28.9,97.438,44.23,150.95,44.159"/>
          </svg>
        </a>
        <a className="about-me__community p:1@xs" target="_blank" rel="noopener noreferrer" href="https://github.com/jameslnewell" title="Follow me on Github">
          <svg height="16" viewBox="0 0 32.579 31.774" enableBackground="new 0 0 32.579 31.774">
            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M16.289,0C7.294,0,0,7.293,0,16.291
              c0,7.197,4.667,13.302,11.141,15.457c0.814,0.148,1.112-0.354,1.112-0.785c0-0.387-0.014-1.412-0.022-2.771
              c-4.531,0.984-5.487-2.184-5.487-2.184c-0.741-1.881-1.809-2.383-1.809-2.383c-1.479-1.01,0.112-0.99,0.112-0.99
              c1.635,0.115,2.495,1.68,2.495,1.68c1.453,2.488,3.812,1.77,4.741,1.354c0.148-1.053,0.569-1.771,1.034-2.178
              c-3.617-0.412-7.42-1.809-7.42-8.051c0-1.778,0.635-3.232,1.677-4.371c-0.167-0.412-0.727-2.068,0.16-4.311
              c0,0,1.368-0.438,4.479,1.67c1.299-0.361,2.693-0.542,4.078-0.548c1.384,0.006,2.776,0.187,4.078,0.548
              c3.11-2.108,4.476-1.67,4.476-1.67c0.889,2.243,0.329,3.899,0.162,4.311c1.043,1.139,1.674,2.593,1.674,4.371
              c0,6.258-3.809,7.635-7.438,8.038c0.585,0.504,1.105,1.498,1.105,3.018c0,2.178-0.02,3.934-0.02,4.469
              c0,0.436,0.293,0.941,1.12,0.783c6.468-2.158,11.13-8.26,11.13-15.455C32.579,7.293,25.286,0,16.289,0z"/>
          </svg>
        </a>
        <a className="about-me__community p:1@xs" target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~jameslnewell" title="Follow me on NPM">
          npm
        </a>
      </p>

      <a
        className="about-me__scroll-prompt"
        title="Scroll down to find out more about me"
        href="#employment"
        onClick={onScroll}
      >
        ➤
      </a>

    </div>
  </section>
);

export default AboutSection;
