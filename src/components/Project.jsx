import React from "react";
import cup from "../assets/cup.png";

function Project() {
  const projects = [
    {
      title: "CUP & PETALS",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL.",
      image: cup,
      link: "https://frontend-theta-sepia-50.vercel.app",
    },
    {
      title: "ADPERMIT",
      description:
        "A responsive portfolio website showcasing my skills and projects.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      link: "#",
    },
    {
      title: "Task Management Tool",
      description:
        "A productivity app to manage daily tasks and deadlines efficiently.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      link: "#",
    },
  ];

  return (
    <section id="project" className="projects-section">
      <h1 className="section-title">My Projects</h1>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;