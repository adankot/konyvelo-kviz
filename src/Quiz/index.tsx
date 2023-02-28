import React, { useEffect, useState } from 'react';

import './style.css';

export type Answer = {
  answer: string;
  correct: boolean;
}

function Quiz2({ game, savePoints, onShowRanking, startGame }: any) {
  const [showDescription, setShowDescription] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(game.steps[currentQuestion]);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [points, setPoints] = useState(0);
  const [faults, setFaults] = useState(0);
  const [picked, setPicked] = useState('');
  const [finished, setFinished] = useState(false);

  function setNextQuestion() {
    if (currentQuestion + 1 === game.steps.length) {
      savePoints(game.type, points);
      setFinished(true);
      setShowNextButton(false);
    } else {
      setPicked('');
      setShowRightAnswer(false);
      setShowNextButton(false);
      setCurrentQuestion((oldCurrentQuestion: number) => oldCurrentQuestion + 1);
    }
  }

  useEffect(() => {
    setQuestion(game.steps[currentQuestion]);
  }, [currentQuestion, game.steps]);

  function selectAnswer(answer: Answer) {
    setPicked(answer.answer);
    if (!showRightAnswer && answer.correct) setPoints((oldPoints: number) => oldPoints + 1);
    if (!showRightAnswer && !answer.correct) setFaults((oldFaults: number) => oldFaults + 1);
    setShowRightAnswer(true);
    setShowNextButton(true);
  }

  return <div>
    {showDescription ?
      <div className={'GameDescriptionContainer'}>
        <div className={'GameDescription'}>
          <div className={'GameDescriptionTitle'}>LEÍRÁS</div>
          <div>
            {game.description}
          </div>
        </div>
        <div className={'GameDescriptionButtonHold'}>
          <button className={'btn start-btn'} onClick={() => setShowDescription(false)}>Tovább</button>
        </div>
        <div className={'GameDescriptionButtonHold'}>
          <button className={'btn start-btn'} onClick={startGame}>Vissza</button>
        </div>
      </div> :
      <div className={`questionContainer`}>
        {!finished && <>
          {!!question.imageUrl && <div className='question-image'
                                       style={{ backgroundImage: `url("${process.env.REACT_APP_ADMIN_URL}/${question.imageUrl}")` }} />}
          <div className={'GameInfoBox'}>
            <div className={'GameInfoStepsLeft'}>
              Kérdések: {`${currentQuestion + 1}/${game.steps.length}`}</div>
            <div className={'GameInfoPoints'}>Pontok: {points}</div>
            <div className={'GameInfoFaults'}>Hibák: {faults}</div>
          </div>
          <div className='question'>
            {question.question}
          </div>
          <div id='answer-buttons' className='btn-grid'>
            {question.answers[0]?.answer &&
              <button
                className={`btn ${showRightAnswer ? (question.answers[0].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[0].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[0])}>{question.answers[0].answer}</button>}
            {question.answers[1]?.answer &&
              <button
                className={`btn ${showRightAnswer ? (question.answers[1].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[1].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[1])}>{question.answers[1].answer}</button>}
            {question.answers[2]?.answer &&
              <button
                className={`btn ${showRightAnswer ? (question.answers[2].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[2].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[2])}>{question.answers[2].answer}</button>}
            {question.answers[3]?.answer &&
              <button
                className={`btn ${showRightAnswer ? (question.answers[3].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[3].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[3])}>{question.answers[3].answer}</button>}
          </div>
        </>}
        {finished && <div className={'GameSummary'}>
          <h5>Gratulálunk felkerültél a toplistára!</h5>
          <h1>Pontjaid: {points}</h1>
          <h6>Hibák: {faults}</h6>
        </div>}
        <div className='controls'>
          <div className={'buttonHold'}>
            <button className={`btn ${(!showNextButton) && 'hide'}`}
                    onClick={setNextQuestion}>Tovább
            </button>
            <button className={`btn ${(!finished) && 'hide'}`}
                    onClick={() => onShowRanking(game.type)}>Top Lista
            </button>
            <button className={`btn ${(!finished) && 'hide'}`}
                    onClick={startGame}>Vissza a játékokhoz
            </button>
          </div>
        </div>
      </div>
    }
  </div>;
}

export default Quiz2;
