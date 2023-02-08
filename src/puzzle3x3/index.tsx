import React, { useState } from "react";

import './style.css';

type Puzzle = {
  type: 'puzzle-3x3',
  picture: string,
  series: Array<number>
}

const puzzles: Array<Puzzle> = [{
  type: 'puzzle-3x3',
  picture: '/puzzle3x3.png',
  series: [9, 6, 1, 4, 7, 3, 5, 2, 8]
}]

const positions = [
  "left top",
  "center top",
  "right top",
  "left center",
  "center center",
  "center right",
  "left bottom",
  "center bottom",
  "right bottom"
];

const getBackgroundPosition = (id: number) => {
  return positions[id - 1];
}

function Puzzle3x3() {
  const [series, setSeries] = useState(puzzles[0].series);

  const moveTile = (id: number) => {
    setSeries((prev) => {
      const newSeries = [...prev];
      const index = newSeries.indexOf(id);
      const indexOfBlank = newSeries.indexOf(9);
      if (newSeries[index + 1] === 9 || newSeries[index - 1] === 9 || newSeries[index + 3] === 9 || newSeries[index - 3] === 9) {
        [newSeries[index], newSeries[indexOfBlank]] = [newSeries[indexOfBlank], newSeries[index]];
      }
      return newSeries;
    })
  }

  const checkWin = (series: Array<number>) => series.every((v, i, a) => !i || a[i - 1] <= v);

  return <div>
    <div className="puzzle-container">
      {series.map(id =>
        <div className="puzzle-image"
             style={{
               backgroundImage: id !== 9 ? `url("${puzzles[0].picture}")` : '',
               backgroundPosition: getBackgroundPosition(id)
             }}
             onClick={() => moveTile(id)}
             key={id}
        ></div>)}
    </div>
    <div>
      {checkWin(series) ? 'Nyertél' : ''}
    </div>
  </div>
}

export default Puzzle3x3;
