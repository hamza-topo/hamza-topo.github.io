import React from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(() =>
    document.body.classList.contains("dark")
  );

  React.useEffect(() => {
    // restore saved theme
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setIsDark(true);
    } else if (saved === "light") {
      document.body.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);

    if (next) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="themeToggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="lamp" aria-hidden="true">
        <span className="lampHead" />
        <span className="lampGlow" />
      </span>
    </button>
  );
}
