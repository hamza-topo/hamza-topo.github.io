import React from "react";
import "../css/Footer.css";

const LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hamza-ait-sidi-said/",
    icon: "in",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/your-handle",
    icon: "𝕏",
  },
  {
    name: "GitHub",
    href: "https://github.com/hamza-topo/",
    icon: "GH",
  },
];

export default function Footer(props) {
  const year = new Date().getFullYear();
  const lastUpdate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <footer className="footer" id="footer">
      <div className="footerIcons">
        {LINKS.map(function (l) {
          return (
            <a
              key={l.name}
              className="footerIconBtn"
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={l.name}
              title={l.name}
            >
              <span className="footerIcon">{l.icon}</span>
            </a>
          );
        })}
      </div>

      <div className="footerMeta">
        <span>© {year} Hamza Ait Sidi Said</span>
        <span className="footerDot">•</span>
        <span>Updated {lastUpdate}</span>

        {props.version ? (
          <>
            <span className="footerDot">•</span>
            <span>v: {props.version}</span>
          </>
        ) : null}
      </div>
    </footer>
  );
}
