import React from "react";
import ProductInfo from './components/ProductInfo.jsx';
import axios from 'axios';
import ImgGallery from './components/ImgGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddCart from './components/AddCart.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      product: this.props.product,
      currentStyle: [],
      reviewTot: 0
    }
    this.handleStyleClick = this.handleStyleClick.bind(this);
    this.getProductandStyles = this.getProductandStyles.bind(this);
  }

  getProductandStyles() {
    axios.get(`/api/reviews/?product_id=${this.props.product.id}&count=999`)
    .then((response) => {
      this.setState({
      styles: this.props.styles,
      product: this.props.product,
      currentStyle: this.props.styles[0],
      reviewTot: response.data.results.length,
      currentSku: 0
    })
  })
}

  componentDidMount() {
    this.getProductandStyles();
  }

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      this.getProductandStyles();
    }
  }

 handleStyleClick(id) {
   for (let i = 0; i < this.state.styles.length; i++) {
     if (id == this.state.styles[i].style_id) {
       this.setState({
         currentStyle: this.state.styles[i]
       })
       break;
     }
   }
 }

 render() {
   console.log(this.state.currentStyle);
    return (
     <div className='overview-widget'>
       <ImgGallery current={this.state.currentStyle} product={this.state.product.description}/>
       <ProductInfo product={this.state.product} reviews={this.state.reviewTot}/>
       <StyleSelector styles={this.state.styles} handleClick={this.handleStyleClick}/>
       <AddCart currentSkus={this.state.currentStyle}/>
    </div>
    )
  }
 }


export default Overview;

