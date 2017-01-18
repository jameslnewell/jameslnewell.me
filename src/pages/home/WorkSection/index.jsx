import React from 'react';
import './index.css';

const Job = props => {
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

Job.propTypes = {
  title: React.PropTypes.string.isRequired,
  organisation: React.PropTypes.string.isRequired,
  startedAt: React.PropTypes.string.isRequired,
  finishedAt: React.PropTypes.string.isRequired
};

const WorkSection = () => (
  <section id="work" className="m:4@xs">
    <div className="container">
      <h2>Employment</h2>

      <Job
        title="Senior Frontend Developer"
        organisation="nib health funds"
        startedAt="2015"
        finishedAt="present"
      >
        Part of an agile and cross-functional team working on the aquisition funnel.
        Championing Frontend Development on behalf the DEBD department
        Played a significant role
      </Job>

      <Job
        title="Frontend Developer"
        organisation="nib health funds"
        startedAt="2014"
        finishedAt="2015"
      >
        Part of an agile and cross-functional team working on the aquisition funnel.
      </Job>

      <Job
        title="Owner and Developer"
        organisation="Digital Edge IT"
        startedAt="2006"
        finishedAt="2015"
      />

      <Job
        title="Developer"
        organisation="St Philip's Christian College"
        startedAt="2012"
        finishedAt="2013"
      />

      <Job
        title="Research Assistant"
        organisation="University of Newcastle"
        startedAt="2009"
        finishedAt="2010"
      />

      <Job
        title="IT Support Person"
        organisation="St Joseph's Regional College"
        startedAt="2006"
        finishedAt="2007"
      />

    </div>
  </section>
);

export default WorkSection;
