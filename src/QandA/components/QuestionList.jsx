import React from 'react';
import QuestionItem from './QuestionItem.jsx';


const QuestionList = ({questions, count, term, product}) => {
  return (
    <>
      {questions.filter((question) => question.question_body.toLowerCase().indexOf(term.toLowerCase()) !== -1).map((question, i) => {
        if (i < count) {
          return (
            <div key={i} className="question-container">
              <QuestionItem product={product} key={i} question={question}/>
            </div>
          )} else {
            return (
              <div key={i}></div>
            )
          }
      })}
    </>
  );
};

export default QuestionList;