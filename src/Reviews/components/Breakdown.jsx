import React from 'react';
import BreakdownProduct from './BreakdownProduct';
import BreakdownRatings from './BreakdownRatings';

const Breakdown = ({reviewStars, characteristics}) => {
  return (
    <div className="reviews-side-breakdown">
      <BreakdownRatings reviewStars={reviewStars} />
      <BreakdownProduct characteristics={characteristics} />
    </div>
  );
};

export default Breakdown;