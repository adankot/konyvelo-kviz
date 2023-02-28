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
}

let currentStep = 0;

function Puzzle3x3({ game, savePoints, onShowRanking, startGame }: any) {
  const [series, setSeries] = useState(game.steps[0].series);
  const [picture, setPicture] = useState(game.steps[0].picture);
  const [div, setDiv] = useState(game.steps[0].div);
  const [showDescription, setShowDescription] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [timespent, setTimespent] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [finished, setFinished] = useState(false);

  function setNextStep() {
    if (currentStep + 1 === game.steps.length) {
      setFinished(true);
      setEndTime(timespent);
      setShowNextButton(false);
    } else {
      setShowNextButton(false);
      currentStep += 1;
      setPicture(game.steps[currentStep].picture);
      setSeries(game.steps[currentStep].series || []);
      setDiv(game.steps[currentStep].div)
    }
  }

  useEffect(() => {
    savePoints(game.type, endTime);
  }, [endTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimespent((oldTimespent: number) => oldTimespent + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
      </div>}
    {!showDescription && !finished && <>
      <div className='puzzle-container' style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${div}, auto)`,
        gap: '5px',
        margin: 'auto',
      }}>
        {series.map((id: number) =>
          <div className='puzzle-image'
               style={{
                 backgroundImage: id !== lastNumbers[div] ? `url("${process.env.REACT_APP_ADMIN_URL}/${picture}")` : '',
                 backgroundPosition: getBackgroundPosition(id, div),
                 height: `${600 / div}px`,
                 width: `${600 / div}px`
               }}
               onClick={() => moveTile(id, div)}
               key={id}
          ></div>)}
      </div>
      <div className={'PuzzleGameInfoBox'}>
        <div className={'PuzzleGameInfoTime'}>Eltelt idő: {timespent}</div>
      </div>
    </>}
    <div>
      {finished && <div className={'GameSummary'}>
        <h5>Gratulálunk felkerültél a toplistára!</h5>
        <h1>Idő: {endTime}</h1>
      </div>}
      <div className='controls'>
        <div className={'buttonHold'}>
          <button className={`btn ${(!showNextButton) && 'hide'}`}
                  onClick={setNextStep}>Tovább
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
  </>;
}

export default Puzzle3x3;
