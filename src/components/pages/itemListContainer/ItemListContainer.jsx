import "./ItemListContainer.css";
import React from "react";

const ItemListContainer = (props) => {
  return (
    <div className="container">
      <h2>{props.titulo}</h2>
      <p>Todos los juguetes que te puedas imaginar y más...</p>
    </div>
  );
};

export default ItemListContainer;
