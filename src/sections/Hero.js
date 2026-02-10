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
              I work on <strong>real-world projects</strong>, deal with legacy systems and constraints,
              and focus on shipping maintainable, production-ready solutions.
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
