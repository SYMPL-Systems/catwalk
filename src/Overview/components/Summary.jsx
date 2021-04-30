import React from 'react';

const Summary = ({product}) => {
  return (
    <div className='overview-summary'>
      <h2 className='overview-summary-title'>{product.slogan.toUpperCase()}</h2>
      <p className='overview-summary-desc'>{product.description}</p>
    </div>
  )
}

export default Summary;