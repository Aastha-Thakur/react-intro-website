import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TeamStyle.css"; 

const TeamMember = ({ name, photo, designation, education, journey, experience, tools, dailyTasks, uniqueAspect }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="team-member-card">
      <img src={photo} alt={name} className="team-member-photo" />
      <h2 className="team-member-name">{name}</h2>
      <h4 className="team-member-designation">{designation}</h4>

      <p className="team-member-info">
        <strong>Education:</strong> {education}
      </p>

      <p className="team-member-info">
        <strong>Journey:</strong> {expanded ? journey : `${journey.substring(0, 50)}...`}
      </p>

      <p className="team-member-info">
        <strong>Experience:</strong> {expanded ? experience : `${experience.substring(0, 50)}...`}
      </p>

      {expanded && (
        <>
          <p className="team-member-info"><strong>Tools & Skills:</strong> {tools}</p>
          <p className="team-member-info"><strong>Daily Tasks:</strong> {dailyTasks}</p>
          <p className="team-member-info"><strong>Unique Aspect:</strong> {uniqueAspect}</p>
        </>
      )}

      <button className="read-more-button" onClick={toggleExpand}>
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  journey: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  dailyTasks: PropTypes.string.isRequired,
  uniqueAspect: PropTypes.string.isRequired,
};

export default TeamMember;
