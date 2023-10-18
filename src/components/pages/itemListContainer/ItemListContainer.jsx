import "./ItemListContainer.css";
import { useState } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName ? "estoy intentando filtrar" : "Estoy en el home");

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
