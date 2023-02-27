import React, { useState } from 'react';

import './style.css';
const positions = [
  'left top',
  'center top',
  'right top',
  'left center',
  'center center',
  'center right',
  'left bottom',
  'center bottom',
  'right bottom'
];

const getBackgroundPosition = (id: number) => {
  return positions[id - 1];
};

function Puzzle3x3({ game }: any) {
  const [series, setSeries] = useState(game.steps[0].series);
  const [showDescription, setShowDescription] = useState(true);

  const moveTile = (id: number) => {
    setSeries((prev: any) => {
      const newSeries = [...prev];
      const index = newSeries.indexOf(id);
      const indexOfBlank = newSeries.indexOf(9);
      if (newSeries[index + 1] === 9 || newSeries[index - 1] === 9 || newSeries[index + 3] === 9 || newSeries[index - 3] === 9) {
        [newSeries[index], newSeries[indexOfBlank]] = [newSeries[indexOfBlank], newSeries[index]];
      }
      return newSeries;
    });
  };

  const checkWin = (series: Array<number>) => series.every((v, i, a) => !i || a[i - 1] <= v);

  return <>
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
        <div className='puzzle-container'>
          {series.map((id: number) =>
            <div className='puzzle-image'
                 style={{
                   backgroundImage: id !== 9 ? `url("${process.env.REACT_APP_ADMIN_URL}/${game.steps[0].picture}")` : '',
                   backgroundPosition: getBackgroundPosition(id)
                 }}
                 onClick={() => moveTile(id)}
                 key={id}
            ></div>)}
        </div>
        <div>
          {checkWin(series) ? 'Nyertél' : ''}
        </div>
      </>}
  </>;
}

export default Puzzle3x3;
