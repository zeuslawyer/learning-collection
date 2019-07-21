import React from 'react';
import StyledNightMode from './styles/StyledNightmode';

function Nightmode({ nightMode, nightmodeCallback }) {
  return (
    <StyledNightMode>
      <span> Nightmode: </span>
      <label className='switch'>
        <input
          type='checkbox'
          checked={nightMode}
          onClick={nightmodeCallback}
        />
        <span className='slider round' />
      </label>
      Nighmode!
    </StyledNightMode>
  );
}

export default Nightmode;
