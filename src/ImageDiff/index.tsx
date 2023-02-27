import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

import './style.css';

let currentStep = 0;

function ImageDiff({ game }: any) {
  const [showDescription, setShowDescription] = useState(true);
  const [actualDiff, setActualDiff] = useState(game.steps[currentStep]);
  const [diffs, setDiffs] = useState(game.steps[currentStep].diffs);
  const [showNextButton, setShowNextButton] = useState(false);

  const found = (index: number) => {
    setDiffs((prev: any) => {
      const newDiffs = [...prev];
      newDiffs[index].found = true;
      return newDiffs;
    });
  };

  function setNextStep() {
    setShowNextButton(false);
    currentStep += 1;
    setActualDiff(game.steps[currentStep]);
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
      </div> : <>
        <div className='diff-image-container'>
          {<div className='diff-image'
                style={{ backgroundImage: `url("${process.env.REACT_APP_ADMIN_URL}/${actualDiff.picture1}")` }}>
            {diffs.map((diff: any, index: number) =>
              <div className={`diff-spot${diff.found ? ' found' : ''}`}
                   style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
                   onClick={() => found(index)}
                   key={index}
              ><CheckIcon /></div>)}
          </div>}
          {<div className='diff-image'
                style={{ backgroundImage: `url("${process.env.REACT_APP_ADMIN_URL}/${actualDiff.picture2}")` }}>
            {diffs.map((diff: any, index: number) =>
              <div className={`diff-spot${diff.found ? ' found' : ''}`}
                   style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
                   onClick={() => found(index)}
                   key={index}
              ><CheckIcon /></div>
            )}
          </div>}
        </div>
        <div>Hátralévő különbségek: {diffs.filter((diff: any) => !diff.found).length}</div>
        <div className='controls'>
          <div className={'buttonHold'}>
            <button id='next-btn'
                    className={`btn next-btn ${(!showNextButton || game.steps.length === currentStep + 1) && 'hide'}`}
                    onClick={setNextStep}>Következő
            </button>
          </div>
        </div>
      </>}
  </div>;
}

export default ImageDiff;
