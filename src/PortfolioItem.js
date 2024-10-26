// src/PortfolioItem.js
import React from 'react';
import {Link} from 'react-router-dom'

const PortfolioItem = ({id, title, subtitle, images, path }) => {
  return (
    <div className="portfolio-item">
        <div className="w_item">
            <Link to={"/work/"+id} ><img src={path + images[0]} alt={title} className="img_rwd_3ukiS"/><h5>{title}</h5><small>{subtitle}</small></Link>
        </div>
    </div>
  );
};

export default PortfolioItem;
