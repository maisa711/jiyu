"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps{
    boardId: string
}

export const Canvas = ({boardId}: CanvasProps) => {
  return (
    <main className="border border-red-500 h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};
