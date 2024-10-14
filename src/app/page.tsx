'use client';

import { Game } from "@/components/Game";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-12">
      Numerama

      <Game />
    </main>
  );
}
