import React from 'react';
import './RoadBackground.css';

const RoadBackground = () => {
  return (
    <div className="road-bg">
      <div className="road-lines">
        <div className="road-line"></div>
        <div className="road-line"></div>
        <div className="road-line"></div>
        <div className="road-line"></div>
        <div className="road-line"></div>
      </div>
      <div className="road-markers">
        <div className="marker-line"></div>
        <div className="marker-line"></div>
      </div>
    </div>
  );
};

export default RoadBackground;
