import React from "react";
import "../css/Footer.css";

const LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hamza-ait-sidi-said/",
    icon: '<i class="devicon-linkedin-plain"></i>',
  },
  {
    name: "Twitter",
    href: "https://x.com/topo444042922",
    icon: "<i class='devicon-twitter-original'></i>",
  },
  {
    name: "GitHub",
    href: "https://github.com/hamza-topo/",
    icon: '<i class="devicon-github-original"></i>',
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
              {l.icon ? (
              <div
                className="toolIcon"
                dangerouslySetInnerHTML={{ __html: l.icon }}
              />
            ) : (
              <img src={l.logo} alt={l.name} loading="lazy" />
            )}
            </a>
          );
        })}
      </div>

      <div className="footerMeta">
        <span>© {year} / {props.author ? (
          <>
            <span>{props.author}</span>
          </>
        ) : null}</span>
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
