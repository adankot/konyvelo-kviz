import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';

import FullscreenIcon from '@mui/icons-material/Fullscreen';

import './App.css';

function App2() {
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
  const [selectedGame, setSelectedGame] = useState<any>({
    type: 'quiz-4',
    questions: [
      {
        question: 'Melyik a legnagyobb sziget?',
        answers: [
          { answer: 'Ausztrália', correct: false },
          { answer: 'Grönland', correct: true },
          { answer: 'Madagaszkár', correct: false },
          { answer: 'Új-Zéland', correct: false },
        ],
      }
    ],
  });
  const [games, setGames] = useState([]);
  const [points, setPoints] = useState<any>({});
  const [showReward, setShowReward] = useState(false);
  const [coupon, setCoupon] = useState<any>(null);

  function startGame() {
    setShowStartButton(false);
    setSelectedGame(null);
    setShowGameSelector(true);
  }

  function getNameField() {
    setPoints({});
    setShowStartButton(false);
  }

  function onShowRanking(type: string) {
    setShowStartButton(false);
    setSelectedGame(null);
    setShowRanking(type);
  }

  function showHomePage() {
    setShowRanking(false);
    setShowGameSelector(false);
    setSelectedGame(null);
    setShowStartButton(true);
  }

  function onSetSelectedGame(game: any) {
    setShowStartButton(false);
    setShowGameSelector(false);
    setSelectedGame(game);
  }

  function getNextGameFunction() {
    const gameTypes = games.map((game: any) => game.type);
    const playedGames = Object.keys(points);

    const gamesLeft = gameTypes.filter((gameType: string) => !playedGames.includes(gameType));
    if (gamesLeft.length > 0) {
      return () => {
        setSelectedGame(games.find((game: any) => game.type === gamesLeft[0]));
      };
    }
    return false;
  }

  return (
    <div className='App'>
      <div className={'body'}>
        {!isFullscreen && <div className={'fs-button-container'} onClick={fullScreen}>
          <FullscreenIcon fontSize={'inherit'} />
        </div>}
        <div className='container'>
          {selectedGame?.type && (['quiz-2', 'quiz-3', 'quiz-4'].includes(selectedGame.type)) &&
            <Quiz
              game={{ ...selectedGame }}
              onShowRanking={onShowRanking}
              startGame={startGame}
              nextGame={getNextGameFunction()}
            />}
          {showReward && !showRanking && !selectedGame && !showGameSelector && <div className={'reward-page'}>
            <div className={'reward-title'}>
              {coupon.Cim}
            </div>
            <div className={'reward-image'}>
              {coupon?.Kupon?.data?.attributes?.url &&
                <img src={`${process.env.REACT_APP_ADMIN_URL}${coupon.Kupon.data.attributes.url}`} />}
            </div>
            <div className={'reward-text'}>
              {coupon.Leiras}
            </div>
            <button className={'btn'} onClick={() => setShowReward(false)}>Köszönöm</button>
          </div>}
          {showStartButton && !showReward && <div className={`main-page`}>
            <div className='title-logo'><img src='/title-logo.svg' alt='LOGO' /></div>
            <div className='title-art'><img src='/art_board.png' alt='LOGO' /></div>
            <div className={'title-controls'}>
              <button id='start-btn' className={`btn start-btn`}
                      onClick={getNameField}>Kezdés
              </button>
              <button id='start-btn' className={`btn start-btn`}
                      onClick={() => onShowRanking('quiz-2')}>Rangsor
              </button>
            </div>
          </div>}
          <div className={`main-page ${!showGameSelector && 'hide'}`}>
            <div className='title'>Válassz játékot</div>
            {games.map((game: any) =>
              <div className={'buttonHold'} key={game.type}>
                <div className={`btn start-btn gameChooser`}
                     onClick={() => onSetSelectedGame({ ...game })}>
                  <span className={'gameChooserLabel'}>{game.label}</span>
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
      </div>
    </div>
  );
}

export default App2;
