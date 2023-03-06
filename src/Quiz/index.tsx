import React, { useEffect, useState } from 'react';

import './style.css';

export type Answer = {
  answer: string;
  correct: boolean;
}

function Quiz2({ game, savePoints, onShowRanking, startGame, nextGame }: any) {
  let gameType = game.type;
  const [showDescription, setShowDescription] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(game.steps[currentQuestion]);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [points, setPoints] = useState(0);
  const [faults, setFaults] = useState(0);
  const [picked, setPicked] = useState('');
  const [finished, setFinished] = useState(false);
  const [failed, setFailed] = useState(false);
  const [timeSpent, setTimeSpent] = useState(game.timeLimit);
  const [isTop, setIsTop] = useState(false);

  function setNextQuestion() {
    if (currentQuestion + 1 === game.steps.length) {
      const response = savePoints(game.type, points);
      setIsTop(response);
      setFinished(true);
      setShowNextButton(false);
    } else {
      setPicked('');
      setTimeSpent(game.timeLimit);
      setShowRightAnswer(false);
      setShowNextButton(false);
      setCurrentQuestion((oldCurrentQuestion: number) => oldCurrentQuestion + 1);
    }
  }

  useEffect(() => {
    setShowDescription(true);
    setShowNextButton(false);
    setCurrentQuestion(0);
    setQuestion(game.steps[0]);
    setPoints(0);
    setFaults(0);
    setPicked('');
    setFinished(false);
    setFailed(false);
    setTimeSpent(game.timeLimit);
    setIsTop(false);
    setShowRightAnswer(false);
  }, [game.type]);

  useEffect(() => {
    if (game.type === 'quiz-4') {
      const interval = setInterval(() => {
        setTimeSpent((oldTimeSpent: number) => showDescription || showNextButton ? oldTimeSpent : oldTimeSpent - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showDescription, showNextButton]);

  useEffect(() => {
    setQuestion(game.steps[currentQuestion]);
  }, [currentQuestion, game.steps]);

  useEffect(() => {
    if (timeSpent === 0) {
      setFaults((oldFaults: number) => {
        if (3 === oldFaults + 1) {
          setFailed(true);
        }
        return oldFaults + 1;
      });
      setShowRightAnswer(true);
      setShowNextButton(true);
    }
  }, [timeSpent]);

  function selectAnswer(answer: Answer) {
    setPicked(answer.answer);
    if (!showRightAnswer && answer.correct) setPoints((oldPoints: number) => game.type === 'quiz-4' ? oldPoints + 1 + timeSpent : oldPoints + 1);
    if (!showRightAnswer && !answer.correct) setFaults((oldFaults: number) => {
      if (3 === oldFaults + 1) {
        setFailed(true);
      }
      return oldFaults + 1;
    });
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
        {!finished && !failed && <>
          {!!question.imageUrl && <div className='question-image'
                                       style={{ backgroundImage: `url("${process.env.REACT_APP_ADMIN_URL}${question.imageUrl}")` }} />}
          <div className={'GameInfoBox'}>
            <div className={'GameInfoStepsLeft'}>
              Kérdések: {`${currentQuestion + 1}/${game.steps.length}`}</div>
            <div className={'GameInfoPoints'}>Pontok: {points}</div>
            <div className={'GameInfoFaults'}>Hibák: {faults}</div>
            {game.type === 'quiz-4' && <div className={'GameInfoStepsLeft'}>Hátralévő idő: {timeSpent}</div>}
            {game.type === 'quiz-4' && timeSpent === 0 &&
              <div className={'GameInfoPoints'}>Sajnos lejárt az időd!</div>}
          </div>
          <div className='question'>
            {question.question}
          </div>
          <div className='btn-grid answer-buttons'>
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
          {isTop && <h5>Gratulálunk felkerültél a toplistára!</h5>}
          <h1>Pontjaid: {points}</h1>
          <h6>Hibák: {faults}</h6>
        </div>}
        {failed && <div className={'failed-container'}>Sajnos 3 hibát vétettél. Vesztettél!</div>}
        <div className='controls'>
          <div className={'buttonHold'}>
            <button className={`btn ${(!showNextButton || failed) && 'hide'}`}
                    onClick={setNextQuestion}>Tovább
            </button>
            <button className={`btn ${(!finished && !failed) && 'hide'}`}
                    onClick={() => onShowRanking(game.type)}>Befejezem a játékot
            </button>
            <button className={`btn ${(!finished && !failed) && 'hide'}`}
                    onClick={startGame}>Vissza a játékokhoz
            </button>
            {nextGame && <button className={`btn high-button ${(!finished) && 'hide'}`}
                                 onClick={nextGame}>Következő játék
            </button>}
            <button className={`btn ${(finished || showNextButton || failed) && 'hide'}`}
                    onClick={startGame}>Feladom
            </button>
          </div>
        </div>
      </div>
    }
  </div>;
}

export default Quiz2;
