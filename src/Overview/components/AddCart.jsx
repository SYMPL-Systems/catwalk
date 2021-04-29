import React from 'react';
import Dropdown from './DropDown.jsx'

const AddCart = ({currentSkus}) => {
  return (
    <div className='add-cart'>
      <button className='add-cart-btn'>Add to Cart</button>
      <Dropdown styles={currentSkus}/>
    </div>
  )

}

export default AddCart;