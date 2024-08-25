import React from 'react';
import './ListItem.css';

const ListItem = ({ title, subtitle, image, link }) => {
  return (
    <div className="list-item">
      <div className="list-item-image-wrapper">
        <img src={image} alt={title} className="list-item-image" />
      </div>
      <div className="list-item-content">
        <a href={link} className="list-item-title" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <br />
        <a href={link} className="list-item-subtitle" target="_blank" rel="noopener noreferrer">
          {subtitle}
        </a>
      </div>
    </div>
  );
};

export default ListItem;