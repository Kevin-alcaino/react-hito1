function CardPizza({ img, name, description, price }) {
  return (
    <div className="producto">
      <img className="producto-img" src={img} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <button onClick={() => alert('¡Producto agregado al carrito!')}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default CardPizza;