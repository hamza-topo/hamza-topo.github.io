import React from "react";
import "../css/Contact.css";

export default function FinalCta() {
  return (
    <section className="finalCta" id="contact">
      <div>
        <p className="finalCtaKicker">available for enterprise-minded teams</p>
        <h2>Interested in building or maintaining reliable web applications?</h2>
      </div>

      <div className="finalCtaActions">
        <a className="ctaBtn ctaBtnPrimary" href="/CV_2026-02-10_AIT-SIDI-SAID_HAMZA.pdf" download>
          Download CV
        </a>
        <a className="ctaBtn" href="mailto:hamzaaitsidisaid11@outlook.com?subject=Portfolio%20contact">
          Contact me
        </a>
        <a className="ctaBtn" href="https://www.linkedin.com/in/hamza-ait-sidi-said/" target="_blank" rel="noopener noreferrer">
          View LinkedIn
        </a>
      </div>
    </section>
  );
}
