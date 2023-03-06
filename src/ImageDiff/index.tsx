import React, { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

import './style.css';

let currentStep = 0;

function ImageDiff({ game, savePoints, onShowRanking, startGame, nextGame }: any) {
  const Game = { ...game };
  const [showDescription, setShowDescription] = useState(true);
  const [actualDiff, setActualDiff] = useState(Game.steps[currentStep]);
  const [diffs, setDiffs] = useState(Game.steps[currentStep].diffs);
  const [showNextButton, setShowNextButton] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [finished, setFinished] = useState(false);
  const [helpIndex, setHelpIndex] = useState(-1);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent((oldTimeSpent: number) => showDescription || showNextButton ? oldTimeSpent : oldTimeSpent + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [showDescription, showNextButton]);

  const found = (index: number) => {
    setHelpIndex(-1);
    setDiffs((prev: any) => {
      const newDiffs = [...prev];
      newDiffs[index].found = true;
      if (newDiffs.every((diff: any) => diff.found)) setShowNextButton(true);
      return newDiffs;
    });
  };

  useEffect(() => {
    if (endTime) {
      const response = savePoints(game.type, endTime);
      setIsTop(response);
    }
    Game.steps.forEach((step: any) => {
      step.diffs.forEach((diff: any) => diff.found = false);
    });
  }, [endTime]);

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
      setActualDiff(Game.steps[currentStep]);
      setDiffs(Game.steps[currentStep].diffs || []);
    }
  }

  function getHelp() {
    if (helpIndex > -1) return;
    setTimeSpent((oldTimeSpent: number) => oldTimeSpent + 30);
    setHelpIndex(() => {
      const indexOfNotFound = diffs.findIndex((diff: any) => {
        return !diff.found;
      });
      return indexOfNotFound;
    });
  }

  return <div>
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
    {!finished && !showDescription && <div className={'diff-container'}>
      <div className='diff-image-container'>
        {<div className='diff-image'
              style={{ backgroundImage: `url("${process.env.REACT_APP_ADMIN_URL}${actualDiff.picture1}")` }}>
          {diffs.map((diff: any, index: number) => <>
            {helpIndex === index && <div
              className={'diff-spot-help'}
              style={{ left: `calc(${diff.x}% - 25px)`, top: `calc(${diff.y}% - 25px)` }}
              key={`diff-spot-help-${index}`}
            />}
            <div className={`diff-spot${diff.found ? ' found' : ''}`}
                 style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
                 onClick={() => found(index)}
                 key={`diff-spot-${index}`}
            ><CheckIcon /></div>
          </>)}
        </div>}
        {<div className='diff-image'
              style={{ backgroundImage: `url("${process.env.REACT_APP_ADMIN_URL}${actualDiff.picture2}")` }}>
          {diffs.map((diff: any, index: number) => <>
              {helpIndex === index && <div
                className={'diff-spot-help'}
                style={{ left: `calc(${diff.x}% - 25px)`, top: `calc(${diff.y}% - 25px)` }}
                key={`diff-spot-help-${index}`}
              />}
              <div className={`diff-spot${diff.found ? ' found' : ''}`}
                   style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
                   onClick={() => found(index)}
                   key={index}
              ><CheckIcon /></div>
            </>
          )}
        </div>}
      </div>
      <div className={'DiffGameInfoBox'}>
        <div className={'DiffGameInfoStepsLeft'}>
          Hátralévő különbségek: {diffs.filter((diff: any) => !diff.found).length}</div>
        <div className={'DiffGameInfoFaults'}>Eltelt idő: {timeSpent}</div>
      </div>
    </div>}
    {finished && <div className={'GameSummary'}>
      {isTop && <h5>Gratulálunk felkerültél a toplistára!</h5>}
      <h1>Idő: {endTime}</h1>
    </div>}
    <div className='controls'>
      <div className={'buttonHold diff-button-hold'}>
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
        <div className={`diff-help-button-container ${(showDescription || showNextButton || finished) && 'hide'}`}>
          <button className={'btn'}
                  onClick={getHelp}><span>Segítség</span><br />
          </button>
          <span className={'help-small-text'}>(+30 másodperc)</span>
        </div>
        <button className={`btn diff-surrender ${(showDescription || showNextButton || finished) && 'hide'}`}
                onClick={startGame}>Feladom
        </button>
      </div>
    </div>
  </div>;
}

export default ImageDiff;
