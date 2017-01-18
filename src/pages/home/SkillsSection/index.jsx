/* global ga */
import React from 'react';
import classNames from 'classnames';
import './index.css';

class Skill extends React.Component {

  state = {
    collapsed: true
  }

  constructor(...args) {
    super(...args);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(

      //change the state
      state => ({
        collapsed: !state.collapsed
      }),

      //track the event
      () => {
        if (ga) {
          const action = this.state.collapsed ? 'collapse' : 'expand';
          ga('send', 'event', 'skill', action, this.props.name);
        }
      }

    );
  }

  render() {
    const {name, level, children} = this.props;
    const {collapsed} = this.state;
    return (
      <div className="skill my:2@xs">
        <a className="skill__trigger" onClick={this.handleToggle}>

          <h4 className="my:1@xs">{name}</h4>

          <div className="progress" title={`${level}/10`}>
            <div className="progress__value" style={{width: `${level * 10}%`}}/>
          </div>

        </a>

        <div className={classNames('skill__content', {'skill__content--collapsed': collapsed})}>
          <div className="text-sm">
            {children}
          </div>
        </div>

      </div>
    );
  }

}

Skill.propTypes = {
  name: React.PropTypes.string.isRequired,
  level: React.PropTypes.number.isRequired,
  children: React.PropTypes.node
};

Skill.defaultProps = {
  level: 100
};

const SkillSection = () => (
  <section id="skills" className="m:4@xs">
    <div className="container">
      <h2>Skills</h2>

      <div className="skill-list">
        <div className="skill-list__item">
          <Skill name="HTML" level={8.5}>
            <p>Years of experience writing HTML for the web. Room to improve in my knowledge of accessibility.</p>
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="CSS" level={8.5}>
            <p>
              Years of experience using a responsive, mobile-first approach to deliver consistent experiences across multiple browsers.
              Experienced with pre and post processing languages such as PostCSS and SASS. Highly experienced in BEM methodology.
              Room to improve in my knowledge of the latest features coming from browser vendors.
            </p>
            <p>Related work:</p>
            <ul>
              <li><a href="https://www.npmjs.com/package/sass-breakpoints">sass-breakpoints</a></li>
              <li><a href="https://www.npmjs.com/package/sass-spacing">sass-spacing</a></li>
              <li><a href="https://www.npmjs.com/package/sass-grid">sass-grid</a></li>
            </ul>
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="JavaScript" level={9.5}>

            <p>Years of experience with ES5, the DOM and AJAX. Highly experienced with ES6. Experience with many libraries and frameworks such as Mocha, Karma, Lodash, Backbone etc. Room to improve my experience in functional programming and in my knowledge of Maps, Sets and Proxies.</p>

            <p>Related work:</p>
            <ul>
              <li><a href="https://www.npmjs.com/package/xhr-mock">xhr-mock</a></li>
              <li><a href="https://www.npmjs.com/package/@digitaledgeit/transition-auto">transition-auto</a></li>
              <li><a href="https://www.npmjs.com/package/@digitaledgeit/input-event">input-event</a></li>
              <li><a href="https://www.npmjs.com/package/@digitaledgeit/validator-chain">validator-chain</a></li>
            </ul>

          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="React" level={8}>
            <p>Experience writing SPAs using packages from the React ecosystem e.g. react, react-router, redux, reselect, react-addons-css-transition-group, react-addons-perf, react-addons-test-utils and enzyme.</p>
            <p>Related work:</p>
            <ul>
              <li><a href="https://www.npmjs.com/package/rechannel">rechannel</a></li>
              <li><a href="https://www.npmjs.com/package/redux-when">redux-when</a></li>
              <li><a href="https://www.npmjs.com/package/react-testutils-query">react-testutils-query</a></li>
            </ul>
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="Webpack" level={8.5}>
            <p>Experience configuring advanced Webpack features including long-term-caching, vendor bundles, common bundles, DLLs and code-splitting.</p>
            <p>Experience writing plugins for Webpack including <a href="https://www.npmjs.com/package/webpack-resolve-short-path-plugin">webpack-resolve-short-path-plugin</a>, <a href="https://www.npmjs.com/package/mocha-webpack-plugin">mocha-webpack-plugin</a> and <a href="https://www.npmjs.com/package/static-react-render-webpack-plugin">static-react-render-webpack-plugin</a>.</p>
            <p>Experience with other bundlers, such as Browserify.</p>
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="NodeJS" level={8}>
            <p>Thourough understanding of Events, Buffers and Streams. Experience with HTTP, Encryption, SAX parsing</p>
            Events, Streams, Http, Encryption, MongoDB, Express, Mocha.
            <p>Related work:</p>
            <ul>
              <li><a href="https://www.npmjs.com/package/wait-for-event">wait-for-event</a></li>
              <li><a href="https://www.npmjs.com/package/gulp-rev-delete-original">gulp-rev-delete-original</a></li>
              <li><a href="https://www.npmjs.com/package/mongoose-encrypted-property">mongoose-encrypted-property</a></li>
              <li><a href="https://www.npmjs.com/package/mongoose-hashed-property">mongoose-hashed-property</a></li>
              <li><a href="https://www.npmjs.com/package/finder-on-steroids">finder-on-steroids</a></li>
            </ul>
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="UniversalJS" level={7.5}/>
        </div>
        <div className="skill-list__item">
          <Skill name="FlowType" level={3.5}>
            Experience typing
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="Java" level={5}>
            <p>Experience with with file and socket IO, threading and Swing. Out of touch with the Java ecosystem.</p>
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="AWS" level={2.5}>
            <p>Experience with with S3, Route 53, Lambda and Cloud Formation. Minimal experience with Beanstalk and ECS.</p>
          </Skill>
        </div>
        <div className="skill-list__item">
          <Skill name="Agile" level={2.5}>
            CI, version control (svn, bzr, git)
          </Skill>
        </div>
      </div>

    </div>
  </section>
);

export default SkillSection;
