import React from 'react';

class Dropdown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  }

render() {
    return (
      <form>
        <label className='add-cart-dropdown add-cart-btn'>
          Select Quantity
          <select>
          {this.state.quantity.map((item, index) => {
            return (
            <option>{item}</option>
            )
          })}
          </select>
        </label>
      </form>
    )
  }
}

export default Dropdown2;