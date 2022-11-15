import React, { useRef, useState } from 'react';

import './App.css';

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
    question: 'What is 2+2',
    imageUrl: 'https://cdn.erettsegi.com/wp-content/uploads/2020/07/9krjmmlspqw-1200x628.jpg',
    answers: [
      { text: '4', correct: true },
      { text: '6', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'What is 2+4',
    answers: [
      { text: '4', correct: false },
      { text: '6', correct: true },
      { text: '5', correct: false }
    ]
  }
];

let currentQuestion = 0;

function App() {
  const [showStartButton, setShowStartButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showQuestionContainer, setShowQuestionContainer] = useState(false);
  const [question, setQuestion] = useState(questions[currentQuestion]);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  function startGame() {
    setShowStartButton(false);
    setShowQuestionContainer(true);
  }

  function setNextQuestion() {
    setCorrect(false);
    setWrong(false);
    setShowRightAnswer(false);
    setShowNextButton(false);
    currentQuestion += 1;
    setQuestion(questions[currentQuestion]);
  }

  function selectAnswer(answer: Answer) {
    if(answer.correct){
      setCorrect(true);
    } else {
      setWrong(true);
    }
    setShowRightAnswer(true);
    setShowNextButton(true);
  }

  return (
    <div className="App">
      <body className={`${!!correct && 'correct'} + ' ' + ${!!wrong && 'wrong'}`}>
      <div className="container">
        <div className={`questionContainer ${showQuestionContainer ? '' : 'hide'}`}>
          <div className="question-image-container">
            {!!question.imageUrl && <img className="question-image" src={question.imageUrl} />}
          </div>
          <div className="question">
            {question.question}
          </div>
          <div id="answer-buttons" className="btn-grid">
            {question.answers[0]?.text && <button className={`btn ${showRightAnswer && (question.answers[0].correct ? 'correct' : 'wrong')}`} onClick={() => selectAnswer(question.answers[0])}>{question.answers[0].text}</button>}
            {question.answers[1]?.text && <button className={`btn ${showRightAnswer && (question.answers[1].correct ? 'correct' : 'wrong')}`} onClick={() => selectAnswer(question.answers[1])}>{question.answers[1].text}</button>}
            {question.answers[2]?.text && <button className={`btn ${showRightAnswer && (question.answers[2].correct ? 'correct' : 'wrong')}`} onClick={() => selectAnswer(question.answers[2])}>{question.answers[2].text}</button>}
            {question.answers[3]?.text && <button className={`btn ${showRightAnswer && (question.answers[3].correct ? 'correct' : 'wrong')}`} onClick={() => selectAnswer(question.answers[3])}>{question.answers[3].text}</button>}
          </div>
        </div>
        <div className="controls">
          <button id="start-btn" className={`btn start-btn ${!showStartButton && 'hide'}`}
                  onClick={startGame}>Start
          </button>
          <button id="next-btn" className={`btn next-btn ${!showNextButton && 'hide'}`} onClick={setNextQuestion}>Next</button>
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
