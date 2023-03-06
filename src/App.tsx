import React, { useState, useEffect } from 'react';

import ImageDiff from './ImageDiff';
import Puzzle3x3 from './puzzle3x3';
import Quiz from './Quiz';
import NameField from './NameField';
import Rankings from './Rankings';

import FullscreenIcon from '@mui/icons-material/Fullscreen';

import './App.css';

const difficulties: any = {
  'könnyű': 'Fegyverhodozó',
  'közepes': 'Harcos',
  'nehéz': 'Lovag'
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
  const [showReward, setShowReward] = useState(false);
  const [coupon, setCoupon] = useState<any>(null);

  useEffect(() => {
    const dataFetch = async () => {
      const { data } = await (
        await fetch(
          `${process.env.REACT_APP_ADMIN_URL}/api/jatek/load-games`
        )
      ).json();
      if (data) {
        localStorage.setItem('games', JSON.stringify(data));
      }
      const storedGames = localStorage.getItem('games');
      if (storedGames) {
        setGames(JSON.parse(storedGames));
      }
      const { data: gratData } = await (
        await fetch(
          `${process.env.REACT_APP_ADMIN_URL}/api/gratulacios-oldal?populate%5B0%5D=Kupon`
        )
      ).json();
      if (gratData) {
        localStorage.setItem('coupon', JSON.stringify(gratData.attributes));
      }
      const storedCoupon = localStorage.getItem('coupon');
      if (storedCoupon) {
        setCoupon(JSON.parse(storedCoupon));
      }

    };

    dataFetch();
  }, []);

  function setName(name: string) {
    localStorage.setItem('name', name);
  }

  function addToRanks(type: string, points: number) {
    const name: string | null = localStorage.getItem('name');
    if (!name) return false;
    const rankingsString = localStorage.getItem('ranks');
    if (!rankingsString) {
      localStorage.setItem('ranks', JSON.stringify({ [type]: [{ name, points }] }));
      setShowReward(true);
      return true;
    }
    type Rank = {
      name: string,
      points: number
    }
    const rankings: { [key: string]: Array<Rank> } = JSON.parse(rankingsString);
    if (!rankings[type]) {
      localStorage.setItem('ranks', JSON.stringify({ [type]: [{ name, points }], ...rankings }));
      setShowReward(true);
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
    setShowReward(true);
    return true;

  }

  function savePoints(type: string, pointsGot: number) {
    const pointsAsString = localStorage.getItem('points');
    if (pointsAsString) {
      const storedPoints = JSON.parse(pointsAsString);
      localStorage.setItem('points', JSON.stringify({ [type]: pointsGot, ...storedPoints }));
      setPoints({ [type]: pointsGot, ...storedPoints });
    } else {
      localStorage.setItem('points', JSON.stringify({ [type]: pointsGot }));
      setPoints({ [type]: pointsGot });
    }
    return addToRanks(type, pointsGot);
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
          {showNameField && <NameField startGame={startGame} setStorageName={setName} />}
          {selectedGame?.type && selectedGame.type === 'diff' &&
            <ImageDiff
              game={{ ...selectedGame }}
              savePoints={savePoints}
              onShowRanking={onShowRanking}
              startGame={startGame}
              nextGame={getNextGameFunction()}
            />}
          {selectedGame?.type && (['quiz-2', 'quiz-3', 'quiz-4'].includes(selectedGame.type)) &&
            <Quiz
              game={{ ...selectedGame }}
              savePoints={savePoints}
              onShowRanking={onShowRanking}
              startGame={startGame}
              nextGame={getNextGameFunction()}
            />}
          {selectedGame?.type && selectedGame.type === 'puzzle' &&
            <Puzzle3x3
              game={{ ...selectedGame }}
              savePoints={savePoints}
              onShowRanking={onShowRanking}
              startGame={startGame}
              nextGame={getNextGameFunction()}
            />}
          {showRanking && <Rankings showHomePage={showHomePage} rankingType={showRanking} isReward={showReward} />}
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
      </div>
    </div>
  );
}

export default App;
