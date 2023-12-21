import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ project }) => {
  console.log('Rendering Card component', project);
  const { id, name, image, url } = project;
  return (
    <div className="card-container">
      <Link to={`/projects/${id}`}>
        <div>Este es el componente Card</div>
        <img src={image} alt="Image Not Found" />
      </Link>
      <h2>{name}</h2>
      <Link to={url} target="_blank">
        <button>Project Link</button>
      </Link>
    </div>
  );
};

export default Card;
