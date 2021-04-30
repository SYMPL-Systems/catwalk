import React from 'react';

const StyleSelector = (props) => {

  const styleClicked = (e) => {
    props.handleClick(e.target.id);
  }

  return (
    <div className='overview-styles style-select'>
      <div>
      <h3 className='overview-styles-head'>{props.styles ? props.name : <></> }</h3>
      </div>
      <div className="style-select-img">
        { props.styles ?
        <div>
          {props.styles.map((image, index) => {
            return (
              <div key={index} className='row-select'>
                <img src={image.photos[0].thumbnail_url} id={image.style_id}
                onClick={styleClicked} className='style-img'/>
              </div>
            )
          })}
        </div> : <></>
        }
      </div>
    </div>
  )
}

export default StyleSelector;