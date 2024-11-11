import MenuProps from '@/types/MenuProps';
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Menu = ({ menuState, setMenuState, newGame }: MenuProps) => {
  const handleNewGame = () => {
    setMenuState(false);
    newGame();
  };

  return menuState ? (
    <div className="menu">
      <div className="title">Numerama</div>
      <div className="menu-buttons">
        <button className="menu-button" onClick={handleNewGame}>
          New Game
        </button>
        <button className="menu-button" onClick={() => setMenuState(false)}>
          Continue
        </button>
        <button className="menu-button" onClick={() => alert('Instructiins')}>
          Instructions
        </button>
        <button className="menu-button" onClick={() => alert('Eu quem fiz')}>
          Credits
        </button>
      </div>
    </div>
  ) : (
    <nav className="nav">
      <FaBars onClick={() => setMenuState(true)} size={40} />
      <h1 className="nav-title">Numerama</h1>
    </nav>
  );
};

export default Menu;
