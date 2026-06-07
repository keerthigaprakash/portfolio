import React from "react";
import resume from "../assets/keerthiga cv.pdf";

function About() {
  return (
    <>
      <section className="about">
        <div className="about-card">
          <h2 className="abo-me">About Me!!</h2>
          <div className="line"></div>

          <p className="about-para">
            Hello, I’m Keerthiga Prakash. I’m a passionate and detail-oriented developer with strong
            problem-solving skills and practical coding experience. I’m proficient in JavaScript, React, Node.js,
            Express.js, and PostgreSQL, with a solid foundation in web development. I have the ability to design and develop
            dynamic, full-stack web applications that deliver seamless user experiences. I’m eager to begin my
            career as an entry-level software developer in a reputed, technology-driven organization where I can
            apply my skills, contribute to impactful projects, and grow as a professional.
          </p>

          <a href={resume} download="Keerthigaprakash_Resume.pdf">
            <button className="download-btn">Download My Resume</button>
          </a>
        </div>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');`}
        </style>
      </section>
    </>
  );
}

export default About;
