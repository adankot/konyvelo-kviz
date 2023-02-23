import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

import './style.css';

type ImageDiffType = {
  type: 'diff',
  picture1: string,
  picture2: string,
  diffs: Array<{ x: number, y: number, found: boolean }>;
}

const imageDiffs: Array<ImageDiffType> = [{
  type: 'diff',
  picture1: '/quiz/diff1.png',
  picture2: '/quiz/diff2.png',
  diffs: [
    { x: 33, y: 52, found: false },
    { x: 74, y: 37, found: false },
    { x: 66, y: 77, found: false },
    { x: 1, y: 81, found: false },
    { x: 8, y: 25, found: false },
    { x: 25, y: 34, found: false }
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
          ><CheckIcon /></div>)}
      </div>}
      {<div className="diff-image" style={{ backgroundImage: `url("${actualDiff.picture2}")` }}>
        {diffs.map((diff, index) =>
          <div className={`diff-spot${diff.found ? ' found' : ''}`}
               style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
               onClick={() => found(index)}
               key={index}
          ><CheckIcon /></div>
        )}
      </div>}
    </div>
    <div>Hátralévő különbségek: {diffs.filter(diff => !diff.found).length}</div>
  </div>
}

export default ImageDiff;
