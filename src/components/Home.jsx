import React from "react";
import keerthi from "../assets/keerthi.jpg";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <section className="home">
        <div className="card-section">
          <h1 className="name">
            I'm!
            KEERTHIGA <br />
            PRAKASH
          </h1>
          <h4 className="developer">FULL MERN Stack Developer</h4>
          <Link to="contact"><button className="ready-btn">I'M READY</button></Link>
          <Link to="about"><button className="ready-btn1">GET IN TOUCH</button></Link>
        </div>

        <div className="card-section">
          <img src={keerthi} alt="Keerthi" />
        </div>
      </section>
    </>
  );
}

export default Home;