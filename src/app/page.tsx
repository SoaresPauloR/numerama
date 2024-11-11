'use client';

import { Game } from '@/components/Game';
import Menu from '@/components/Menu';
import React, { useState } from 'react';
import InitConfig from '../interfaces/InitConfig';
import { EnumModes } from '../interfaces/Modes';

export default function Home() {
  const [menuState, setMenuState] = useState<boolean>(true);
  const [initConf, setInitConf] = useState<InitConfig>({
    methode: EnumModes['Normal'],
    newGame: false,
  });

  const middlewareInit = (selected: keyof typeof EnumModes) => {
    const ModeClass = EnumModes[selected];
    setInitConf({ ...initConf, methode: ModeClass, newGame: true });
    setMenuState(false);
  };

  return (
    <main className="flex w-full flex-col gap-4">
      <div>
        <Menu
          menuState={menuState}
          setMenuState={setMenuState}
          middlewareInit={middlewareInit}
        />
      </div>
      <div className="main">
        <Game initConf={initConf} />
      </div>
    </main>
  );
}
