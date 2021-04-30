import React from 'react';
import ax from 'axios';
import StarRating from '../../Widgets/StarRating.jsx';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.review.helpfulness,
      updatedHelpfulness: false,
      reported: false,
    };
    this.helpfulReview = this.helpfulReview.bind(this);
    this.reportReview = this.reportReview.bind(this);
  }

  helpfulReview(reviewID) {
    if (this.state.updatedHelpfulness) { return; }
    ax.put(`/api/reviews/${reviewID}/helpful`)
      .then((res) => { console.log('put helpful'); })
      .then((res) => {
        this.setState({
          updatedHelpfulness: true,
          helpfulness: (this.state.helpfulness + 1),
        });
      })
      .catch((err) => {
        console.dir(err);
        console.error('ax err: /api/:review_id/helpful');
      });
  }

  reportReview(reviewID) {
    if (this.state.reported) { return; }
    ax.put(`/api/reviews/${reviewID}/report`)
      .then((res) => { console.log('put report'); })
      .then((res) => { this.setState({ reported: true, }); })
      .catch((err) => {
        console.dir(err);
        console.error('ax err: /api/:review_id/report');
      });
  }

  render() {
    let {
      review_id,
      rating,
      summary,
      recommend,
      response,
      body,
      date,
      reviewer_name,
      helpfulness,
      photos
    } = this.props.review;

    date = new Date(Date.parse(date)).toLocaleString('en-US',{dateStyle:'long'});

    return (
      <>
        <div className="reviews-main-view-list-item-header">
          <StarRating rating={rating} />
          <p>{reviewer_name + ', ' + date}</p>
        </div>
        { summary ?
        <div className="reviews-main-view-list-item-summary">
          <h3>{summary}</h3>
        </div>
        : <></>
        }
        <p className="reviews-main-view-list-item-body">
          {body}
        </p>
        { response ?
          <div className="reviews-main-view-list-item-response">
            <h4>Response:</h4>
            <p>{response}</p>
          </div>
          : <></>
        }
        <div className="reviews-main-view-list-item-interactions">
          <p>Helpful?</p>
          <button className="btn_" onClick={() => {this.helpfulReview(review_id)}}>
            {`Yes (${this.state.helpfulness})`}
          </button>
          <button className="btn_" onClick={() => {this.reportReview(review_id)}}>
            Report
          </button>
          </div>
      </>
    );
  }
};

export default ReviewListItem;