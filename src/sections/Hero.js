import React from "react";
import "../css/Hero.css";
import me from "../assets/me-work.png";

export default function Hero() {
  return (

    <section className="hero" id="hero">
      <div className="heroInner heroSplit">
        <div className="heroContent">
          <p className="heroKicker">hi, i’m hamza</p>

          <h1 className="heroTitle">
            software lead engineer.
            <br />
            <span>i build, maintain and ship</span>
            <br />
            real-world web applications.
          </h1>

          <p className="heroSub">
            I work on enterprise Digital & ERP applications, legacy systems, support L2/L3,
            API integrations and production-ready delivery.
          </p>

          <div className="heroSignals" aria-label="Professional focus">
            <span>PHP / Symfony</span>
            <span>Enterprise apps</span>
            <span>Production support</span>
          </div>
        </div>

        <div className="heroVisual">
          <img src={me} alt="Hamza portrait" />
        </div>
      </div>
    </section>
  );
}
