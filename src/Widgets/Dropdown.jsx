import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ddVal: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ddVal: e.target.value});
    this.props.ddCB(e.target.value);
  }

  handleSubmit(e) { e.preventDefault(); }

  render() {
    // ddValue is "Default value" / initialization
    // i need to give these vars better names...
    let ddLabel = this.props.ddLabel;
    let ddList = this.props.ddList;
    let ddVal = this.props.ddVal;
    return (
      <form>
        <label htmlFor="dropdown">
          <select
            id={ddLabel}
            onChange={this.handleChange}
            defaultValue={ddVal}
            className="dropdown-select"
          >
            {ddList.map((option, i) => {
              return (
                <option key={i} value={option}>{option}</option>
              );
            })}
          </select>
        </label>
      </form>
    );
  }
}

export default DropDown;