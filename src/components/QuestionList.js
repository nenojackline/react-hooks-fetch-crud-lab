import React from "react";

function QuestionList({questions, onDeleteQuestion, onUpdateAnswer}) {
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onUpdateAnswer={onUpdateAnswer} />
        ))}
      
      </ul>
    </section>
  );
}

export default QuestionList;
