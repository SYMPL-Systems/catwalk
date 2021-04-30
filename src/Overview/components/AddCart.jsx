import React from 'react';
import Dropdown from './DropDown.jsx';
import Dropdown2 from './Dropdown2.jsx';

const AddCart = ({currentSkus}) => {
  return (
    <div className='overview-addCart'>
      <button className='add-cart-btn btn-dark'>Add to Cart</button>
      <Dropdown style={currentSkus} name='size'/>
      <Dropdown2 />
    </div>
  )

}

export default AddCart;