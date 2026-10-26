"use client";

import { cn } from "@/lib/utils";
import { Palette, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";

export default function PalettePanel() {
  const [triggerPalette, setTriggerPalette] = useState(false);

  const handleTriggerPalette = useCallback(() => {
    setTriggerPalette((prev) => !prev);
  }, []);

  // —————————————— Test ——————————————

  const handleColorClick = (mainColor: string, secColor: string) => {
    const root = document.documentElement;
    root.style.setProperty("--color-main", mainColor);
    root.style.setProperty("--color-second", secColor);

    // console.log(redRef.current);
  };
  // —————————————— #### ——————————————

  return (
    <div
      className={cn(
        "fixed right-0 top-1/2 z-50 flex h-60 w-60 -translate-y-1/2 items-center gap-2 pr-1 transition-transform duration-300",
        !triggerPalette && "translate-x-[calc(100%-3rem)]",
      )}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={handleTriggerPalette}
        aria-label={
          triggerPalette ? "Close palette panel" : "Open palette panel"
        }
        aria-expanded={triggerPalette}
        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md bg-background text-foreground shadow-md"
      >
        {triggerPalette ? <X size={20} /> : <Palette size={20} />}
      </button>

      {/* Palette Panel */}
      <div className="h-1/2 min-w-0 flex-1 rounded-lg border bg-background p-3 shadow-lg">
        {/* Add palette settings here */}
        <div>
          <h3 className="text-black font-semibold text-sm text-center border-b border-black/50 py-3 ">
            Website Colors
          </h3>
          <ul className="py-3 px-2 grid grid-cols-3 gap-2">
            <li className="bg-amber-100 flex items-center justify-center">
              <button
                onClick={() => handleColorClick("#6A1823", "#C3DECE")}
                className="cursor-pointer bg-red-900 w-full h-full text-white"
              >
                .
              </button>
            </li>
            <li className="bg-amber-100 flex items-center justify-center">
              <button
                onClick={() => handleColorClick("#0D530E", "#E7E1B1")}
                className="cursor-pointer bg-green-900 w-full h-full text-white"
              ></button>
            </li>
            <li className="bg-amber-100 flex items-center justify-center">
              <button
                onClick={() => handleColorClick("#0D47A1", "#53CBF3")}
                className="cursor-pointer bg-blue-900 w-full h-full text-white"
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
