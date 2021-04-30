import React from 'react';

const Summary = ({product}) => {
  return (
    <div className='overview-summary'>
      <h3>{product.slogan}</h3>
      <p>{product.description}</p>
    </div>
  )
}

export default Summary;