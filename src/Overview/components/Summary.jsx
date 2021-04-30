import React from 'react';

const Summary = ({product}) => {
  return (
    <div className='overview-summary'>
      <h2>{product.slogan}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export default Summary;