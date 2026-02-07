import React from "react";
import "../css/Projects.css";
import projects from "../data/projects.data";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <header className="projectsHeader">
        <h2 className="projectsTitle">i build in public.</h2>
        <p className="projectsIntro">
          Visual proof. Short descriptions. Links when shareable.
        </p>
      </header>

      <div className="projectsGrid">
        {projects.map((p, idx) => (
          <article className="projectCard" key={idx}>
            <div className="projectMedia">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>

            <div className="projectBody">
              <h3 className="projectName">{p.title}</h3>
              <p className="projectDesc">{p.description}</p>

              <div className="projectTags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="projectLinks">
                {p.links.github && (
                  <a className="linkBtn" href={p.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {p.links.demo && (
                  <a className="linkBtn" href={p.links.demo} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
