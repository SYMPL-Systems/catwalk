import React from 'react';
import StarRating from '/src/Widgets/StarRating.jsx'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'

const ProductInfo = ({product}) => {

  return (
    <div className='overview-widget-productInfo'>
      <div>
       <div className='stars-reviews'>
         <StarRating product={product} />
         <p className='review'>See all reviews</p>
      </div>
      </div>
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      <p>{product.default_price}</p>
      <p>{product.overview ? product.overview : <></>}</p>
      <div>
      <a href="#" className="fa fa-facebook"><FaFacebookSquare/></a>
      <a href="#" className="fa fa-twitter"><FaTwitterSquare/></a>
      <a href="#" className="fa fa-pintrest"><FaPinterest/></a>
      </div>
    </div>
  );
}

export default ProductInfo;