import React, { useState, useEffect } from 'react';

import ImageDiff from './ImageDiff';
import Puzzle3x3 from './puzzle3x3';
import Quiz from './Quiz';
import NameField from './NameField';

import './App.css';

function App() {
  const [showStartButton, setShowStartButton] = useState(true);
  const [showGameSelector, setShowGameSelector] = useState(false);
  const [showRanking, setShowRanking] = useState(false);
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [showNameField, setShowNameField] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `${process.env.REACT_APP_ADMIN_URL}/api/games`
        )
      ).json();
      if (data) {
        localStorage.setItem('games', JSON.stringify(data));
      }
      const storedGames = localStorage.getItem('games');
      if (storedGames) {
        setGames(JSON.parse(storedGames));
      }
    };

    dataFetch();
  }, []);

  function setName(name: string) {
    localStorage.setItem('name', name);
  }

  function addToRanks(type: string, name: string) {
    localStorage.setItem('ranks', '{}');
  }

  function startGame() {
    setShowStartButton(false);
    setShowNameField(false);
    setShowGameSelector(true);
  }

  function getNameField(){
    setShowStartButton(false);
    setShowNameField(true);
  }

  function onShowRanking() {
    setShowStartButton(false);
    setShowRanking(true);
  }

  function showHomePage() {
    setShowRanking(false);
    setShowStartButton(true);
    setShowGameSelector(false);
    setSelectedGame(null);
  }

  function onSetSelectedGame(game: any) {
    setShowStartButton(false);
    setShowGameSelector(false);
    setSelectedGame(game);
  }

  return (
    <div className='App'>
      <body>
      <div className='container'>
        {showNameField && <NameField startGame={startGame} setStorageName={setName} />}
        {selectedGame?.type && selectedGame.type === 'diff' && <ImageDiff game={selectedGame} />}
        {selectedGame?.type && (['quiz-2', 'quiz-3', 'quiz-4'].includes(selectedGame.type)) && <Quiz game={selectedGame} />}
        {selectedGame?.type && selectedGame.type === 'puzzle' && <Puzzle3x3 game={selectedGame} />}
        {selectedGame !== null && <div className={'buttonHold'}>
          <button id='start-btn' className={`btn start-btn`}
                  onClick={showHomePage}>Vissza
          </button>
        </div>}
        <div className={`main-page ${!showStartButton && 'hide'}`}>
          <div className='title'>solium regni</div>
          <div className={'buttonHold'}>
            <button id='start-btn' className={`btn start-btn ${!showStartButton && 'hide'}`}
                    onClick={getNameField}>Kezdés
            </button>
          </div>
          <div className={'buttonHold'}>
            <button id='start-btn' className={`btn start-btn ${!showStartButton && 'hide'}`}
                    onClick={onShowRanking}>Ragsor
            </button>
          </div>
        </div>
        <div className={`main-page ${!showRanking && 'hide'}`}>
          <div className='title'>Rangsor</div>
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
            <button id='start-btn' className={`btn start-btn`}
                    onClick={showHomePage}>Vissza
            </button>
          </div>
        </div>
        <div className={`main-page ${!showGameSelector && 'hide'}`}>
          <div className='title'>Válassz játékot</div>
          {games.map((game: any) =>
            <div className={'buttonHold'}>
              <button id='start-btn' className={`btn start-btn`}
                      onClick={() => onSetSelectedGame(game)}>{game.label}
              </button>
            </div>
          )}
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
