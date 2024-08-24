import React from 'react';
import './ListItem.css';

const ListItem = ({ title, image, link }) => {
  return (
    <div className="list-item">
      <img src={image} alt={title} className="list-item-image" />
      <div className="list-item-content">
        <a href={link} className="list-item-title" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};



export default ListItem;
