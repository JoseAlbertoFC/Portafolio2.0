import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ project }) => {
  const { id, name, image, url } = project;
  return (
    <div>
      <Link to={`/projects/${id}`}>
        <div>Este es el componente Card</div>
        <img src={image} alt="Image Not Found" />
        <h2>{name}</h2>
        <Link to={url} target="_blank">
          <button>Project Link</button>
        </Link>
      </Link>
    </div>
  );
};

export default Card;
