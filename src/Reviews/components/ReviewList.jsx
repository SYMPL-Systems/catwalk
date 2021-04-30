import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxDisp: 2,
    };
  }

  render() {
    if (!this.props.reviews) { return(<></>); }
    else if (this.props.reviews.length === this.props.maxDisp) {
      return (
        <div className="reviews-main-view">
          <div className="reviews-main-view-list">
            {this.props.reviews.map((review, i) => {
              if (i < this.props.maxDisp) {
                return <ReviewListItem review={review} key={i} />
              }
            })}
          </div>
          <div className="reviews-main-view-buttons">
            <button className="btn-review" disabled>
              More Reviews
            </button>
            <button className="btn-review">
              Add a Review +
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="reviews-main-view">
          <div className="reviews-main-view-list">
            {this.props.reviews.map((review, i) => {
              if (i < this.props.maxDisp) {
                return(
                  <div key={i} className="reviews-main-view-list-item">
                    <ReviewListItem review={review} />
                  </div>
                );
                }
            })}
          </div>
          <div className="reviews-main-view-buttons">
            <button className="btn-review" onClick={this.props.moreReviews}>
              MORE REVIEWS
            </button>
            <button className="btn-review">
              ADD A REVIEW +
            </button>
          </div>
        </div>
      );
    }
  }
};

export default ReviewList;