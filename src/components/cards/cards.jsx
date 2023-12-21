import React from "react";
import Card from "../card/card";
import Data from "../../data/data"
import "./cards.css"


const Cards = () => {
  return (
    <div className="cards-list">
      <div>Este es el Componenete Cards</div>
      {Data.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Cards;
