import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TeamStyle.css';

const TeamMember = ({ name, photo, designation, education, journey, experience, tools, dailyTasks, uniqueAspect }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="team-member"
      style={{
        border: '3px solid #6a1b9a', 
        borderRadius: '10px',
        padding: '20px',
        margin: '10px',
        width: '300px',
        overflow: 'hidden', // Keep overflow hidden for collapsed state
        transition: 'max-height 0.3s ease',
        maxHeight: expanded ? '1000px' : '400px', // Dynamically adjust height
      }}
    >
      <img
        src={photo}
        alt={name}
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '10px',
        }}
      />
      <h2>{name}</h2>
      <h4>{designation}</h4>
      <p>
        <strong>Education:</strong> {education}
      </p>
      <p>
        <strong>Journey with Mercer Mettl:</strong> {journey}
      </p>
      <p>
        <strong>Professional Experience:</strong> {experience}
      </p>
      <p>
        <strong>Tools and Skills:</strong> {tools}
      </p>
      <p>
        <strong>Daily Tasks:</strong> {dailyTasks}
      </p>
      <p>
        <strong>Unique Aspect:</strong> {uniqueAspect}
      </p>

      {/* Conditionally Render the Read More/Show Less Button */}
      {!expanded ? (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'lavender',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
          onClick={toggleExpand}
        >
          Read More
        </div>
      ) : (
        <button
          style={{
            marginTop: '10px',
            backgroundColor: 'lavender',
            color: 'pink',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'center',
          }}
          onClick={toggleExpand}
        >
          Show Less
        </button>
      )}
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
