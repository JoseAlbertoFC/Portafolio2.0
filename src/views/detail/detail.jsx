import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Data from '../../data/data';
import "./detail.css";

const Detail = () => {
  const { id } = useParams();

  const project = Data.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project Not Found.</div>;
  }

  return (
    <div className="detail-container">
      <div className='image-container'>
      <img className='project-image' src={project.image} alt="Image Not Found" />
      </div>
      <div className='info-container'>
      <h2>{project.name}</h2>
      <h4>{"Collaborators: " + project.colaborators}</h4>
      <p>{project.description}</p>
      <p>{"Tecnologies: " + project.tecnologies}</p>
      <Link to={project.url} target="_blank">
      <button>Project Link</button>
      </Link>
      </div>
    </div>
  )
}

export default Detail