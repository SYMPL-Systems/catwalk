import React from 'react';
import StarRating from '/src/Widgets/StarRating.jsx'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'

const ProductInfo = ({product, reviews}) => {

  return (
    <div className='overview-widget-productInfo'>
      <div>
       <div className='stars-reviews'>
         <StarRating product={product} />
         {reviews > 0 ? <p className='review'>See all {reviews} reviews</p> : <></>}
      </div>
      </div>
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      <p>{product.default_price}</p>

      <div>
      <a href="#" className="fa fa-facebook"><FaFacebookSquare/></a>
      <a href="#" className="fa fa-twitter"><FaTwitterSquare/></a>
      <a href="#" className="fa fa-pintrest"><FaPinterest/></a>
      </div>

      <p className='description'>{product.description}</p>
    </div>
  );
}

export default ProductInfo;