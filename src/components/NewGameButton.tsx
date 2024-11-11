import { EnumModes } from '@/interfaces/Modes';
import NewGameButtonProps from '@/types/NewGameButtonProps';
import React, { useState } from 'react';

const NewGameButton = ({ middlewareInit }: NewGameButtonProps) => {
  const [modalState, setModalState] = useState<boolean>(false);

  let mode = 'Normal';

  const hadleStart = () => {
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
            <h2 className="modalTitle">Selecione o modo do jogo</h2>
            <select
              className="modalSelect"
              onChange={(e) => (mode = e.target.value)}
            >
              {Object.keys(EnumModes).map((mode, key) => (
                <option key={key}>{mode}</option>
              ))}
            </select>
            <button className="modalButton" onClick={hadleStart}>
              Start
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewGameButton;
