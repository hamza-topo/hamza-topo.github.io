import React from "react";
import "../css/Social.css";

const links = [
  { label: "GitHub", href: "https://github.com/hamza-topo" },
  { label: "LinkedIn", href: "https://www.linkedin.com" }, // replace
  { label: "Email", href: "mailto:your.email@example.com" }, // replace
];

export default function Social() {
  return (
    <section className="social" id="social">
      <div className="socialInner">
        <h2 className="socialTitle">i’m using social media.</h2>
        <p className="socialSub">find me here — i reply when i’m not shipping.</p>

        <div className="socialLinks">
          {links.map((l) => (
            <a
              key={l.label}
              className="socialBtn"
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
