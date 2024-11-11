'use client';

import { Game } from '@/components/Game';
import Menu from '@/components/Menu';
import React, { useState } from 'react';
import InitConfig from '../interfaces/InitConfig';
import { Normal } from '../interfaces/Modes';

export default function Home() {
  const [menuState, setMenuState] = useState<boolean>(true);
  const [initConf, setInitConf] = useState<InitConfig>({
    methode: new Normal(),
    newGame: false,
  });

  const handleConfig = (newConfig: InitConfig) => {
    setInitConf(newConfig);
  };

  return (
    <main className="flex w-full flex-col gap-4">
      <div>
        <Menu
          menuState={menuState}
          setMenuState={setMenuState}
          newGame={() => handleConfig({ ...initConf, newGame: true })}
        />
      </div>
      <div className="main">
        <Game initConf={initConf} />
      </div>
    </main>
  );
}
