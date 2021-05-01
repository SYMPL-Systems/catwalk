import React from 'react';
import Dropdown from './DropDown.jsx';
import Dropdown2 from './Dropdown2.jsx';

const AddCart = ({currentSkus}) => {
  return (
    <div className='overview-addCart'>
      <Dropdown style={currentSkus} name='size'/>
      <Dropdown2 />
      <button className='overview-addcart-btn btn-dark'>Add to Cart</button>
    </div>
  )

}

export default AddCart;