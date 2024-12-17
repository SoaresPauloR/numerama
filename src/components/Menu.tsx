import MenuProps from '@/types/MenuProps';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import NewGameButton from './NewGameButton';

const Menu = ({ menuState, setMenuState, middlewareInit }: MenuProps) => {
  return (
    <>
      <div className={`menu ${menuState ? 'active' : ''}`}>
        <div className="title">Numerama</div>
        <div className="menu-buttons">
          <NewGameButton middlewareInit={middlewareInit} />

          <button
            className="menu-button"
            onClick={() => {
              setMenuState(false);
              window.scrollTo(0, 0);
            }}
          >
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

      <nav className="nav">
        <FaBars onClick={() => setMenuState(true)} size={40} />
        <h1 className="nav-title">Numerama</h1>
      </nav>
    </>
  );
};

export default Menu;
