import React from 'react';

const BreakdownRatings = ({reviewStars}) => {
  return (
    <div className="reviews-side-breakdown_ratings">
      {Object.entries(reviewStars).map((item, index) =>
        <div className="reviews-side-breakdown_ratings-item" key={index}>
          <p className="reviews-side-breakdown_ratings-item-text">{(index + 1) + " Stars"}</p>
          <div className={"reviews-side-breakdown_ratings-item-bar-container " + item[1]}>
            <div className="reviews-side-breakdown_ratings-item-bar-1"></div>
            <div className="reviews-side-breakdown_ratings-item-bar-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreakdownRatings;