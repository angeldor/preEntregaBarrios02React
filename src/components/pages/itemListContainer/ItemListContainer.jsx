import "./ItemListContainer.css";
import { useState } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  return (
    <div className="container">
      <h2>{props.titulo}</h2>
      <p>Todos los juguetes que te puedas imaginar y más...</p>
    </div>
  );
};

export default ItemListContainer;
