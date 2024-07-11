import React from 'react';
import './ratingComponents.css';

const Rating: React.FC<{ label: string, stars: number }> = ({ label, stars }) => (
  <div className="rating">
    <div className="rating__label">{label}</div>
    <div className="rating__stars">
      {Array(stars).fill(0).map((_, i) => (
        <img key={i} src='/star.svg' alt="Rating star" />
      ))}
    </div>
  </div>
);

export default Rating;
