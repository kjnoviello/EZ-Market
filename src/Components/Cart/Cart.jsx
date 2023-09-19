import { useContext, useState } from "react";
import { CardContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cardList } = useContext(CardContext);
  console.log("esto es cartList", cardList);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  if (cardList.length === 0) {
    return  <div className="container-lg row bg-white containerDetail">
              <br />
              <h2>Tu carrito está vacio</h2>
              <div className="imgCarritoVacio shake-horizontal">
                <img src="carritoVacio.png" alt="carrito_vacio" />
              </div>
              <hr />
              <div>
                <Link to="/Productos">
                  <Button variant="success" className="btnVolverCarrito">Volver a tienda</Button>
                </Link>
                <Link to="/Productos/novedad">
                  <Button variant="success" className="btnVolverCarrito">Ir a novedades</Button>
                </Link>
              </div>
            </div>
  } else {
    return (
      <div className="container-lg row bg-white containerDetail">
        <div className="product-list">
          <ul>
            <li  id="productList">
              <div>
                <p><strong>Cantidad total</strong></p>
              </div>
              <div>
                <p><strong>Precio total</strong></p>
              </div>
            </li>
            {cardList.map((product) => (
              <>
              <li id="productID" key={product.id}>
                <div className="productID-divP">
                  <p>{product.titulo}</p>
                  <p>{product.count}u.</p>
                  <p>{product.precio}</p>
                </div>
                <div className="productID-divBtn">
                  <Button variant="success" onClick={() => handleShowDetails(product)}>
                    Ver Detalles
                  </Button>
                  <Button variant="dark">X</Button>
                </div>
              </li>
              </>
            ))}
          </ul>
        </div>
        <div className="product-details">
          {selectedProduct && (
            <>
              <h2>Detalles del Producto</h2>
                <div className="detalleDiv">
                  <div className="imgDiv ">
                      <img className='img' src={selectedProduct.imagen} alt="" />
                  </div>
                  <div>
                    <p><strong>Titulo:{selectedProduct.titulo} </strong></p>
                    <p><strong>Autor: {selectedProduct.autor}</strong></p>
                    <p><em>Descripción: {selectedProduct.descripcion}</em></p>
                  </div>
                </div>
              <Button variant="success" onClick={handleCloseDetails}>
                Cerrar Detalles
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }
}


export default Cart;