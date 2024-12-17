'use client';

import { Game } from '@/components/Game';
import Menu from '@/components/Menu';
import React, { useState } from 'react';
import InitConfig from '../interfaces/InitConfig';
import { EnumModes } from '../interfaces/Modes';

export default function Home() {
  const [menuState, setMenuState] = useState<boolean>(true);
  const [initConf, setInitConf] = useState<InitConfig>({
    method: EnumModes['Normal'],
    newGame: false,
  });

  const middlewareInit = (selected: keyof typeof EnumModes) => {
    const ModeClass = EnumModes[selected];
    setInitConf({ ...initConf, method: ModeClass, newGame: true });
    setMenuState(false);
  };

  return (
    <main className="flex w-full flex-col">
      <div>
        <Menu
          menuState={menuState}
          setMenuState={setMenuState}
          middlewareInit={middlewareInit}
        />
      </div>
      <div onClick={() => setMenuState(false)} className="main">
        <Game initConf={initConf} />
      </div>
    </main>
  );
}
