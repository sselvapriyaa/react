import React from "react";
import bioPic from "../assets/bio-pic.png";

const About = () => (
  <div
    className="text-center"
    style={{
      backgroundColor: "#122240",
      color: "#c0a98e",
      padding: "35px",
    }}
  >
    <h1 id="about" style={{ textAlign: "center" }}>About Me</h1>
    <center><img
      src={bioPic}
      style={{ width: "30%", height: "300px", padding: "30px"}}
      alt="pic of author"
    /></center>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      I am a Full-Stack Developer with a strong work ethic. I love working on
      collaborative teams, and passionate about learning new programming languages.
    </p>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      I enjoy my time in a Full-Stack Development returnship, 
      where I learned a wide variety of languages and tools. Some of these include 
      JavaScript, React, HTML, CSS, Node.js, SQL, GitHub, and VS Code.
    </p>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      I grew up in India and I currently live in Wisconsin. I enjoy spending time with my family,
      especially watching my son perform his talents in music. 
    </p>
  </div>
);

export default About;