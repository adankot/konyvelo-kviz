import React, { useEffect, useState } from 'react';

import './style.css';

export type Answer = {
  text: string;
  correct: boolean;
}

function Quiz2({ game }: any) {
  const [showDescription, setShowDescription] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(game.steps[currentQuestion]);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [points, setPoints] = useState(0);
  const [faults, setFaults] = useState(0);

  function setNextQuestion() {
    setShowRightAnswer(false);
    setShowNextButton(false);
    setCurrentQuestion((oldCurrentQuestion: number) => oldCurrentQuestion + 1);
  }

  useEffect(() => {
    setQuestion(game.steps[currentQuestion]);
  }, [currentQuestion, game.steps]);

  function selectAnswer(answer: Answer) {
    if (!showRightAnswer && answer.correct) setPoints((oldPoints: number) => oldPoints + 1);
    if (!showRightAnswer && !answer.correct) setFaults((oldFaults: number) => oldFaults + 1);
    setShowRightAnswer(true);
    setShowNextButton(true);
  }

  return <div>
    {showDescription ?
      <div className={'GameDescriptionContainer'}>
        <div className={'GameDescription'}>
          <h1>LEÍRÁS</h1>
          <div>
            {game.description}
          </div>
        </div>
        <div className={'GameDescriptionButtonHold'}>
          <button className={'btn start-btn'} onClick={() => setShowDescription(false)}>Tovább</button>
        </div>
      </div> :
      <div className={`questionContainer`}>
        <div className='question-image-container'>
          {!!question.imageUrl &&
            <img className='question-image'
                 src={process.env.REACT_APP_ADMIN_URL + '/' + question.imageUrl}
                 alt={process.env.REACT_APP_ADMIN_URL + '/' + question.imageUrl}
            />}
        </div>
        <div className={'GameInfoBox'}>
          <div className={'GameInfoStepsLeft'}> Hátralévő
            kérdések: {`${currentQuestion + 1}/${game.steps.length}`}</div>
          <div className={'GameInfoPoints'}>Pontok: {points}</div>
          <div className={'GameInfoFaults'}>Hibák: {faults}</div>
        </div>
        <div className='question'>
          {question.question}
        </div>
        <div id='answer-buttons' className='btn-grid'>
          {question.answers[0]?.answer &&
            <button className={`btn ${showRightAnswer ? (question.answers[0].correct ? 'correct' : 'wrong') : ''}`}
                    onClick={() => selectAnswer(question.answers[0])}>{question.answers[0].answer}</button>}
          {question.answers[1]?.answer &&
            <button className={`btn ${showRightAnswer ? (question.answers[1].correct ? 'correct' : 'wrong') : ''}`}
                    onClick={() => selectAnswer(question.answers[1])}>{question.answers[1].answer}</button>}
          {question.answers[2]?.answer &&
            <button className={`btn ${showRightAnswer ? (question.answers[2].correct ? 'correct' : 'wrong') : ''}`}
                    onClick={() => selectAnswer(question.answers[2])}>{question.answers[2].answer}</button>}
          {question.answers[3]?.answer &&
            <button className={`btn ${showRightAnswer ? (question.answers[3].correct ? 'correct' : 'wrong') : ''}`}
                    onClick={() => selectAnswer(question.answers[3])}>{question.answers[3].answer}</button>}
        </div>
        <div className='controls'>
          <div className={'buttonHold'}>
            <button id='next-btn'
                    className={`btn next-btn ${(!showNextButton || game.steps.length === currentQuestion + 1) && 'hide'}`}
                    onClick={setNextQuestion}>Következő
            </button>
          </div>
        </div>
      </div>
    }
  </div>;
}

export default Quiz2;
