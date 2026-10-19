"use client";

import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";
import { useCallback, useState } from "react";

export default function PalettePanel() {
  // ——— 1.Hooks —————————————————————————————————
  // useState
  const [triggerPalette, setTriggerPalette] = useState(false);

  // useCallback
  const handleTriggerPalette = useCallback(() => {
    setTriggerPalette(!triggerPalette);
  }, [triggerPalette]);

  return (
    <>
      <div
        className={cn(
          "fixed w-60 h-60 z-50 right-0 top-1/2 transform -translate-y-1/2 ",
          "flex [] items-center gap-2 pr-1 transition-transform duration-300 ",
          triggerPalette
            ? "transform translate-x-0"
            : "transform translate-x-50",
        )}
      >
        {/* Trigger */}
        <button
          onClick={handleTriggerPalette}
          className=" w-10 h-10 cursor-pointer bg-background flex justify-center items-center"
        >
          <Palette className="text-foreground" />
        </button>

        {/* Pallete Panel */}
        <div className="bg-background w-full h-full">
          
        </div>
      </div>
    </>
  );
}
