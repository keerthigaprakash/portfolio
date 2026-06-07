import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Get In Touch</h1>
      <div className="contact-main-container">
        <div className="contact-info">
          <h3>Contact Details</h3>
          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <p className="label">Email</p>
              <a href="mailto:kkeerthigaprakash@gmail.com">kkeerthigaprakash@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">💼</span>
            <div>
              <p className="label">LinkedIn</p>
              <a href="https://www.linkedin.com/in/keerthiga-prakash-54bb91317/" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">💻</span>
            <div>
              <p className="label">GitHub</p>
              <a href="https://github.com/keerthigaprakash" target="_blank" rel="noopener noreferrer">View Repositories</a>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <p className="label">Location</p>
              <p>Erode, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send a Message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;