"use client";

/**
 * ThemeScript – inline script that runs *before* React hydration to
 * restore the persisted color theme and dark/light mode.
 *
 * It reads from localStorage and applies:
 *   - CSS custom properties for --color-main, --color-second, --color-accent-brand
 *   - The "dark" class on <html>
 *
 * Because it's a synchronous <script> in <head>, it prevents the
 * flash-of-wrong-theme (FOWT) problem.
 */
export function ThemeScript() {
  const themeScript = `
(function(){
  try {
    var themes = {
      midnight:   { m:"#1a2332", s:"#b0c4d8", a:"#4a7a9b" },
      slate:      { m:"#252a2e", s:"#c8ccd0", a:"#5e7080" },
      espresso:   { m:"#2c2118", s:"#d4c5a9", a:"#8b6f47" },
      burgundy:   { m:"#3a1a24", s:"#d4b8c1", a:"#8b4a5e" },
      evergreen:  { m:"#1b3a34", s:"#a8c5b8", a:"#3d8b6e" },
    };
    var id = localStorage.getItem("dewan-theme-id") || "midnight";
    var t = themes[id] || themes.midnight;
    var d = document.documentElement;
    d.style.setProperty("--color-main", t.m);
    d.style.setProperty("--color-second", t.s);
    d.style.setProperty("--color-accent-brand", t.a);
    if (localStorage.getItem("dewan-dark-mode") === "dark") {
      d.classList.add("dark");
    }
  } catch(e){}
})();
`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
