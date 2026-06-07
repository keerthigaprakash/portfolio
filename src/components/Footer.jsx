import React from "react";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#03045e",
      color: "white",
      textAlign: "center",
      padding: "20px",
      fontSize: "0.9rem"
    }}>
      <p>&copy; {new Date().getFullYear()} Keerthiga Prakash. All rights reserved.</p>
    </footer>
  );
}

export default Footer;