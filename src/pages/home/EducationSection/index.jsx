import React from 'react';
import './index.css';

const Course = props => {
  const {title, organisation, startedAt, finishedAt, children} = props;
  return (
    <div className="mt:2@xs">
      <h3>{title}</h3>
      <h4>{organisation}</h4>
      <p className="text-sm">{startedAt} &mdash; {finishedAt}</p>
      <p className="text-sm">
        {children}
      </p>
    </div>
  );
};

Course.propTypes = {
  title: React.PropTypes.string.isRequired,
  organisation: React.PropTypes.string.isRequired,
  startedAt: React.PropTypes.string.isRequired,
  finishedAt: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};

const EducationSection = () => (
  <section id="education" className="m:4@xs">
    <div className="container">
      <h2>Education</h2>

      <Course
        title="Bachelor of Engineering (B.Eng.), Software Engineering"
        organisation="University of Newcastle"
        startedAt="2007"
        finishedAt="2011"
      >
        Honours Class II Division 2
      </Course>

      <Course
        title="Higher School Certificate"
        organisation="Mackillop College"
        startedAt="2004"
        finishedAt="2005"
      >
        1st in class in Software Design and Development
        2nd in class in Information Processes and Technology
      </Course>

    </div>
  </section>
);

export default EducationSection;
