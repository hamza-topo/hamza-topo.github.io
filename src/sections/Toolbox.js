import React from "react";
import "../css/Toolbox.css";
import toolbox from "../data/toolbox.data";

const groups = ["All", "Backend", "Frontend", "Data", "DevOps", "Workflow", "Project Management"];

export default function Toolbox() {
  const [active, setActive] = React.useState("All");

  const items =
    active === "All" ? toolbox : toolbox.filter((t) => t.group === active);

  return (
    <section className="toolbox" id="toolbox">
      <header className="toolboxHeader">
        <h2 className="toolboxTitle">toolbox.</h2>
        <p className="toolboxSub">stuff I use to ship real systems.</p>

        <div className="toolboxFilters">
          {groups.map((g) => (
            <button
              key={g}
              type="button"
              className={`filterBtn ${active === g ? "isActive" : ""}`}
              onClick={() => setActive(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </header>

      <div className="toolboxGrid">
        {items.map((t) => (
          <div className="toolCard" key={`${t.group}-${t.name}`}>
            {t.icon ? (
              <div
                className="toolIcon"
                dangerouslySetInnerHTML={{ __html: t.icon }}
              />
            ) : (
              <img src={t.logo} alt={t.name} loading="lazy" />
            )}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
