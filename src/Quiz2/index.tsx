import React, { useState } from "react";

import './style.css';

export type Answer = {
  text: string;
  correct: boolean;
}

export type Question = {
  imageUrl?: string;
  question: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    question: 'Mi látható a képen?',
    imageUrl: 'https://cdn.erettsegi.com/wp-content/uploads/2020/07/9krjmmlspqw-1200x628.jpg',
    answers: [
      { text: 'Kavics', correct: true },
      { text: 'Béka', correct: false },
      { text: 'Telefon', correct: false }
    ]
  },
  {
    question: 'What is 2+4',
    answers: [
      { text: '4', correct: false },
      { text: '6', correct: true },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'False is true?',
    answers: [
      { text: 'False', correct: true },
      { text: 'True', correct: false }
    ]
  },
];

let currentQuestion = 0;

function Quiz2() {

  const [showNextButton, setShowNextButton] = useState(false);
  const [question, setQuestion] = useState(questions[currentQuestion]);
  const [showRightAnswer, setShowRightAnswer] = useState(false);

  function setNextQuestion() {
    setShowRightAnswer(false);
    setShowNextButton(false);
    currentQuestion += 1;
    setQuestion(questions[currentQuestion]);
  }

  function selectAnswer(answer: Answer) {
    setShowRightAnswer(true);
    setShowNextButton(true);
  }

  return <div>
    <div className={`questionContainer`}>
      <div className="question-image-container">
        {!!question.imageUrl && <img className="question-image" src={question.imageUrl} />}
      </div>
      <div>{`${currentQuestion + 1}/${questions.length}`}</div>
      <div className="question">
        {question.question}
      </div>
      <div id="answer-buttons" className="btn-grid">
        {question.answers[0]?.text &&
				  <button className={`btn ${showRightAnswer ? (question.answers[0].correct ? 'correct' : 'wrong') : ''}`}
				          onClick={() => selectAnswer(question.answers[0])}>{question.answers[0].text}</button>}
        {question.answers[1]?.text &&
				  <button className={`btn ${showRightAnswer ? (question.answers[1].correct ? 'correct' : 'wrong') : ''}`}
				          onClick={() => selectAnswer(question.answers[1])}>{question.answers[1].text}</button>}
        {question.answers[2]?.text &&
				  <button className={`btn ${showRightAnswer ? (question.answers[2].correct ? 'correct' : 'wrong') : ''}`}
				          onClick={() => selectAnswer(question.answers[2])}>{question.answers[2].text}</button>}
        {question.answers[3]?.text &&
				  <button className={`btn ${showRightAnswer ? (question.answers[3].correct ? 'correct' : 'wrong') : ''}`}
				          onClick={() => selectAnswer(question.answers[3])}>{question.answers[3].text}</button>}
      </div>
      <div className='controls'>
        <div className={'buttonHold'}>
          <button id="next-btn" className={`btn next-btn ${(!showNextButton || questions.length === currentQuestion + 1) && 'hide'}`}
                  onClick={setNextQuestion}>Következő
          </button>
        </div>
      </div>
    </div>
  </div>
}

export default Quiz2;
