import NewGameButtonProps from '@/types/NewGameButtonProps';
import React from 'react';

const NewGameButton = ({ setMenuState }: NewGameButtonProps) => {
  return (
    <button onClick={() => setMenuState(true)} className="">
      Menu
    </button>
  );
};

export default NewGameButton;
