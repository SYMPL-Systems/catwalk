import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: 'Select Size'
    }

  }
  render() {
    return (
<form>
<label className='add-cart-selectsize'>
Select Size
 <select>

  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
</label>
</form>
    )
  }
}

export default Dropdown;