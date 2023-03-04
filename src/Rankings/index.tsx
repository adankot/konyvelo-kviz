import React, { useEffect, useState } from 'react';

import './style.css';

function Rankings({ showHomePage, rankingType }: any) {
  const [type, setType] = useState(rankingType || 'quiz-2');
  const [rankings, setRankings] = useState<any>({});
  useEffect(() => {
    const rankingString = localStorage.getItem('ranks');
    if (rankingString) setRankings(JSON.parse(rankingString));
  }, []);

  return (<div>
    <div className='rankings-title'>Rangsor</div>
    <div className={'rankings-menu'}>
      <div className={`rankings-menu-item ${type === 'quiz-2' ? 'selected' : ''}`} onClick={() => setType('quiz-2')}>Igaz/Hamis</div>|
      <div className={`rankings-menu-item ${type === 'quiz-3' ? 'selected' : ''}`} onClick={() => setType('quiz-3')}>Kvíz 3</div>|
      <div className={`rankings-menu-item ${type === 'quiz-4' ? 'selected' : ''}`} onClick={() => setType('quiz-4')}>Kvíz 4</div>|
      <div className={`rankings-menu-item ${type === 'diff' ? 'selected' : ''}`} onClick={() => setType('diff')}>Különbség kereső</div>|
      <div className={`rankings-menu-item ${type === 'puzzle' ? 'selected' : ''}`} onClick={() => setType('puzzle')}>Puzzle</div>
    </div>
    <div className={'rankings-container'}>
      {rankings[type] && rankings[type].map((ppl: any, index: number) =>
        <div className={'rankLine'}>{index + 1}. {ppl.name} - {ppl.points}</div>
      )}
    </div>
    <div className={'buttonHold'}>
      <button className={`btn`}
              onClick={showHomePage}>Vissza
      </button>
    </div>
  </div>);
}

export default Rankings;
