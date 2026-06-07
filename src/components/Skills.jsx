import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5 & CSS3", percentage: "100%", icon: "🌐" },
        { name: "JavaScript (ES6+)", percentage: "95%", icon: "📜" },
        { name: "React.js", percentage: "100%", icon: "⚛️" },
        { name: "Bootstrap 5", percentage: "95%", icon: "🅱️" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", percentage: "85%", icon: "🟢" },
        { name: "Express.js", percentage: "90%", icon: "🚂" },
        { name: "PostgreSQL", percentage: "95%", icon: "🐘" },
        { name: "MongoDB / Mongoose", percentage: "95%", icon: "🍃" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", percentage: "85%", icon: "🐍" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Technical Expertise</h2>
          <div className="underline"></div>
          <p className="subtitle">Continuously evolving and mastering modern technologies to build robust applications.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-items">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}</span>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ "--target-width": skill.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

