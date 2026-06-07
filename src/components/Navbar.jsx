import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link activeClass="active" to="home" smooth={true} duration={500} spy={true} offset={-70}>
              HOME
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="about" smooth={true} duration={500} spy={true} offset={-70}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" smooth={true} duration={500} spy={true} offset={-70}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="project" smooth={true} duration={500} spy={true} offset={-70}>
              PROJECT
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" smooth={true} duration={500} spy={true} offset={-70}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
