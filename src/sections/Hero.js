import React from "react";
import "../css/Hero.css";
import me from "../assets/me-work.png";

export default function Hero() {
  return (

    <section className="hero" id="hero">
      <div className="heroInner heroSplit">
        {/* LEFT */}
        <div className="heroContent">
          <div className="heroInner">
            <p className="heroKicker">👋 hi, i'm hamza</p>

            <h1 className="heroTitle">
              i’m not a <span className="heroOutline">robot</span>.
              <br />
              i build things that actually work.
            </h1>

            <p className="heroSub">
              I code for <strong>money</strong> first — and still enjoy it.
              I work on real projects, deal with legacy and constraints,
              and ship maintainable systems that survive production.
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="heroVisual">
          <img src={me} alt="Hamza portrait" />
        </div>
      </div>
    </section>
  );
}
