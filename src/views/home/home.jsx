import React from "react";
import Contact from "../../components/contact/contact"
import Projects from "../../components/projects/projects";
import "./home.css";

function Home() {
  return (
    <div>
      <div>Esta es la vista del Home</div>
      <Contact />
      <Projects />
    </div>
  );
}

export default Home;
