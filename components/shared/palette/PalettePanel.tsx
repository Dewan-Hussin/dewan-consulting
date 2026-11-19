"use client";

import { cn } from "@/lib/utils";
import { Check, Moon, Palette, Sun, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────────
   Color Themes
   Each theme defines:
   • main   — the deep, authoritative brand color (navbar, headings, cards)
   • second — the softer companion (badges, tints, accents)
   • accent — a warmer or contrasting highlight (active states, CTAs)
   ──────────────────────────────────────────────────────────────── */

type ColorTheme = {
  id: string;
  name: string;
  main: string;
  second: string;
  accent: string;
};

const themes: ColorTheme[] = [
  {
    id: "midnight",
    name: "Midnight",
    main: "#1a2332",
    second: "#b0c4d8",
    accent: "#4a7a9b",
  },
  {
    id: "slate",
    name: "Slate",
    main: "#252a2e",
    second: "#c8ccd0",
    accent: "#5e7080",
  },
  {
    id: "espresso",
    name: "Espresso",
    main: "#2c2118",
    second: "#d4c5a9",
    accent: "#8b6f47",
  },
  {
    id: "burgundy",
    name: "Burgundy",
    main: "#3a1a24",
    second: "#d4b8c1",
    accent: "#8b4a5e",
  },
  {
    id: "evergreen",
    name: "Evergreen",
    main: "#1b3a34",
    second: "#a8c5b8",
    accent: "#3d8b6e",
  },
];

const STORAGE_KEY_THEME = "dewan-theme-id";
const STORAGE_KEY_MODE = "dewan-dark-mode";

const DEFAULT_THEME_ID = "midnight";

export default function PalettePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeThemeId, setActiveThemeId] = useState(DEFAULT_THEME_ID);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);

  /* ── restore persisted state on mount ─────────────────────── */
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    const savedMode = localStorage.getItem(STORAGE_KEY_MODE);

    const themeId =
      savedTheme && themes.some((t) => t.id === savedTheme)
        ? savedTheme
        : DEFAULT_THEME_ID;

    const dark = savedMode === "dark";

    setActiveThemeId(themeId);
    setIsDark(dark);

    applyTheme(themeId);
    applyMode(dark);
    setMounted(true);
  }, []);

  /* ── apply theme colors to :root ──────────────────────────── */
  const applyTheme = useCallback((themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty("--color-main", theme.main);
    root.style.setProperty("--color-second", theme.second);
    root.style.setProperty("--color-accent-brand", theme.accent);
  }, []);

  /* ── apply dark / light class ─────────────────────────────── */
  const applyMode = useCallback((dark: boolean) => {
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  /* ── handlers ─────────────────────────────────────────────── */
  const handleThemeChange = useCallback(
    (themeId: string) => {
      setActiveThemeId(themeId);
      applyTheme(themeId);
      localStorage.setItem(STORAGE_KEY_THEME, themeId);
    },
    [applyTheme],
  );

  const handleModeToggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      applyMode(next);
      localStorage.setItem(STORAGE_KEY_MODE, next ? "dark" : "light");
      return next;
    });
  }, [applyMode]);

  const togglePanel = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /* ── click outside ────────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  /* don't render anything on the server to avoid hydration mismatch */
  if (!mounted) return null;

  return (
    <div
      ref={panelRef}
      className={cn(
        "fixed top-1/2 z-60 flex -translate-y-1/2 items-stretch gap-0 transition-all duration-300 ease-out",
        "ltr:right-0 rtl:left-0",
        isOpen
          ? "ltr:translate-x-0 rtl:translate-x-0"
          : "ltr:translate-x-[calc(100%-2.75rem)] rtl:-translate-x-[calc(100%-2.75rem)]",
      )}
    >
      {/* ── Trigger Button ──────────────────────────────────── */}
      <button
        type="button"
        onClick={togglePanel}
        aria-label={isOpen ? "Close theme panel" : "Open theme panel"}
        aria-expanded={isOpen}
        className={cn(
          "relative flex h-11 w-11 shrink-0 items-center justify-center",
          "rounded-s-xl bg-main text-white shadow-lg",
          "transition-all duration-200",
          "hover:brightness-110",
          "focus-visible:ring-2 focus-visible:ring-white/50",
          "cursor-pointer",
        )}
      >
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-200",
            isOpen
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100",
          )}
        >
          <Palette size={18} />
        </span>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-200",
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0",
          )}
        >
          <X size={18} />
        </span>
      </button>

      {/* ── Panel Card ──────────────────────────────────────── */}
      <div
        className={cn(
          "w-56 overflow-hidden rounded-s-xl border border-e-0 shadow-xl",
          "transition-colors duration-200",
          isDark
            ? "border-white/10 bg-[#1a1a1a]"
            : "border-gray-200/80 bg-white",
        )}
      >
        <div className="p-4">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <h3
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.16em]",
                isDark ? "text-white/60" : "text-gray-400",
              )}
            >
              Theme
            </h3>

            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={handleModeToggle}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className={cn(
                "group cursor-pointer flex h-7 w-14 items-center rounded-full p-0.5 transition-colors duration-200",
                isDark
                  ? "bg-white/10 hover:bg-white/15"
                  : "bg-gray-100 hover:bg-gray-200",
              )}
            >
              {/* Track icons */}
              <span className="relative flex h-full w-full items-center">
                {/* Sun (left) */}
                <Sun
                  size={12}
                  className={cn(
                    "absolute left-1.5 transition-opacity duration-200",
                    isDark ? "text-white/30" : "text-amber-500 opacity-100",
                  )}
                />
                {/* Moon (right) */}
                <Moon
                  size={12}
                  className={cn(
                    "absolute right-1.5 transition-opacity duration-200",
                    isDark ? "text-blue-300 opacity-100" : "text-gray-400/50",
                  )}
                />
                {/* Thumb */}
                <span
                  className={cn(
                    "absolute h-5.5 w-5.5 rounded-full shadow-sm transition-all duration-200",
                    isDark
                      ? "translate-x-[1.65rem] bg-gray-800"
                      : "translate-x-0 bg-white",
                  )}
                />
              </span>
            </button>
          </div>

          {/* Theme list */}
          <div className="space-y-1.5">
            {themes.map((theme) => {
              const isActive = theme.id === activeThemeId;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => handleThemeChange(theme.id)}
                  aria-label={`${theme.name} color theme`}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg px-2.5 py-2",
                    "transition-all duration-150",
                    isActive
                      ? isDark
                        ? "bg-white/8"
                        : "bg-gray-50"
                      : isDark
                        ? "hover:bg-white/5"
                        : "hover:bg-gray-50/70",
                  )}
                >
                  {/* Swatch pair */}
                  <div className="flex shrink-0 gap-0.5">
                    <span
                      className="h-7 w-5 rounded-s-md shadow-sm ring-1 ring-black/10"
                      style={{ backgroundColor: theme.main }}
                    />
                    <span
                      className="h-7 w-5 rounded-e-md shadow-sm ring-1 ring-black/10"
                      style={{ backgroundColor: theme.second }}
                    />
                  </div>

                  {/* Name */}
                  <span
                    className={cn(
                      "flex-1 text-start text-[13px] font-medium",
                      isDark ? "text-white/80" : "text-gray-700",
                    )}
                  >
                    {theme.name}
                  </span>

                  {/* Active indicator */}
                  <span
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full transition-all duration-150",
                      isActive ? "scale-100 opacity-100" : "scale-75 opacity-0",
                    )}
                    style={{
                      backgroundColor: theme.accent,
                    }}
                  >
                    <Check size={12} className="text-white" strokeWidth={2.5} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
