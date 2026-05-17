import React from "react";
import "../css/Projects.css";

const scope = [
  "L2/L3 support",
  "incident analysis",
  "change requests",
  "PHP/Symfony evolutions",
  "API/SOAP integrations",
  "database updates",
  "production releases",
  "stakeholder coordination",
];

export default function EnterpriseWork() {
  return (
    <section className="enterpriseWork" id="enterprise-work">
      <header className="projectsHeader">
        <h2 className="projectsTitle">Enterprise work</h2>
      </header>

      <article className="enterpriseCard">
        <div>
          <p className="enterpriseEyebrow">Digital & ERP Applications</p>
          <h3 className="enterpriseTitle">Capgemini / Energy sector</h3>
          <p className="enterpriseDesc">
            Maintenance, support and evolution of enterprise applications in production environments.
          </p>
        </div>

        <div className="enterpriseScope">
          <p>Scope:</p>
          <div className="projectTags">
            {scope.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
