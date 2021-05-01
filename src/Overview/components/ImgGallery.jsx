import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';
import Slider from '../../Widgets/Slider.jsx';

class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.current,
      images: [],
      currentImg: 0
    }
    this.handleListClick = this.handleListClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.setState({
        currentStyle: this.props.current,
        images: this.props.current.photos,
      })
    }
  }

  handleListClick(e) {
    this.setState({
      currentImg: Number(e.target.id)
    })
  }

  render() {
    return (
      <div className='overview-gallery-container img-gallery-wrap'>
        <div className="overview-list carousel-list carousel-vertical">
          { this.state.currentStyle ?
          <Slider direction={'vertical'}>
            {this.state.images.map((image, index) => {
              return (
                <div className="overview-list-item">
                  <img src={image.thumbnail_url} className='overview-list-item-img'
                  id={index} onClick={this.handleListClick}
                  key={index} />
                </div>
              )
            })}
          </Slider> : <></>
          }
        </div>
        <div className="overview-main gallery-img">
          {this.state.currentStyle ?
          <GalleryCarousel images={this.state.images} currentImg={this.state.currentImg} handleClick={this.handleListClick}/>
          : <></>
          }
        </div>
      </div>
    )
  }
}

export default ImgGallery;


