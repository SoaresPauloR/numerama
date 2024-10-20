'use client';

import { Game } from '@/components/Game';
import React from 'react';

export default function Home() {
  return (
    <main className="flex w-full flex-col ps-8 pe-8 gap-4">
      <Game />
    </main>
  );
}
