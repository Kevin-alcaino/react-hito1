
function cardPizza({ img, name, description, price }) {
  return (
    <div className="cont-producto">
    <div className="producto">
      <img className="producto-img" src={img} alt={name} />
      <h4>{name}</h4>
      <h10>{description}</h10>
      <p>Precio: ${price}</p>
      <button onClick={() => alert('¡Producto agregado al carrito!')}>
        Agregar al Carrito
      </button>
    </div>
    </div>
  );
}

export default cardPizza;