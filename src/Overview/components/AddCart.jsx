import React from 'react';
import Dropdown from './DropDown.jsx'

const AddCart = (props) => {
  return (
    <div className='add-cart'>
      <button className='add-cart-btn'>Add to Cart</button>
      <Dropdown/>
    </div>
  )
}

export default AddCart;