import React from 'react';
import Photos from './Photos.jsx';
import moment from 'moment';
import axios from 'axios';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.answer.helpfulness,
      reported: false,
      updatedHelpfulness: false,
      updatedReport: false
    }
    this.reportButton = !this.state.updatedReport ? <div onClick={this.updateReport} className="report-btn">Report btn</div> : <div className="report-btn"><em>Reported</em></div>;
    this.updateHelpful = this.updateHelpful.bind(this);
    this.updateReport = this.updateReport.bind(this);
    this.byLine = this.props.answer.answerer_name === 'Seller' ? <b>Seller</b> : <span>{this.props.answer.answerer_name}</span>;
  }


  updateHelpful() {
    if(!this.state.updatedHelpful) {
      axios.put(`/qa/answers/${this.props.answer.answer_id}/helpful`)
      .catch((error) => {
        console.error('Helpful Button Click error: ', error);
      });
      this.setState({
        updatedHelpful :  true,
        helpfulness: this.state.helpfulness + 1
      });
    }
  }

  updateReport() {
    if (!this.state.updatedReport) {
      axios.put(`/qa/answers/${this.props.answer.answer_id}/report`)
      .catch((error) => {
        console.error('Answer Report Button Error: ', error);
      });
      this.setState({
        updatedReport : true
      });
    }
  }


  render() {
    return (
      <div className="answer-area">
        <div className="answer-header">
          <div className="answer-text">
            {this.props.answer.body}
          </div>
          <div className="answer-interaction interaction">
            <div className="user-info">
              <span className="answer-name">by: {this.byLine}</span>, <span className="answer-date">{moment(this.props.answer.date).add(1, 'day').format('MMMM Do YYYY')}</span>
            </div>
            <div onClick={this.updateHelpful} className="helpful-btn">
              Helpful? &#40;{this.state.helpfulness}&#41;
            </div>
            {/* <div onClick={updateReport} className="report-btn">
              Report btn
            </div> */}
            {this.reportButton}
          </div>
        </div>
      <div className="photo-details">
        <Photos photos={this.props.answer.photos}/>
      </div>
    </div>
  )
  }
}

export default AnswerItem;