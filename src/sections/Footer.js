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
  {
    name: "Email",
    href: "mailto:hamzaaitsidisaid11@outlook.com?subject=Hello%20Hamza",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 
        0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
        4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    `,
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
              target={l.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={l.name}
              title={l.name}
            >
              <div
                className="toolIcon"
                dangerouslySetInnerHTML={{ __html: l.icon }}
              />
            </a>
          );
        })}
      </div>

      <div className="footerMeta">
        <span>
          © {year} / {props.author ? <span>{props.author}</span> : null}
        </span>

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