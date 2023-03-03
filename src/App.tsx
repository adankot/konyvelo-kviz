import React, { useState, useEffect } from 'react';

import ImageDiff from './ImageDiff';
import Puzzle3x3 from './puzzle3x3';
import Quiz from './Quiz';
import NameField from './NameField';
import Rankings from './Rankings';

import * as serviceWorker from './serviceWorker';

import FullscreenIcon from '@mui/icons-material/Fullscreen';

import './App.css';

const difficulties: any = {
  easy: 'Fegyverhodozó',
  medium: 'Harcos',
  hard: 'Lovag'
};

function App() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  function fullScreen() {
    document.body.requestFullscreen();
  }

  const [showStartButton, setShowStartButton] = useState(true);
  const [showGameSelector, setShowGameSelector] = useState(false);
  const [showRanking, setShowRanking] = useState<boolean | string>(false);
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [showNameField, setShowNameField] = useState(false);
  const [games, setGames] = useState([]);
  const [points, setPoints] = useState<any>({});

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

  function addToRanks(type: string, points: number) {
    console.log('ranking called');
    const name: string | null = localStorage.getItem('name');
    if (!name) return false;
    const rankingsString = localStorage.getItem('ranks');
    if (!rankingsString) {
      localStorage.setItem('ranks', JSON.stringify({ [type]: [{ name, points }] }));
      return true;
    }
    type Rank = {
      name: string,
      points: number
    }
    const rankings: { [key: string]: Array<Rank> } = JSON.parse(rankingsString);
    if (!rankings[type]) {
      localStorage.setItem('ranks', JSON.stringify({ [type]: [{ name, points }], ...rankings }));
      return true;
    }
    rankings[type].push({ name, points });
    if (['diff', 'puzzle'].includes(type)) {
      rankings[type] = rankings[type].sort((a, b) => a.points - b.points);
    } else {
      rankings[type] = rankings[type].sort((a, b) => b.points - a.points);
    }
    if (rankings[type].length > 10) {
      const lastRank = rankings[type].pop();
      if (lastRank && lastRank.name === name) {
        return false;
      }
    }
    localStorage.setItem('ranks', JSON.stringify(rankings));
    return true;

  }

  function savePoints(type: string, pointsGot: number) {
    console.log('save called');
    const pointsAsString = localStorage.getItem('points');
    if (pointsAsString) {
      const storedPoints = JSON.parse(pointsAsString);
      localStorage.setItem('points', JSON.stringify({ [type]: pointsGot, ...storedPoints }));
      setPoints({ [type]: pointsGot, ...storedPoints });
    } else {
      localStorage.setItem('points', JSON.stringify({ [type]: pointsGot }));
      setPoints({ [type]: pointsGot });
    }
    addToRanks(type, pointsGot);
  }

  function startGame() {
    setShowStartButton(false);
    setShowNameField(false);
    setSelectedGame(null);
    setShowGameSelector(true);
  }

  function getNameField() {
    setPoints({});
    setShowStartButton(false);
    setShowNameField(true);
  }

  function onShowRanking(type: string) {
    setShowStartButton(false);
    setSelectedGame(null);
    setShowRanking(type);
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
      {!isFullscreen && <div className={'fs-button-container'} onClick={fullScreen}>
        <FullscreenIcon fontSize={'inherit'} />
      </div>}
      <div className='container'>
        {showNameField && <NameField startGame={startGame} setStorageName={setName} />}
        {selectedGame?.type && selectedGame.type === 'diff' &&
          <ImageDiff
            game={{ ...selectedGame }}
            savePoints={savePoints}
            onShowRanking={onShowRanking}
            startGame={startGame}
          />}
        {selectedGame?.type && (['quiz-2', 'quiz-3', 'quiz-4'].includes(selectedGame.type)) &&
          <Quiz
            game={{ ...selectedGame }}
            savePoints={savePoints}
            onShowRanking={onShowRanking}
            startGame={startGame}
          />}
        {selectedGame?.type && selectedGame.type === 'puzzle' &&
          <Puzzle3x3
            game={{ ...selectedGame }}
            savePoints={savePoints}
            onShowRanking={onShowRanking}
            startGame={startGame}
          />}
        {showRanking && <Rankings showHomePage={showHomePage} rankingType={showRanking} />}
        <div className={`main-page ${!showStartButton && 'hide'}`}>
          <div className='title-logo'><img src='/quiz/title-logo.png' /></div>
          <div className={'buttonHold'}>
            <button id='start-btn' className={`btn start-btn ${!showStartButton && 'hide'}`}
                    onClick={getNameField}>Kezdés
            </button>
          </div>
          <div className={'buttonHold'}>
            <button id='start-btn' className={`btn start-btn ${!showStartButton && 'hide'}`}
                    onClick={() => onShowRanking('quiz-2')}>Rangsor
            </button>
          </div>
        </div>
        <div className={`main-page ${!showGameSelector && 'hide'}`}>
          <div className='title'>Válassz játékot</div>
          {games.map((game: any) =>
            <div className={'buttonHold'}>
              <div className={`btn start-btn gameChooser`}
                   onClick={() => onSetSelectedGame({ ...game })}>
                <span className={'gameChooserLabel'}>{game.label}</span>
                <span className={'gameChooserDifficulty'}>Szint: {difficulties[game.difficulty]}</span>
                {points.hasOwnProperty(game.type) &&
                  <span className={'gameChooserDifficulty'}>Elért pontok: {points[game.type]}</span>}
              </div>
            </div>
          )}
          <div className={'buttonHold'}>
            <button className={`btn start-btn`}
                    onClick={showHomePage}>Vissza
            </button>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default App;
