import React from 'react';
import {TiArrowSortedDown} from 'react-icons/ti';

const BreakdownProduct = ({characteristics}) => {
  return (
    <div className="reviews-side-breakdown_characteristics">
      {Object.keys(characteristics).map((characteristic, index)=>(
          <div className="reviews-side-breakdown_characteristics-item" key={index}>
            <p className="reviews-side-breakdown_characteristics-item-text">{characteristic}</p>
            <div className={"reviews-side-breakdown_characteristics-item-slider " + Number(characteristics[characteristic]).toFixed(1)}>
              <div className="reviews-side-breakdown_characteristics-item-slider-bar"></div>
              <div className="reviews-side-breakdown_characteristics-item-slider-bar"></div>
              <div className="reviews-side-breakdown_characteristics-item-slider-bar"></div>
              <TiArrowSortedDown className="reviews-side-breakdown_characteristics-item-slider-icon" />
            </div>
          </div>
      ))}
    </div>
  );
};

export default BreakdownProduct;