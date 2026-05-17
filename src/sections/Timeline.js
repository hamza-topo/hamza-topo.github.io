import React from "react";
import "../css/Timeline.css";
import timeline from "../data/timeline.data";


export default function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <header className="timelineHeader">
        <h2 className="timelineHeading">Experience that shipped real systems.</h2>
      </header>
      <div className="timelineContainer">
        <a href="/CV_2026-02-10_AIT-SIDI-SAID_HAMZA.pdf" download className="timelineTitle">
          Download CV
        </a>
      </div>
      <div className="timelineTrack" aria-label="Work experience timeline">
        {timeline.map(function (exp, idx) {
          const side = idx % 2 === 0 ? "left" : "right";

          return (
            <article key={`${exp.company}-${exp.start}-${idx}`} className={`timelineItem ${side}`}>
              <div className="timelineDot" aria-hidden="true" />
              <div className="timelineCard">
                <div className="timelineTopRow">
                  <div className="timelineMeta">
                    <p className="timelineJob">{exp.job}</p>
                    <p className="timelineCompany">{exp.company}</p>
                  </div>

                  <div className="timelineDates">
                    {exp.start} — {exp.end}
                  </div>
                </div>

                <p className="timelineRole">{exp.role}</p>

                {exp.projects && exp.projects.length ? (
                  <ul className="timelineProjects">
                    {exp.projects.map(function (p) {
                      return <li key={p}>{p}</li>;
                    })}
                  </ul>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
