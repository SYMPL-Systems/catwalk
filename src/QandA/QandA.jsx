import React from "react";

<<<<<<< HEAD
class QandA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>hi</div>;
  }
}

=======
import QuestionList from './components/QuestionList.jsx';
import Search from './components/Search.jsx';
import MoreQuestions from './components/MoreQuestions.jsx';
import AddQuestion from './components/AddQuestion.jsx';
import sampleData from '../../SampleData.js';

import Question from './components/Questions.jsx';
import sampleData from '../../SampleData.js';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: sampleData.sampleQuestions[0].results
    }
  }
  render() {
    return (
      <div>
        <div className="search-bar">
          <Search />
        </div>
        <div className="questions-and-answers">
          <QuestionList questions={this.state.questions} />
        </div>
        <div>
          <MoreQuestions />
        </div>
        <div>
          <AddQuestion />
        </div>
        <Question questions={this.state.questions} />
      </div>
    )
  }
}
>>>>>>> bc3c7b590a6e022ec3d454a5a2e2168096b5fe02
export default QandA;