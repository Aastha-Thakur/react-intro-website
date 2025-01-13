// TeamMember.js
import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, photo, designation, education, journey, experience, tools, dailyTasks, uniqueAspect }) => {
  return (
    <div className="team-member" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', margin: '10px', maxWidth: '300px' }}>
      <img
        src={photo}
        alt={name}
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
      />
      <h2>{name}</h2>
      <h4>{designation}</h4>
      <p><strong>Education:</strong> {education}</p>
      <p><strong>Journey with Mercer Mettl:</strong> {journey}</p>
      <p><strong>Professional Experience:</strong> {experience}</p>
      <p><strong>Tools and Skills:</strong> {tools}</p>
      <p><strong>Daily Tasks:</strong> {dailyTasks}</p>
      <p><strong>Unique Aspect:</strong> {uniqueAspect}</p>
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