import React from 'react';
import './ListItem.css';

const List = ({ articles, isLowData }) => {
  return (
    <div className="list-container">
      {articles.map((article, index) => (
        <div
          key={index}
          className={`list-item ${isLowData ? 'background-image' : ''}`}
          style={{ backgroundImage: isLowData ? `url(${article.image})` : 'none' }}
        >
          {!isLowData && (
            <div className="list-item-image-wrapper">
              <img src={article.image} alt={article.title} className="list-item-image" />
            </div>
          )}
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
