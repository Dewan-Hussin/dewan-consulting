"use client";

import { cn } from "@/lib/utils";
import { Check, Palette, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const webColors = [
  { label: "Red color theme", mainColor: "#6A1823", secColor: "#C3DECE" },
  { label: "Green color theme", mainColor: "#0D530E", secColor: "#E7E1B1" },
  { label: "Blue color theme", mainColor: "#0D47A1", secColor: "#53CBF3" },
  {
    label: "Dark green color theme",
    mainColor: "#1b2726",
    secColor: "#b2c5b3",
  },
  {
    label: "Dark beige color theme",
    mainColor: "#272522",
    secColor: "#e6d7b2",
  },
];

export default function PalettePanel() {
  const [triggerPalette, setTriggerPalette] = useState(false);

  const [sMainColor, setSmainColor] = useState("");
  const [sSecColor, setSsecColor] = useState("");

  // —————————————— handle trigger palette ——————————————
  const handleTriggerPalette = useCallback(() => {
    setTriggerPalette((prev) => !prev);
  }, []);

  // —————————————— get saved colors ——————————————
  useEffect(() => {
    const savedMainColor = localStorage.getItem("--color-main");
    const savedSecColor = localStorage.getItem("--color-second");

    if (savedMainColor) {
      setSmainColor(savedMainColor);
      document.documentElement.style.setProperty(
        "--color-main",
        savedMainColor,
      );
    }

    if (savedSecColor) {
      setSsecColor(savedSecColor);
      document.documentElement.style.setProperty(
        "--color-second",
        savedSecColor,
      );
    }
  }, []);

  // —————————————— handle color click ——————————————
  const handleColorClick = useCallback(
    (mainColor: string, secColor: string) => {
      const root = document.documentElement;

      root.style.setProperty("--color-main", mainColor);
      root.style.setProperty("--color-second", secColor);

      localStorage.setItem("--color-main", mainColor);
      localStorage.setItem("--color-second", secColor);

      setSmainColor(mainColor);
      setSsecColor(secColor);
    },
    [],
  );

  // —————————————— handle click outside ——————————————
  const paletteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!triggerPalette) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        paletteRef.current &&
        !paletteRef.current.contains(e.target as Node)
      ) {
        setTriggerPalette(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [triggerPalette]);

  return (
    <div
      ref={paletteRef}
      className={cn(
        "fixed right-0 top-1/2 z-50 flex w-60 -translate-y-1/2 items-center gap-2 pr-1 transition-transform duration-300",
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
        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md bg-main text-white shadow-2xl shadow-second"
      >
        {triggerPalette ? <X size={20} /> : <Palette size={20} />}
      </button>

      {/* Palette Panel */}
      <div className="h-1/2 min-w-0 flex-1 rounded-lg border bg-background p-3 shadow-lg">
        <div>
          <h3 className="border-b border-black/50 py-3 text-center text-sm font-semibold text-black">
            Website Colors
          </h3>

          <ul className="grid grid-cols-3 gap-2 px-2 py-3">
            {webColors.map(({ label, mainColor, secColor }, idx) => (
              <li
                key={`${idx} - ${label}`}
                className={cn(
                  "h-10 rounded-md transition-all duration-150",
                  sMainColor === mainColor && "border p-1",
                )}
                style={{ borderColor: mainColor }}
              >
                <button
                  type="button"
                  onClick={() => handleColorClick(mainColor, secColor)}
                  className={cn(
                    "h-full w-full cursor-pointer rounded-md  text-white",
                    "flex items-center justify-center",
                  )}
                  style={{ backgroundColor: mainColor }}
                  aria-label={label}
                >
                  {sMainColor === mainColor &&  <Check size={20} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
