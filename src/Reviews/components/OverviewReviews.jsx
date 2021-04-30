import React from 'react';
import Dropdown from '../../Widgets/Dropdown.jsx'

const OverviewReviews = ({totalReviews, changeSort}) => {
  return (
    <div className="reviews-main-overview">
      <p>{totalReviews + " reviews, sorted by"}</p>
      <Dropdown
        ddLabel="ddReviews"
        ddList={['relevant', 'newest', 'helpful']}
        ddVal="relevant"
        ddCB={changeSort}
      />
    </div>
  );
};

export default OverviewReviews;