// src/PortfolioList.js
import React from 'react';
import PortfolioItem from './PortfolioItem';
import { portfolioItems } from './data';

const PortfolioList = () => {
  return (
    <div className="portfolio-list">
      {portfolioItems.map(item => (
        <PortfolioItem 
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          images={item.images}
          path={`imgs/${item.id}/`}
        />
      ))}
    </div>
  );
};

export default PortfolioList;
