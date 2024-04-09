import React, { useEffect, useState } from 'react';

import './style.css';

export type Answer = {
  answer: string;
  correct: boolean;
}

function Quiz({ game, onShowRanking, startGame, nextGame }: any) {
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

  function setNextQuestion() {
    if (currentQuestion + 1 === game.steps.length) {
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
    setShowRightAnswer(false);
  }, [game.type, game.steps, game.timeLimit]);

  useEffect(() => {
    if (game.timeLimit) {
      const interval = setInterval(() => {
        setTimeSpent((oldTimeSpent: number) => showDescription || showNextButton ? oldTimeSpent : oldTimeSpent - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showDescription, showNextButton, game.steps, game.timeLimit]);

  useEffect(() => {
    setQuestion(game.steps[currentQuestion]);
  }, [currentQuestion, game.steps, game.timelimit]);

  useEffect(() => {
    if (timeSpent === 0) {
      setFaults((oldFaults: number) => oldFaults + 1);
      setShowRightAnswer(true);
      setShowNextButton(true);
    }
  }, [timeSpent]);

  function selectAnswer(answer: Answer) {
    if (showRightAnswer) return;
    setPicked(answer.answer);
    if (!showRightAnswer && answer.correct) setPoints((oldPoints: number) => game.timeLimit ? oldPoints + 1 + timeSpent : oldPoints + 1);
    if (!showRightAnswer && !answer.correct) setFaults((oldFaults: number) => oldFaults + 1);
    setShowRightAnswer(true);
    setShowNextButton(true);
  }

  return <div>
    {showDescription ?
      <div className={'GameDescriptionContainer'}>
        <div className={'GameDescription'}>
          <div className={'GameDescriptionTitle'}>Leírás</div>
          <div>
            {game.description}
          </div>
        </div>
        <div className={'GameDescriptionButtonHold'}>
          <button className={'btn'} onClick={() => setShowDescription(false)}>Tovább</button>
        </div>
        <div className={'GameDescriptionButtonHold'}>
          <button className={'btn'} onClick={startGame}>Vissza</button>
        </div>
      </div> :
      <div className={`questionContainer`}>
        {!finished && <>
          <div className={'GameInfoBox top'}>
            <div className={'GameInfoLeft'}>
              Kérdések: {`${currentQuestion + 1}/${game.steps.length}`}</div>
            <div className={'GameInfoRight'}>Hiba: {faults}</div>
            <div className={'GameInfoLeft'}>Hátralévő idő: {timeSpent}</div>
            <div className={'GameInfoRight'}>Pontok: {points}</div>
          </div>
          {/*<div className={'GameInfoBox bottom'}>*/}
          {/*  <div className={'GameInfoLeft'}>Category: {question.category || 'Common'}</div>*/}
          {/*  <div className={'GameInfoRight'}>ID: {question.id}</div>*/}
          {/*  <div className={'GameInfoLeft'}>Difficulty: {question.difficulty}</div>*/}
          {/*  <div className={'GameInfoRight'}>Version: {`${process.env.REACT_APP_VERSION}`}</div>*/}
          {/*</div>*/}
          <div className='question'>
            {question.question}
          </div>
          <div className=' answer-buttons'>
            {question.answers[0]?.answer &&
              <button
                className={`qbtn ${showRightAnswer ? (question.answers[0].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[0].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[0])}>{question.answers[0].answer}</button>}
            {question.answers[1]?.answer &&
              <button
                className={`qbtn ${showRightAnswer ? (question.answers[1].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[1].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[1])}>{question.answers[1].answer}</button>}
            {question.answers[2]?.answer &&
              <button
                className={`qbtn ${showRightAnswer ? (question.answers[2].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[2].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[2])}>{question.answers[2].answer}</button>}
            {question.answers[3]?.answer &&
              <button
                className={`qbtn ${showRightAnswer ? (question.answers[3].correct ? 'correct ' : 'wrong ') : ''} ${question.answers[3].answer === picked ? 'picked' : ''}`}
                onClick={() => selectAnswer(question.answers[3])}>{question.answers[3].answer}</button>}
          </div>
        </>}
        <div className='controls'>
          <div className={'buttonHold'}>
            <button className={`btn ${(!showNextButton) && 'hide'}`}
                    onClick={setNextQuestion}>Tovább
            </button>
            {finished && <div className='GameFinishContainer'>
              <div className='GameFinishTitle'>Game finished</div>
              <div className='GameFinishData'>
                points: {points}
              </div>
              <div className='GameFinishData'>
                faults: {faults}
              </div>
              <button className='btn'
                      onClick={startGame}>Finish
              </button>
            </div>}
            {(!finished && !showNextButton) && <button className='btn'
                                                       onClick={() => setFinished(true)}>Feladom
            </button>}
          </div>
        </div>
      </div>
    }
  </div>;
}

export default Quiz;
