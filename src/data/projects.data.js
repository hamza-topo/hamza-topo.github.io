import p1 from "../assets/projects/p1.svg";
import p2 from "../assets/projects/p2.svg";
import p3 from "../assets/projects/p3.svg";

const projects = [
  {
    title: "TASK MANAGER API",
    description:
      "Backend REST API for managing projects and tasks, designed with clean architecture principles, JWT authentication, and Docker-based deployment using PostgreSQL.",
    tags: ["REST API", "JWT Authentication", "Clean Architecture"],
    image: p1,
    links: {
      demo: null,
      github: "https://github.com/hamza-topo/task-manager-api"
    }
  },
  {
    title: "PetMingle – Pet Matching API",
    description:
      "RESTful Pet Matching API built with Laravel 8, designed for mobile and web consumption, with an extensible and well-documented backend architecture.",
    tags: ["Laravel", "REST API", "Mobile Backend"],
    image: p2,
    links: {
      demo: null,
      github: "https://github.com/hamza-topo/petmingle/"
    }
  },
  {
    title: "Filovent Rebuild",
    description:
      "Website redesign of Filovent with a strong focus on UX/UI improvements, performance optimization, and responsive design.",
    tags: ["Fullstack", "Website Redesign", "Performance Optimization"],
    image: p3,
    links: {
      demo: "https://www.filovent.com/",
    }
  }
];

export default projects;
