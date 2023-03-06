import React, { useEffect, useState } from 'react';

import './style.css';

const getBackgroundPosition = (id: number, div: number) => {
  const multiplier = 600 / div;
  const row = Math.floor((id - 1) / div) + 1;
  const col = (id % div) + 1;
  const top = (row * multiplier);
  const left = (col * multiplier) - multiplier;
  return `bottom ${top}px right ${left}px`;
};

const lastNumbers: any = {
  3: 9,
  5: 25,
  6: 36
};

let currentStep = 0;

function Puzzle3x3({ game, savePoints, onShowRanking, startGame, nextGame }: any) {
  const [series, setSeries] = useState(game.steps[0].series);
  const [picture, setPicture] = useState(game.steps[0].imageUrl);
  const [div, setDiv] = useState(game.steps[0].div);
  const [showDescription, setShowDescription] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    if (endTime) {
      const response = savePoints(game.type, endTime);
      setIsTop(response);
    }
  }, [endTime]);

  function onHelpClick() {
    setShowHelp(true);
    setTimeSpent((oldTime: number) => oldTime + 30);
  }

  function setNextStep() {
    if (currentStep + 1 === game.steps.length) {
      setFinished(true);
      setEndTime(() => {
        return timeSpent;
      });
      setShowNextButton(false);
    } else {
      setShowNextButton(false);
      currentStep += 1;
      setPicture(game.steps[currentStep].imageUrl);
      setSeries(game.steps[currentStep].series || []);
      setDiv(game.steps[currentStep].div);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent((oldTimeSpent: number) => showDescription || showNextButton ? oldTimeSpent : oldTimeSpent + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [showDescription, showNextButton]);

  const moveTile = (id: number, div: number) => {
    setSeries((prev: any) => {
      const newSeries = [...prev];
      const index = newSeries.indexOf(id);
      const lastNumber = lastNumbers[div];
      const indexOfBlank = newSeries.indexOf(lastNumber);
      if (newSeries[index + 1] === lastNumber || newSeries[index - 1] === lastNumber || newSeries[index + div] === lastNumber || newSeries[index - div] === lastNumber) {
        [newSeries[index], newSeries[indexOfBlank]] = [newSeries[indexOfBlank], newSeries[index]];
      }
      if (checkWin(newSeries)) setShowNextButton(true);
      return newSeries;
    });
  };

  const checkWin = (series: Array<number>) => series.every((v, i, a) => !i || a[i - 1] <= v);

  return <>
    {showDescription &&
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
        <div className={'GameDescriptionButtonHold'}>
          <button className={'btn start-btn'} onClick={startGame}>Vissza</button>
        </div>
      </div>}
    {!showDescription && !finished && <div className={'puzzle-game-container'}>
      <div style={{marginLeft: 'auto', marginRight: 0}}>
        <div
          className={'puzzle-help'}
          onClick={onHelpClick}
          style={{
            backgroundImage: showHelp ? `url("${process.env.REACT_APP_ADMIN_URL}${picture}")` : '',
            backgroundSize: 'cover'
          }}
        >{!showHelp && <p>Segítség<br />(+30 másodperc)</p>}</div>
      </div>
      <div className='puzzle-container' style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${div}, auto)`,
        gap: '5px',
        margin: 'auto'
      }}>
        {series.map((id: number) =>
          <div className='puzzle-image'
               style={{
                 backgroundImage: id !== lastNumbers[div] ? `url("${process.env.REACT_APP_ADMIN_URL}${picture}")` : '',
                 backgroundPosition: getBackgroundPosition(id, div),
                 height: `${600 / div}px`,
                 width: `${600 / div}px`
               }}
               onClick={() => moveTile(id, div)}
               key={id}
          ></div>)}
      </div>
      <div />
      <div />
      <div className={'PuzzleGameInfoBox'}>
        <div className={'PuzzleGameInfoTime'}>Eltelt idő: {timeSpent}</div>
      </div>
    </div>}
    <div>
      {finished && <div className={'GameSummary'}>
        {isTop && <h5>Gratulálunk felkerültél a toplistára!</h5>}
        <h1>Idő: {endTime}</h1>
      </div>}
      <div className='controls'>
        <div className={'buttonHold'}>
          <button className={`btn ${(!showNextButton) && 'hide'}`}
                  onClick={setNextStep}>Tovább
          </button>
          <button className={`btn ${(!finished) && 'hide'}`}
                  onClick={() => onShowRanking(game.type)}>Befejezem
          </button>
          <button className={`btn ${(!finished) && 'hide'}`}
                  onClick={startGame}>Vissza a játékokhoz
          </button>
          {nextGame && <button className={`btn ${(!finished) && 'hide'}`}
                               onClick={nextGame}>Következő játék
          </button>}
          <button className={`btn ${(showDescription || showNextButton || finished) && 'hide'}`}
                  onClick={startGame}>Feladom
          </button>
        </div>
      </div>
    </div>
  </>;
}

export default Puzzle3x3;
