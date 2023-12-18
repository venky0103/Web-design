
import React from 'react';
import './Panel.css';

const Panel = ({ title, timeline, description, image }) => {
  return (
    <div className="panel">
      {image && <img src={image} alt={title} className="panel-image" />}
      <div className="grid-container">
        <h2 className="panel-title">{title}</h2>
        <p className="timeline">{timeline}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Panel;


