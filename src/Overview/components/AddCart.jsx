import React from 'react';
import Dropdown from './DropDown.jsx'

const AddCart = ({currentSkus}) => {
  return (
    <div className='overview-addCart'>
      <button className='add-cart-btn btn-dark'>Add to Cart</button>
      <Dropdown style={currentSkus} name='size'/>
      <Dropdown style={currentSkus} name='quantity'/>
    </div>
  )

}

export default AddCart;