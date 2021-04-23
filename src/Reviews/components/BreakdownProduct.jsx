import React from 'react';

const BreakdownProduct = ({productChars}) => {
  //let {Length, Width, Quality, Comfort, Size, Fit} = props.productChars;
  return (
    <div className="breakdown__breakdown-product">
      {Object.keys(productChars).map((char, i)=>(
          <p key={i}>{char} = {productChars[char]}</p>
      ))}
    </div>
  );
};

export default BreakdownProduct;