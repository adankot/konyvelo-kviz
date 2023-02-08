import React, { useState } from 'react';

import ImageDiff from "./ImageDiff";
import Puzzle3x3 from "./puzzle3x3";
import Quiz2 from "./Quiz2";

import './App.css';

function App() {
  const [showStartButton, setShowStartButton] = useState(true);
  const [showGameSelector, setShowGameSelector] = useState(false);
  const [showRanking, setShowRanking] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');

  function startGame() {
    setShowStartButton(false);
    setShowGameSelector(true);
  }

  function onShowRanking() {
    setShowStartButton(false);
    setShowRanking(true);
  }

  function showHomePage() {
    setShowRanking(false);
    setShowStartButton(true);
    setShowGameSelector(false);
    setSelectedGame('');
  }

  function onSetSelectedGame(type: string) {
    setShowStartButton(false);
    setShowGameSelector(false);
    setSelectedGame(type);
  }

  return (
    <div className="App">
      <body>
      <div className="container">
        {selectedGame === 'diff' && <ImageDiff />}
        {selectedGame === 'quiz' && <Quiz2 />}
        {selectedGame === 'puzzle' && <Puzzle3x3 />}
        { selectedGame !== '' && <div className={'buttonHold'}>
          <button id="start-btn" className={`btn start-btn`}
                  onClick={showHomePage}>Vissza
          </button>
        </div>}
        <div className={`main-page ${!showStartButton && 'hide'}`}>
          <div className="title">solium regni</div>
          <div className={'buttonHold'}>
            <button id="start-btn" className={`btn start-btn ${!showStartButton && 'hide'}`}
                    onClick={startGame}>Kezdés
            </button>
          </div>
          <div className={'buttonHold'}>
            <button id="start-btn" className={`btn start-btn ${!showStartButton && 'hide'}`}
                    onClick={onShowRanking}>Ragsor
            </button>
          </div>
        </div>
        <div className={`main-page ${!showRanking && 'hide'}`}>
          <div className="title">Rangsor</div>
          <div className={'rankings-container'}>
            1. AAASSSDDD<br />
            2. AAASSSDDD<br />
            3. AAASSSDDD<br />
            4. AAASSSDDD<br />
            5. AAASSSDDD<br />
            6. AAASSSDDD<br />
            7. AAASSSDDD<br />
            8. AAASSSDDD<br />
          </div>
          <div className={'buttonHold'}>
            <button id="start-btn" className={`btn start-btn`}
                    onClick={showHomePage}>Vissza
            </button>
          </div>
        </div>
        <div className={`main-page ${!showGameSelector && 'hide'}`}>
          <div className="title">Válassz játékot</div>
          <div className={'buttonHold'}>
            <button id="start-btn" className={`btn start-btn`}
                    onClick={() => onSetSelectedGame('quiz')}>Quiz
            </button>
          </div>
          <div className={'buttonHold'}>
            <button id="start-btn" className={`btn start-btn`}
                    onClick={() => onSetSelectedGame('diff')}>Különbség kereső
            </button>
          </div>
          <div className={'buttonHold'}>
            <button id="start-btn" className={`btn start-btn`}
                    onClick={() => onSetSelectedGame('puzzle')}>Puzzle
            </button>
          </div>
          <div className={'buttonHold'}>
            <button id="start-btn" className={`btn start-btn`}
                    onClick={showHomePage}>Vissza
            </button>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
