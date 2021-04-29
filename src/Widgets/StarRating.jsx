import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

<<<<<<< HEAD
class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg: 0,
    };
    this.getStarRating = this.getStarRating.bind(this);
  }

  getStarRating() {
    ax.get(`/api/reviews/meta/avg/?product_id=${this.props.product_id}`)
      .then((res) => { this.setState({ avg: Number(res.data)}); })
      .catch((err) => {
        console.error('err in StarRating ax.get to /api/reviews/meta/avg');
        console.dir(err);
      });
  }

  componentDidMount() {
    this.getStarRating()
  }

  componentDidUpdate(prevProps) {
    if (this.props.product_id !== prevProps.product_id) {
      this.getStarRating();
    }
  }

  render() {
    var jsxArr =[];
    for (var i = 1; i <= 5; i++) {
      if (i <= this.state.avg) {
        jsxArr.push(<FaStar className="stars" key={i} />);
      } else if (this.state.avg === (i - 0.5)) {
        jsxArr.push(<FaStarHalfAlt className="stars" key={(i-0.5)} />);
      } else {
        jsxArr.push(<FaRegStar className="stars" key={i} />);
      }
=======

 const StarRating = (props) => {
  var jsxArr =[];
  for (var i = 1; i <= 5; i++) {
    if (i <= props.product.avgRating) {
      jsxArr.push(<FaStar className="stars" key={i} />);
    } else if (props.product.avgRating === (i - 0.5)) {
      jsxArr.push(<FaStarHalfAlt className="stars" key={(i-0.5)} />);
    } else {
      jsxArr.push(<FaRegStar className="stars" key={i} />);
>>>>>>> 56d2623a1a38f6a619de69bde6b35b5fa5bef229
    }
  }
  return(<div>{jsxArr}</div>);
};

export default StarRating;