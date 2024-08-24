import React from 'react';
import './Card.css';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card h-100">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;