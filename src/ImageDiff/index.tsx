import React, { useState } from "react";

import './style.css';

type ImageDiffType = {
  type: 'diff',
  picture1: string,
  picture2: string,
  diffs: Array<{ x: number, y: number, found: boolean }>;
}

const imageDiffs: Array<ImageDiffType> = [{
  type: 'diff',
  picture1: 'https://cdn.erettsegi.com/wp-content/uploads/2020/07/9krjmmlspqw-1200x628.jpg',
  picture2: 'https://cdn.erettsegi.com/wp-content/uploads/2020/07/9krjmmlspqw-1200x628.jpg',
  diffs: [
    { x: 20, y: 40, found: false },
    { x: 60, y: 15, found: false }
  ]
}]

function ImageDiff() {
  const [actualDiff, setActualDiff] = useState(imageDiffs[0]);
  const [diffs, setDiffs] = useState(imageDiffs[0].diffs);

  const found = (index: number) => {
    setDiffs((prev) => {
      const newDiffs = [...prev];
      newDiffs[index].found = true
      return newDiffs;
    })
  }

  return <div>
    <div className="diff-image-container">
      {<div className="diff-image" style={{ backgroundImage: `url("${actualDiff.picture1}")` }}>
        {diffs.map((diff, index) =>
          <div className={`diff-spot${diff.found ? ' found' : ''}`}
               style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
               onClick={() => found(index)}
               key={index}
          />)}
      </div>}
      {<div className="diff-image" style={{ backgroundImage: `url("${actualDiff.picture2}")` }}>
        {diffs.map((diff, index) =>
          <div className={`diff-spot${diff.found ? ' found' : ''}`}
               style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
               onClick={() => found(index)}
               key={index}
          />
        )}
      </div>}
    </div>
    <div>Hátralévő különbségek: {diffs.filter(diff => !diff.found).length}</div>
  </div>
}

export default ImageDiff;
