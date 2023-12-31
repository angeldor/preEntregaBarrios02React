import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      {/* aca todo el detalle */}
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      <p>{productSelected.description}</p>
      {/* Aca el contador */}
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
