import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';


 const StarRating = ({product, rating}) => {
   let avgRating = 0;
   if (product) {
    avgRating = product.avgRating;
   } else {
    avgRating = rating;
   }
  var jsxArr =[];
  for (var i = 1; i <= 5; i++) {
    if (i <= (avgRating || rating)) {
      jsxArr.push(<FaStar className="stars-icon" key={i} />);
    } else if ((avgRating || rating) === (i - 0.5)) {
      jsxArr.push(<FaStarHalfAlt className="stars-icon" key={(i-0.5)} />);
    } else {
      jsxArr.push(<FaRegStar className="stars-icon" key={i} />);
    }
  }
  return(<div className="stars">{jsxArr}</div>);
};

export default StarRating;