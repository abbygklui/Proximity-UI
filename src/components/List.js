import React from 'react';
import ListItem from './ListItem';

const List = ({ articles }) => {
  return (
    <div className="list">
      {articles.map((article, index) => (
        <ListItem
          key={index}
          title={article.title}
          image={article.image}
          link={article.link}
        />
      ))}
    </div>
  );
};

export default List;
