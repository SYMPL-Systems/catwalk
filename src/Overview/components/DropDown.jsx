import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  }

render() {
    return (
      <form>
        <label className='add-cart-dropdown'>
          {this.props.name === 'size' ? 'Select Size' : 'Select Quantity'}
          <select>
            {Array.isArray(this.props.style) ? <></> :
            Object.values(this.props.style.skus).map((item, index) => {
              return (
                <option>{item[this.props.name]}</option>
              )
            })
            }
          </select>
        </label>
      </form>
    )
  }
}

export default Dropdown;

// html select element