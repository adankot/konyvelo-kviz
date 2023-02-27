import React, { useState } from 'react';

import './style.css';

function NameField({ setStorageName, startGame }: any) {
  const [name, setName] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  localStorage.removeItem('name');

  function onNext() {
    if (name === '') {
      setShowWarning(true);
    } else {
      setStorageName(name);
      startGame();
    }
  }

  return <div>
    <div className='controls'>
      <div className={'NameField'}>
        {showWarning && <div className={'warning'}>Kérlek adj meg egy becenevet</div>}
        <input type='text'
               onChange={(e) => setName(e.target.value.toUpperCase())}
               placeholder={'BECENÉV'}
               value={name}
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
