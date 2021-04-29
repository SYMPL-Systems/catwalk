import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    }

  }

render() {
return (
<form>
<label className='add-cart-selectsize'>
Select Size
 <select>
{/*
  {Object.keys(this.props.currentSkus.skus)} */}
  <option value="grapefruit">Grapefruit</option>


</select>
</label>
</form>
    )
  }
}

export default Dropdown;