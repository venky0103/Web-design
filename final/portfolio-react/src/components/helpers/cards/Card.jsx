// Card.jsx
import React from 'react';

import './Card.css';

const Card = ({ title, subtitle, location, timeline, description }) => {
  return (
    <div className="card">
      <strong className='card-title'>{title}</strong><br /> {timeline && <span>{timeline}</span>} <br />
      <strong className='sub-title'>{subtitle}</strong> {location && <span>{location}</span>} <br />
      {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};

export default Card;
