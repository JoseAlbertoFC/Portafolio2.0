import React from "react";
import Card from "../card/card";
import Data from "../../data/data"


const Cards = () => {
  return (
    <div>
      <div>Este es el Componenete Cards</div>
      {Data.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Cards;
