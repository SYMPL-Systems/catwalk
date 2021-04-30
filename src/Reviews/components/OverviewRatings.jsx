import React from 'react';
import StarRating from '../../Widgets/StarRating.jsx'

const OverviewRatings = ({product, avgRating}) => {
  let avgStars = (Math.round(avgRating * 2) / 2).toFixed(1);
  if (avgRating === 0) { avgStars = 0 }
  return (
    <div className="reviews-side-rating">
      <div className="reviews-side-rating_avg">
        {avgRating}
      </div>
      <div className="reviews-side-rating_stars">
        <StarRating product={product} />
      </div>
    </div>
  );
};

export default OverviewRatings;