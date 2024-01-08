import React from "react";
import Contact from "../../components/contact/contact";
import Projects from "../../components/projects/projects";
import image from "../../images/JAFCDevPhoto.jpg";
import { Link } from "react-router-dom"
import "./home.css"; 

function Home() {
  return (
    <div className="home-container">
      <h1>
        José Alberto Fuenmayor Coa
      </h1>
      <div className="home-box">
      <img className="photo" src={image} alt="Image Not Found." />
      <div className="description">
        <p>
          Hello everyone! My name is José Fuenmayor, and I'm delighted to share
          my journey with you. I'm a cooking enthusiast, and at the same time,
          I'm excited about the world of technology.
        </p>

        <p>
          For several years, I've had the opportunity to develop my culinary
          skills as a cook and baker. These experiences have taught me the
          importance of creativity, precision, and teamwork in achieving
          exceptional results.
        </p>

        <p>
          However, curiosity and a desire to learn more led me to explore the
          field of programming. Currently, I'm in the final stage of my studies
          in this field. I discovered that programming is a way to express my
          creativity differently and efficiently solve problems.
        </p>

        <p>
          I am a committed, passionate individual who is ready to take on new
          challenges. I love working as part of a team and collaborating with
          other professionals to achieve outstanding outcomes. I'm open to new
          opportunities in the field of technology, app development, or any
          project that combines all the skills I've been able to develop during
          this time.
        </p>

        <p>
          Thank you for visiting my portfolio. I look forward to the opportunity
          to collaborate and learn from other professionals in this industry.
        </p>
        
        <Link to="https://drive.google.com/file/d/1Q3KTqZzFPIAZiEiIVlHfm1QILzT7J7xs/view?usp=drive_link" target="_blank">
        <button>Download CV</button>
        </Link>
        </div>
      </div>
     
      <Contact />
      <h1>Projects</h1>
      <Projects />
    </div>
  );
}

export default Home;
