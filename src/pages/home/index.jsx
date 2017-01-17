import React from 'react';
import Helmet from 'react-helmet';
import AboutSection from './AboutSection';
import EmploymentSection from './EmploymentSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import Footer from './Footer';
import './index.css';

const Example = () => (
  <div>
    <Helmet
      title="An 🇦🇺 Software Engineer curently specialising in Frontend Development at @nibhealthfunds &mdash; James Newell"
      meta={[
        {
          name: 'description',
          content: 'James Newell &mdash; An 🇦🇺 Software Engineer curently specialising in Frontend Development at @nibhealthfunds.'
        }
      ]}
    />
    <AboutSection/>
    <div className="main-content">
      <EmploymentSection/>
      <EducationSection/>
      <SkillsSection/>
    </div>
    <Footer/>
  </div>
);

export default Example;
