import React, { useState } from 'react';
import Quiz from './Quiz';
import steps, { Question } from './data/questions';

import './App.css';

function pickRandomObjects(array: Array<Question>, count: number) {
  if (count >= array.length) {
    return array;
  }

  const shuffledArray = array.slice(); // Create a copy of the original array
  const pickedObjects = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * shuffledArray.length);
    const randomObject = shuffledArray.splice(randomIndex, 1)[0];
    pickedObjects.push(randomObject);
  }

  return pickedObjects;
}

function shuffle(array: Array<any>) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function App() {
  const [selectedGame, setSelectedGame] = useState<any>({
    type: 'quiz-4',
    description: 'A quiz game to help you prepare for the AWS Certified Developer Associate exam. It always contains 10 questions, and you have 45 minutes to answer them. You get points for the remaining time. Good luck!',
    timeLimit: 45,
    steps: steps
  });
  const [running, setRunning] = useState(false);

  function startGame() {
    setSelectedGame({
      type: 'quiz-4',
      description: 'Ez egy kvíz ami segít felkészülni a könyvelői vizsgára. Mindig 10 kérdés van, és 45 másodperced van válaszolni. A megmaradt időért pontokat kapsz. Sok sikert!',
      timeLimit: 45,
      steps: pickRandomObjects(steps, 10).map(step => ({
        ...step,
        answers: shuffle(step.answers)
      }))
    });
    setRunning(true);
  }

  return (
    <div className='App'>
      <div className={'body'}>
        <div className='container'>
          {!running && <div className='main-page'>
            <div className={'title'}>
              Könyvelöi vizsga kvíz
            </div>
            <div className={'title-controls'}>
              <div className='btn' onClick={startGame}> Kezdés</div>
            </div>
          </div>}
          {running && <Quiz
            game={selectedGame}
            startGame={() => setRunning(false)}
          />}
        </div>
      </div>
    </div>
  );
}

export default App;
