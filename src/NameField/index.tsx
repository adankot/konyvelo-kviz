import React, { useState } from 'react';

import './style.css';

function NameField({ setStorageName, startGame }: any) {
  const [name, setName] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  localStorage.removeItem('name');
  localStorage.removeItem('sessionId');
  localStorage.removeItem('points');

  function onNext() {
    if (name === '') {
      setShowWarning(true);
    } else {
      setStorageName(name);
      startGame();
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onNext();
    }
  };

  return <div>
    <div className='controls'>
      <div className={'NameField'}>
        {showWarning && <div className={'warning'}>Kérlek adj meg egy becenevet</div>}
        <input type='text'
               onChange={(e) => setName(e.target.value.toUpperCase())}
               placeholder={'BECENÉV'}
               value={name}
               onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div className={'buttonHold'}>
        <button id='next-btn'
                className={`btn next-btn`}
                onClick={onNext}>Következő
        </button>
      </div>
    </div>
  </div>;
}

export default NameField;
