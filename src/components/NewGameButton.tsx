import { EnumModes } from '@/interfaces/Modes';
import NewGameButtonProps from '@/types/NewGameButtonProps';
import React, { useState } from 'react';
import { FaX } from 'react-icons/fa6';

const NewGameButton = ({ middlewareInit }: NewGameButtonProps) => {
  const [modalState, setModalState] = useState<boolean>(false);

  let mode = 'Normal';

  const handleStart = () => {
    setModalState(false);
    middlewareInit(mode as keyof typeof EnumModes);
  };

  return (
    <>
      <button className="menu-button" onClick={() => setModalState(true)}>
        New Game
      </button>
      {modalState && (
        <div className="modeModal">
          <div className="modalMain">
            <div className="modalTitle">
              <h2>Select the game mode</h2>
              <button onClick={() => setModalState(false)}>
                <FaX color="red" />
              </button>
            </div>
            <select
              className="modalSelect"
              onChange={(e) => (mode = e.target.value)}
            >
              {Object.keys(EnumModes).map((mode, key) => (
                <option key={key}>{mode}</option>
              ))}
            </select>
            <button className="modalButton" onClick={handleStart}>
              Start
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewGameButton;
